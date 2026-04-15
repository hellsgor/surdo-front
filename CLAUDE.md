@AGENTS.md

---

# Проект: surdo-front

Персональный сайт Полины — логопеда и сурдопедагога. SEO + конверсия в Telegram / VK.

## Стек

- **Next.js 16** — App Router, SSG
- **React 19** + React Compiler (`reactCompiler: true`)
- **SCSS (sass)** — модули `.module.scss` для компонентов
- **stylelint** (`stylelint-config-recommended-scss` + `stylelint-config-clean-order`) — линт SCSS
- **modern-normalize** — нормализация стилей
- **clsx** — условные классы
- **Solar Icons** (`@solar-icons/react`)
- **React Aria Components** — только для сложных интерактивных элементов (аккордеон, модалка)
- **GraphQL** + **`@graphql-codegen`** — типизированный клиент к Strapi
- **Strapi v5** — `~/Projects/surdo/surdo-cms`, SSG + вебхук → `revalidatePath`

## Дизайн

- Акцент: оранжевый `#EF6424`; палитра в `src/scss/colors.scss` (`:root`)
- Шрифты: PT Sans (текст) + Marmelad (заголовки), `next/font/google` в `layout.tsx`
- Брейкпоинты: Desktop ≥1025px, Tablet 768–1024px, Mobile <768px (от 375px)
- Типографика: `clamp()` от 375 до 1440px в `src/scss/typography.scss`

## Структура

```
src/
  app/             — App Router (страницы, layout)
  components/
    layout/        — Container, CtaWidget, Footer (layout-компоненты)
    ui/            — абстрактные переиспользуемые (Button и т.д.)
  config/
    strapi.ts      — URL Strapi, toAbsoluteUrl()
  scss/
    globals.scss   — точка входа
    colors.scss    — CSS-переменные (:root)
    typography.scss— типографика
  services/
    graphql/
      queries/     — .ts-файлы с gql-запросами (источник для codegen)
      generated/   — graphql.ts (авто, не редактировать)
      getters/     — async fetch-функции (getGlobalData, getMainPageData…)
      mappers/     — raw GraphQL → доменные типы
      lib/         — handleGraphQLResponse и вспомогательные
      client.ts    — fetch-обёртка с next: { tags: ['strapi'] }
  types/
    primitives/    — Image, Icon, Link, Tag, ColoredText, Bullet
    components/    — Advantage, FaqItem, MenuItem, Review…
    widgets/       — About, Cta, Faq, Footer, Hero, Reviews, Tasks…
    GlobalData.ts  — тип ответа getGlobalData
    MainPage.ts    — тип ответа getMainPageData
  utils/
    typography.ts  — nobr() и другие текстовые утилиты
```

## Структура `<body>`

```
<body>
  ├── <main>        ← {children}
  ├── <CtaWidget>   ← на каждой странице, вне <main>
  └── <Footer>
```

## Слой данных

1. Запросы — `src/services/graphql/queries/*.ts` (gql-строки)
2. Типы — генерируются в `src/services/graphql/generated/graphql.ts` командой `yarn codegen`
3. Геттеры — `getters/*.ts` вызывают `client()`, возвращают сырые данные
4. Маперы — `mappers/*.ts` преобразуют сырые данные в доменные типы из `src/types/`
5. Перезагрузка — Strapi вебхук вызывает `revalidatePath` с тегом `strapi`

## Правила

- Иконки: только Solar Icons. Не Heroicons, не Lucide.
- CTA: только прямые ссылки на Telegram и VK. Форм нет.
- Только light тема (`color-scheme: light`).
- Без Tailwind, без HeroUI.
- Цвета в SCSS — только через `var(--*)` из `colors.scss`. Named colors (`red`, `blue`) запрещены (`color-named: never`). Хардкод-хексы — только в исключительных случаях.
- Порядок в SCSS-блоке: сначала declarations, потом `@include`/`@media` (enforced через `order/order`).
- Адаптив — через миксины `@include tab-only`/`m-only` + `tvw()`/`mvw()`, не сырые `@media`.
- `yarn lint` запускает ESLint + stylelint; `yarn codegen` — после изменения gql-запросов.
