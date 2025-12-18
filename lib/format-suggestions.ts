export function parseSuggestionsToJSX(suggestionsText: string): (string | JSX.Element)[] {
  if (!suggestionsText) return [];

  const lines = suggestionsText.split('\n').filter((line) => line.trim());

  return lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      return trimmed.substring(2);
    }
    if (trimmed.startsWith('• ')) {
      return trimmed.substring(2);
    }
    return trimmed;
  });
}

export function getSuggestionPreview(suggestionsText: string, maxLength: number = 100): string {
  if (!suggestionsText) return '';

  const lines = suggestionsText.split('\n');
  const firstLine = lines[0]?.trim() || '';

  if (firstLine.length > maxLength) {
    return firstLine.substring(0, maxLength) + '...';
  }

  return firstLine;
}
