/**
 * Normalizes a typed answer for comparison.
 * Ignores case, outer spaces, repeated spaces, punctuation and accents,
 * so "Heb je." matches "heb je" and "cafe" matches "café".
 */
export function normalizeAnswer(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[.,!?;:"'“”‘’()\[\]{}\-–—]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** True when the typed value matches the correct answer or one of the accepted variants. */
export function isAnswerCorrect(
  typed: string,
  correctAnswer: string,
  acceptableAnswers: string[] = []
): boolean {
  const normalized = normalizeAnswer(typed);
  if (!normalized) return false;
  if (normalized === normalizeAnswer(correctAnswer)) return true;
  return acceptableAnswers.some((option) => normalizeAnswer(option) === normalized);
}
