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
