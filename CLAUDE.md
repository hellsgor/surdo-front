@AGENTS.md

---

# Проект: surdo-front

Персональный сайт Полины — логопеда и сурдопедагога. SEO + конверсия в Telegram / VK.

## Стек

- **Next.js 16** — App Router, SSG
- **React 19** + React Compiler (`reactCompiler: true`)
- **Tailwind CSS v4** — конфиг через CSS (`@theme` в globals.css), **нет tailwind.config.ts**
- **HeroUI v3 beta** — нет Provider, Tailwind v4 required
- **Solar Icons** (`@solar-icons/react/ssr` для SSR)
- **Strapi v5** — `~/Projects/surdo/surdo-cms`, SSG + вебхук → `revalidatePath`

## Дизайн

- Акцент: оранжевый `#EF6424`; палитра в `src/themes/surdo.css` (`[data-theme="surdo"]`)
- Шрифты: PT Sans (текст) + Marmelad (заголовки), `next/font/google` в `layout.tsx`
- Брейкпоинты: Desktop ≥1025px, Tablet 768–1024px, Mobile <768px (от 375px)
- Типографика: `clamp()` от 375 до 1440px

## Структура компонентов

```
src/components/
  layout/   — Header, Footer и другие layout-компоненты
  ui/       — абстрактные переиспользуемые; стили через className, без хардкода цветов
```

## Структура `<body>`

```
<body> flex-col min-h-full
  ├── <Header>
  ├── <main class="flex-1">  ← {children}
  ├── <CtaBlock>             ← на каждой странице, вне <main>
  └── <Footer>
```

## Правила

- Иконки: только Solar Icons. Не Heroicons, не Lucide.
- CTA: только прямые ссылки на Telegram и VK. Форм нет.
- Только light тема (`color-scheme: light`).
- Кастомные стили через `@layer typography` (не `base`) — единственный способ переопределить HeroUI.
