---
name: create-component
description: Реализация нового React-компонента в surdo-front по проектным паттернам (SCSS-миксины, типография, Strapi-данные, a11y, stylelint). Использовать при запросах вида "создай компонент X", "добавь виджет Y", "нужен новый блок Z", "реализуй секцию".
---

# create-component

Ты создаёшь компонент в проекте **surdo-front**. Перед единой строкой кода пройди все шаги ниже по порядку. Пропустить шаг можно только если пользователь явно попросил.

---

## Шаг 1. Изучить макет через Figma MCP

**Обязательно.** Без макета компонент не делается.

- Если пользователь не дал ссылку/фрейм — спроси.
- Через MCP Figma-desktop получи: размеры, отступы, типографику, состояния (default/hover/active/focus/disabled), все брейкпоинты (desktop/tablet/mobile).
- Зафиксируй у себя текстом что ты увидел — это ответ на вопрос "что именно делаем".

## Шаг 2. Проверить документацию через context7

**Обязательно, даже если кажется что помнишь.** См. глобальную memory `feedback_check_docs_first.md`.

Как минимум:

- `Next.js 16` — App Router, Server vs Client Components, `next/image`, `next/link`, metadata, revalidation
- `React 19` — что изменилось, нюансы React Compiler (reactCompiler включён)
- `@solar-icons/react` — если нужны иконки (правильный импорт, weight)
- `clsx` — если работаешь с условными классами

Не угадывай API — сверяйся с актуальной докой через `mcp__context7__resolve-library-id` + `mcp__context7__query-docs`.

## Шаг 3. Поиск существующих паттернов

Прежде чем писать новое, изучи что уже есть:

- **Похожие компоненты**: `src/components/ui/`, `src/components/layout/`
  - `Button` — полиморфный (button/link) с вариантами и клсхом
  - `Footer`, `CtaWidget` — примеры работы со Strapi-данными
  - `Container` — layout-примитив
- **Типы-примитивы** (переиспользуй их): `src/types/primitives/` — Image, Icon, Link, Tag, ColoredText, Bullet
- **Типы компонентов/виджетов**: `src/types/components/`, `src/types/widgets/`
- **SCSS-инфраструктура**: `src/scss/mixins.scss`, `src/scss/functions.scss`, `src/scss/vars.scss`, `src/scss/colors.scss`
- **Утилиты**: `src/utils/typography.ts` — `nobr()`

Если нужный тип/миксин/утилита уже есть — используй его, не дублируй.

## Шаг 4. Задать минимум 10 уточняющих вопросов

Используй `AskUserQuestion` (по 2–4 вопроса за раз, несколько раундов). Вопросы формулируй **под конкретный компонент**, опираясь на макет и контекст — не шаблонно.

Темы, которые **должны быть покрыты** (формулировки свои):

1. Имя компонента и слой (`ui/`, `layout/`, или другой)
2. Server или Client Component — дефолт Server; Client только при хуках/событиях
3. Источник данных: пропсы, Strapi-запрос, статика
4. Если Strapi — новый GraphQL-запрос или расширить существующий (`queries/globalData.ts`, `queries/mainPage.ts`)
5. Полиморфизм (как в `Button`: button/link)? Какие варианты/модификаторы?
6. Адаптивное поведение — что меняется на tablet/mobile (layout, размеры, порядок)
7. Иконки — какие именно Solar Icons, weight
8. Изображения — `next/image` (контент) или CSS `background-image` (декоративные SVG, см. коммит `b93dddd`)
9. Доступность — семантический тег, ARIA-роль, keyboard navigation
10. Состояния — hover/active/focus/disabled и их визуал
11. Colocated-утилиты — нужны ли (как `formatCopyRight.ts` в `Footer/`)
12. Реэкспорт в `index.ts` слоя

Минимум 10, но можно и больше — лучше перепроверить, чем переделывать.

## Шаг 5. Структура файлов

```
src/components/<layer>/<Name>/
  <Name>.tsx              — сам компонент (named export)
  <Name>.module.scss      — стили
  <helper>.ts             — утилиты, если используются только здесь
  index.ts                — если нужен barrel
```

Реэкспорт в `src/components/<layer>/index.ts`:

```ts
export { Name } from './Name/Name';
```

## Шаг 6. Паттерны `.tsx`

- **Named export**: `export function Name(props: Props) { ... }`
- **Алиасы путей**: `@/components`, `@/types`, `@/utils`, `@/services`, `@/config`, `@/scss`
- **Типизация пропсов** — из `src/types/`, не инлайн-дубликаты; `type Props = { ... }` локально только для UI-пропсов без соответствия в типах домена
- **Полиморфизм** — дискриминированный union по ключевому пропсу с `Omit<HTMLAttributes, keyof Base>` (см. `Button.tsx`)
- **Условные классы** — `clsx(styles.block, variant && styles[variant], className)`
- **Иконки** — `import { X } from '@solar-icons/react/ssr'`, `weight="Linear"`, обычно `size="1em"` чтобы подхватывалось от `font-size`
- **`'use client'`** — только при хуках (useState/useEffect/useRef) или событиях (onClick) с клиентской логикой; иначе Server Component
- **Strapi-тексты** — заголовки и длинные фразы пропускай через `nobr()` из `@/utils/typography`
- **Внешние ссылки** — `target="_blank" rel="noopener noreferrer"` (см. как в `Button.tsx`)

## Шаг 7. Паттерны `.module.scss`

Первые строки файла:

```scss
@use '../../../scss/mixins' as *;
@use '../../../scss/functions' as *;
@use '../../../scss/vars' as v;
```

(количество `../` подгоняй под глубину вложенности)

Правила (часть enforce'ится stylelint'ом):

- **Цвета**: только через CSS-переменные (`var(--accent)`, `var(--orange-600)`, `var(--zinc-100)`, `var(--foreground)`). Named colors (`red`, `blue`) — запрещены (`color-named: never`). Хардкод-хексы — только в исключительных случаях (прозрачность в shadow), предпочитай `var(--*)`.
- **Шрифты**: `var(--font-heading)` (Marmelad), `var(--font-body)` (PT Sans)
- **Порядок внутри блока**: сначала declarations, потом at-rules (`@include`, `@media`) — enforced через `order/order`
- **Адаптив**: desktop-first. Базовые значения — desktop, затем:
  - `@include tab-only { ... tvw(Npx) ... }` — 768–1024px
  - `@include m-only { ... mvw(Npx) ... }` — <768px
  - Никаких сырых `@media` — только миксины
- **Hover/active**: `@include hover { ... }` / `@include active { ... }` — содержат безопасные проверки `hover: hover` и `pointer: fine`
- **Пустые блоки** запрещены (`block-no-empty`)
- **Дубликаты селекторов** запрещены (`no-duplicate-selectors`)
- **Типографика**: если компонент содержит только заголовок без кастомных стилей — положись на глобальный `typography.scss`, не дублируй

## Шаг 8. Чеклист доступности

- [ ] Семантический тег: `<button>`, `<a href>`, `<nav>`, `<section>` с заголовком, `<article>`, `<header>`, `<footer>`
- [ ] Внешние ссылки: `target="_blank" rel="noopener noreferrer"`
- [ ] Интерактив без видимого текста → `aria-label`
- [ ] Focus-стиль не отключать: либо `:focus-visible { ... }`, либо оставить браузерный outline
- [ ] Декоративные иконки → `aria-hidden="true"`; смысловые → `aria-label`
- [ ] Изображения: `alt` всегда; декоративные → `alt=""`
- [ ] Логичная иерархия заголовков (h1 → h2 → h3, без пропусков)
- [ ] Кликабельные зоны достаточно крупные на mobile (минимум ~44px touch target)

## Шаг 9. Работа со Strapi-данными

Если компонент тянет данные с CMS:

1. **Запрос** — `src/services/graphql/queries/*.ts` (gql-строка)
2. **Codegen** — `yarn codegen` обновит `src/services/graphql/generated/graphql.ts` (генерируется, не редактировать руками)
3. **Mapper** — `src/services/graphql/mappers/map<Thing>.ts`: из raw GraphQL в доменный тип из `src/types/widgets/` или `src/types/components/`
4. **Getter** — `src/services/graphql/getters/get<Page>Data.ts`: вызывает `client()`, применяет mapper, возвращает доменный тип
5. **Компонент** — принимает уже маппированный тип, **не рендерит сырые GraphQL-типы**

Запуск Strapi для codegen: проверь, что `yarn codegen` отработал без ошибок (если Strapi не запущен — codegen упадёт).

## Шаг 10. Работа с изображениями

Два пути:

- **Контентные** (фото, иллюстрации из Strapi, смысловые) → `next/image`
  - Тип `Image` из `src/types/primitives/Image.ts`
  - `toAbsoluteUrl` из `@/config/strapi` для относительных URL
  - Всегда `alt`
- **Декоративные SVG** (паттерны, фоны из `public/`) → CSS `background-image`
  - В `.module.scss`: `background-image: url('/path.svg')`
  - НЕ используй `<img>` для декорации — см. коммит `b93dddd`
  - Правильные `background-size`, `background-repeat`, `background-position`

## Шаг 11. После реализации

1. `yarn lint` — ESLint + stylelint должны пройти (0 errors)
2. Проверь IDE-диагностики (TypeScript strict, cSpell, markdownlint если трогал `.md`)
3. Если менялись GraphQL-запросы → `yarn codegen` должен отработать
4. Если доступен dev-сервер и MCP chrome-devtools:
   - Открой страницу с новым компонентом
   - Проверь desktop (1440px), tablet (1024px), mobile (375px) через `mcp__chrome-devtools__resize_page`
   - Проверь console на ошибки (`mcp__chrome-devtools__list_console_messages`)
   - Сверься с макетом — тот же ли результат

## Финальный чеклист перед сдачей

- [ ] Макет изучен через Figma MCP
- [ ] Доки проверены через context7
- [ ] ≥10 уточняющих вопросов задано через AskUserQuestion, ответы учтены
- [ ] Реиспользованы существующие типы / миксины / утилиты
- [ ] Server/Client выбран осознанно
- [ ] Цвета — через `var(--*)`, не хексы и не named colors
- [ ] Адаптив — через миксины `tab-only`/`m-only` + `tvw()`/`mvw()`, не сырые `@media`
- [ ] Порядок в блоке: declarations → `@include`/`@media`
- [ ] `nobr()` применён к заголовкам/коротким фразам из Strapi
- [ ] A11y-чеклист пройден
- [ ] Реэкспорт в `index.ts` слоя добавлен
- [ ] `yarn lint` зелёный
- [ ] IDE-диагностики чисты
- [ ] Проверено в браузере на всех брейкпоинтах (если dev-сервер доступен)
