const STORAGE_KEY = 'modulestack-canary-replay:search-query:v1';

export function loadSearchQuery(): string {
  if (typeof window === 'undefined' || !window.localStorage) {
    return '';
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ?? '';
  } catch {
    return '';
  }
}

export function saveSearchQuery(value: string): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore quota errors.
  }
}

export function createSearchRecordsAction(onChange: (value: string) => void): (value: string) => void {
  return (value) => {
    saveSearchQuery(value);
    onChange(value);
  };
}
