export function formatCopyRight(text: string): string {
  const currentYear = new Date().getFullYear();
  return text.replace(/(\d{4})-\d{4}/, (_, firstYear: string) =>
    firstYear === String(currentYear)
      ? String(currentYear)
      : `${firstYear}-${currentYear}`,
  );
}
