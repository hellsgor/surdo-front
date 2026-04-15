/**
 * Replaces spaces after short words (1–2 chars) with non-breaking spaces
 * to prevent orphaned prepositions at line ends.
 */
export function nobr(text: string): string {
  return text.replace(/(\s|^)(\S{1,2})\s/g, '$1$2\u00A0');
}
