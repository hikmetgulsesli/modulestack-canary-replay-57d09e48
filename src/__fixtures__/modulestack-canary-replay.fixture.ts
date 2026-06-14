import type { ActivityEvent, Preferences, RecordItem } from '../features/modulestack-canary-replay/modulestack-canary-replay.store';

export const sampleRecords: RecordItem[] = [
  {
    id: 'rec-001',
    title: 'Web login canary',
    module: 'web',
    status: 'active',
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
  },
  {
    id: 'rec-002',
    title: 'Mobile checkout replay',
    module: 'mobile',
    status: 'draft',
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    id: 'rec-003',
    title: 'Backend pipeline probe',
    module: 'backend',
    status: 'active',
    createdAt: Date.now() - 1000 * 60 * 30,
  },
];

export const sampleActivityEvents: ActivityEvent[] = [
  {
    id: 'evt-001',
    message: 'Application state bootstrapped',
    timestamp: Date.now() - 1000 * 60 * 5,
  },
  {
    id: 'evt-002',
    message: 'Records loaded from persistence',
    timestamp: Date.now() - 1000 * 60 * 4,
  },
];

export const defaultPreferences: Preferences = {
  theme: 'dark',
  defaultModule: 'web',
};
