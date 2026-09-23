import type { ColoredText } from '@/types/primitives/ColoredText';

/**
 * Заменяет пробелы после коротких слов (1–3 символа) на неразрывные,
 * чтобы предлоги и союзы не оставались висячими на конце строки.
 */
export function nobr(text?: string): string {
  if (!text) return '';

  return text.replace(/(\s|^)(\S{1,3})\s/g, '$1$2\u00A0');
}

/**
 * Оборачивает вхождение подстроки `colored` в тексте в `<span class="colored">`.
 * Если `colored` не задан или пустой — возвращает текст без изменений.
 */
export function colorize({ text, colored }: ColoredText) {
  if (!text) return '';

  return !colored || !colored.length
    ? text
    : text?.replace(colored, `<span class="colored">${colored}</span>`);
}

/**
 * Применяет `colorize` и `nobr` последовательно:
 * сначала выделяет цветной фрагмент, затем расставляет неразрывные пробелы.
 */
export function pretty({ text, colored }: ColoredText) {
  return nobr(colored ? colorize({ text, colored }) : (text ?? ''));
}

/**
 * Возвращает число со склонённым словом по правилам русского языка.
 * Пример: pluralize(2, 'год', 'года', 'лет') → '2 года'
 */
export function pluralize(
  n: number,
  one: string,
  few: string,
  many: string,
): string {
  const abs = Math.abs(n);
  const mod10 = abs % 10;
  const mod100 = abs % 100;

  const form =
    mod100 >= 11 && mod100 <= 19
      ? many
      : mod10 === 1
        ? one
        : mod10 >= 2 && mod10 <= 4
          ? few
          : many;

  return nobr(`${n} ${form}`);
}
