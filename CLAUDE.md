@AGENTS.md

---

# Проект: surdo-front

Персональный сайт Полины — логопеда и сурдопедагога. SEO + конверсия в Telegram / VK.

## Стек

- **Next.js 16** — App Router, SSG
- **React 19** + React Compiler (`reactCompiler: true`)
- **SCSS (sass)** — модули `.module.scss` для компонентов
- **modern-normalize** — нормализация стилей
- **Solar Icons** (`@solar-icons/react`)
- **React Aria Components** — только для сложных интерактивных элементов (аккордеон, модалка)
- **Strapi v5** — `~/Projects/surdo/surdo-cms`, SSG + вебхук → `revalidatePath`

## Дизайн

- Акцент: оранжевый `#EF6424`; палитра в `src/scss/colors.scss` (`:root`)
- Шрифты: PT Sans (текст) + Marmelad (заголовки), `next/font/google` в `layout.tsx`
- Брейкпоинты: Desktop ≥1025px, Tablet 768–1024px, Mobile <768px (от 375px)
- Типографика: `clamp()` от 375 до 1440px в `src/scss/typography.scss`

## Структура стилей

```
src/scss/
  globals.scss    — точка входа
  colors.scss     — CSS-переменные (:root)
  typography.scss — типографика
```

## Структура компонентов

```
src/components/
  layout/   — Header, Footer и другие layout-компоненты
  ui/       — абстрактные переиспользуемые
```

## Структура `<body>`

```
<body>
  ├── <Header>
  ├── <main>        ← {children}
  ├── <CtaWidget>   ← на каждой странице, вне <main>
  └── <Footer>
```

## Правила

- Иконки: только Solar Icons. Не Heroicons, не Lucide.
- CTA: только прямые ссылки на Telegram и VK. Форм нет.
- Только light тема (`color-scheme: light`).
- Без Tailwind, без HeroUI.
