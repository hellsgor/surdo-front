import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  ICONS_DIR: path.join(__dirname, '../assets/icons'),
  OUTPUT_FILE: path.join(__dirname, '../components/ui/Icon/index.tsx'),
  MAX_FILE_SIZE: 200 * 1024,
};

const ATTRIBUTE_MAP = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
};

function safeSvgRead(filePath) {
  try {
    const stats = fs.statSync(filePath);
    if (stats.size > CONFIG.MAX_FILE_SIZE) {
      console.warn(`⚠️  Файл ${path.basename(filePath)} слишком большой`);
      return null;
    }
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.warn(`⚠️  Ошибка чтения ${path.basename(filePath)}: ${error.message}`);
    return null;
  }
}

function transformSvgContent(content) {
  let result = content.trim().replace(/\n\s*/g, ' ').replace(/\s+/g, ' ');

  // Удаляем width и height атрибуты
  result = result
    .replace(/\s+width="[^"]*"/g, '')
    .replace(/\s+height="[^"]*"/g, '');

  // Заменяем цвета на currentColor
  result = result
    .replace(/fill="(?!none|currentColor)[^"]*"/g, 'fill="currentColor"')
    .replace(/stroke="(?!none|currentColor)[^"]*"/g, 'stroke="currentColor"');

  // kebab-case → camelCase
  for (const [kebab, camel] of Object.entries(ATTRIBUTE_MAP)) {
    result = result.replace(new RegExp(`\\b${kebab}\\b`, 'g'), camel);
  }

  return result;
}

function parseSvg(svgContent) {
  const viewBoxMatch =
    svgContent.match(/viewBox\s*=\s*["']([^"']+)["']/i) ||
    svgContent.match(/viewBox\s*=\s*([^\s>]+)/i);
  const svgTagMatch = svgContent.match(/<svg([^>]*)>/s);
  const contentMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);

  if (!viewBoxMatch || !contentMatch || !svgTagMatch) return null;

  // Извлекаем presentation-атрибуты с внешнего <svg> и переносим в <g>
  const PRESENTATION_ATTRS = ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'];
  const svgAttrs = svgTagMatch[1];
  const gAttrs = [];
  for (const attr of PRESENTATION_ATTRS) {
    const m = svgAttrs.match(new RegExp(`${attr}="([^"]*)"`));
    if (m) {
      const camelAttr = ATTRIBUTE_MAP[attr] || attr;
      gAttrs.push(`${camelAttr}="${m[1]}"`);
    }
  }

  const innerContent = transformSvgContent(contentMatch[1]);
  const content = gAttrs.length > 0
    ? `<g ${gAttrs.join(' ')}>${innerContent}</g>`
    : innerContent;

  return {
    viewBox: viewBoxMatch[1].trim(),
    content,
  };
}

function needsUpdate(svgFiles) {
  if (!fs.existsSync(CONFIG.OUTPUT_FILE)) return true;

  const outputTime = fs.statSync(CONFIG.OUTPUT_FILE).mtime.getTime();
  if (fs.statSync(CONFIG.ICONS_DIR).mtime.getTime() > outputTime) return true;

  for (const file of svgFiles) {
    const t = fs.statSync(path.join(CONFIG.ICONS_DIR, file)).mtime.getTime();
    if (t > outputTime) return true;
  }

  return false;
}

async function generate(force = false) {
  if (!fs.existsSync(CONFIG.ICONS_DIR)) {
    console.error(`❌ Папка ${CONFIG.ICONS_DIR} не найдена`);
    return false;
  }

  const svgFiles = fs
    .readdirSync(CONFIG.ICONS_DIR)
    .filter((f) => f.endsWith('.svg'))
    .sort();

  if (svgFiles.length === 0) {
    console.error('❌ SVG файлы не найдены');
    return false;
  }

  if (!force && !needsUpdate(svgFiles)) {
    console.log(`✅ Спрайт актуален (${svgFiles.length} иконок)`);
    return true;
  }

  const symbols = [];
  const iconNames = [];

  for (const file of svgFiles) {
    const content = safeSvgRead(path.join(CONFIG.ICONS_DIR, file));
    if (!content) continue;

    const parsed = parseSvg(content);
    if (!parsed) {
      console.warn(`⚠️  Не удалось обработать: ${file}`);
      continue;
    }

    const name = file.replace('.svg', '');
    iconNames.push(name);
    symbols.push({ id: name, viewBox: parsed.viewBox, content: parsed.content });
  }

  if (symbols.length === 0) {
    console.error('❌ Не удалось обработать ни одного файла');
    return false;
  }

  const iconNameType = iconNames.map((n) => `"${n}"`).join(' | ');

  const code = `// АВТОГЕНЕРИРОВАНО — не редактировать вручную
// Источник: src/assets/icons/
// Обновление: yarn icons
// Иконок: ${symbols.length}

export type IconName = ${iconNameType};

export function IconsSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
${symbols
  .map(
    (s) => `      <symbol id="${s.id}" viewBox="${s.viewBox}">
        ${s.content}
      </symbol>`,
  )
  .join('\n')}
    </svg>
  );
}

type Props = {
  name: IconName;
  size?: number | string;
  className?: string;
};

export function Icon({ name, size = 24, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <use href={\`#\${name}\`} />
    </svg>
  );
}
`;

  const outputDir = path.dirname(CONFIG.OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(CONFIG.OUTPUT_FILE, code, 'utf-8');

  try {
    await execAsync(`npx prettier --write "${CONFIG.OUTPUT_FILE}"`);
  } catch {
    // не критично
  }

  console.log(`✅ Сгенерировано ${symbols.length} иконок → ${CONFIG.OUTPUT_FILE}`);
  console.log('   ', iconNames.join(', '));
  return true;
}

async function watch() {
  console.log(`👁️  Отслеживаем ${CONFIG.ICONS_DIR}`);
  await generate(false);

  fs.watch(CONFIG.ICONS_DIR, { recursive: false }, (_, filename) => {
    if (filename?.endsWith('.svg')) {
      console.log(`🔄 Изменён: ${filename}`);
      setTimeout(() => generate(false), 100);
    }
  });

  process.on('SIGINT', () => process.exit(0));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const force = process.argv.includes('--force');
  const watchMode = process.argv.includes('--watch');

  if (watchMode) {
    await watch();
  } else {
    const ok = await generate(force);
    if (!ok) process.exit(1);
  }
}

export default generate;
