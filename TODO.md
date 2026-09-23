Фиксирую в этом файле то что нужно будет исправить в будущем

1. Очень странные имена классов формируются, например, `Section-module-scss-module__LwzKGG__section` или `Button-module-scss-module__VLzsWq__wrapper`. Нужно с этим разобраться и привести к более читаемому виду.
2. Нужно перепроверить всю систему формирования динамических величин, это про масштабируемую вёрстку. Нужно свериться с тем что я делал на проекте корп.сайта Командор.
3. периодически в терминале где запущен проект я вижу текст `   GET / 200 in 166ms (next.js: 7ms, application-code: 159ms) [browser] Image with src "http://localhost:1337/uploads/hero_d_94f965300e.webp" was detected as the Largest Contentful Paint (LCP). Please add the`loading="eager"`property if this image is above the fold. Read more: https://nextjs.org/docs/app/api-reference/components/image#loading  GET / 200 in 279ms (next.js: 23ms, application-code: 257ms)` с этим нужно разобраться и пофиксить.
