import type { ActivityEvent, Preferences, RecordItem } from './modulestack-canary-replay.store';

const STORAGE_KEY = 'modulestack-canary-replay:state:v1';

export interface PersistedSnapshot {
  records: RecordItem[];
  activityEvents: ActivityEvent[];
  preferences: Preferences;
}

export function load(): PersistedSnapshot | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }
  try {
    const parsed = JSON.parse(raw) as PersistedSnapshot;
    if (!Array.isArray(parsed.records) || !Array.isArray(parsed.activityEvents)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function save(snapshot: PersistedSnapshot): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore quota errors during persistence.
  }
}

export function clear(): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }
  window.localStorage.removeItem(STORAGE_KEY);
}
