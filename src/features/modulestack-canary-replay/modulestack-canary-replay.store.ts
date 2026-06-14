import * as repo from './modulestack-canary-replay.repo';

export type ScreenId = 'record-operations' | 'record-editor' | 'insights' | 'empty-error';
export type StorageStatus = 'idle' | 'loading' | 'ready' | 'error';
export type ActivePanel = 'none' | 'scan' | 'notifications' | 'export' | 'filter' | 'logs' | 'help' | 'account';

export interface RecordItem {
  id: string;
  title: string;
  module: string;
  status: 'active' | 'draft';
  createdAt: number;
}

export interface ActivityEvent {
  id: string;
  message: string;
  timestamp: number;
}

export interface Preferences {
  theme: 'light' | 'dark';
  defaultModule: string;
}

export interface AppState {
  activeScreen: ScreenId;
  selectedRecordId: string | null;
  records: RecordItem[];
  activityEvents: ActivityEvent[];
  preferences: Preferences;
  storageStatus: StorageStatus;
  lastError: string | null;
  activePanel: ActivePanel;
  filterQuery: string;
}

export type Action =
  | { type: 'APP_STATE_BOOTSTRAP' }
  | { type: 'SET_ACTIVE_SCREEN'; screen: ScreenId }
  | { type: 'SELECT_RECORD'; id: string | null }
  | { type: 'CREATE_RECORD'; record: RecordItem }
  | { type: 'SAVE_RECORD'; record: RecordItem }
  | { type: 'DELETE_RECORD'; id: string }
  | { type: 'ADD_ACTIVITY_EVENT'; event: ActivityEvent }
  | { type: 'RESET_FILTERS' }
  | { type: 'RETRY_LOAD' }
  | { type: 'SET_LAST_ERROR'; error: string | null }
  | { type: 'SET_ACTIVE_PANEL'; panel: ActivePanel }
  | { type: 'SET_PREFERENCES'; preferences: Partial<Preferences> }
  | { type: 'SET_STORAGE_STATUS'; status: StorageStatus }
  | { type: 'LOAD_STATE'; state: Partial<AppState> };

export const initialAppState: AppState = {
  activeScreen: 'record-operations',
  selectedRecordId: null,
  records: [],
  activityEvents: [],
  preferences: { theme: 'dark', defaultModule: 'web' },
  storageStatus: 'idle',
  lastError: null,
  activePanel: 'none',
  filterQuery: '',
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'APP_STATE_BOOTSTRAP':
      return { ...state, storageStatus: 'ready' };

    case 'SET_ACTIVE_SCREEN':
      return { ...state, activeScreen: action.screen, activePanel: 'none' };

    case 'SELECT_RECORD':
      return { ...state, selectedRecordId: action.id };

    case 'CREATE_RECORD': {
      const next = { ...state, records: [action.record, ...state.records] };
      return addEvent(next, `Created record ${action.record.title}`);
    }

    case 'SAVE_RECORD': {
      const existing = state.records.find((r) => r.id === action.record.id);
      const nextRecords = existing
        ? state.records.map((r) => (r.id === action.record.id ? action.record : r))
        : [action.record, ...state.records];
      const next = {
        ...state,
        records: nextRecords,
        selectedRecordId: action.record.id,
      };
      return addEvent(next, `Saved record ${action.record.title}`);
    }

    case 'DELETE_RECORD': {
      const record = state.records.find((r) => r.id === action.id);
      const next = {
        ...state,
        records: state.records.filter((r) => r.id !== action.id),
        selectedRecordId: state.selectedRecordId === action.id ? null : state.selectedRecordId,
      };
      return record ? addEvent(next, `Deleted record ${record.title}`) : next;
    }

    case 'ADD_ACTIVITY_EVENT':
      return addEvent(state, action.event.message, action.event.timestamp);

    case 'RESET_FILTERS':
      return { ...state, filterQuery: '', activePanel: 'none', lastError: null };

    case 'RETRY_LOAD':
      return { ...state, lastError: null, storageStatus: 'ready', activePanel: 'none' };

    case 'SET_LAST_ERROR':
      return { ...state, lastError: action.error, storageStatus: action.error ? 'error' : state.storageStatus };

    case 'SET_ACTIVE_PANEL':
      return { ...state, activePanel: action.panel };

    case 'SET_PREFERENCES':
      return { ...state, preferences: { ...state.preferences, ...action.preferences } };

    case 'SET_STORAGE_STATUS':
      return { ...state, storageStatus: action.status };

    case 'LOAD_STATE':
      return { ...state, ...action.state };

    default:
      return state;
  }
}

function addEvent(state: AppState, message: string, timestamp = Date.now()): AppState {
  const event: ActivityEvent = {
    id: `evt-${timestamp}-${Math.random().toString(36).slice(2, 7)}`,
    message,
    timestamp,
  };
  return { ...state, activityEvents: [event, ...state.activityEvents].slice(0, 100) };
}

export interface Store {
  getState: () => AppState;
  subscribe: (listener: () => void) => () => void;
  dispatch: (action: Action) => void;
}

export function createStore(seed: Partial<AppState> = {}): Store {
  let state: AppState = { ...initialAppState, ...seed };
  const listeners = new Set<() => void>();

  const emit = () => listeners.forEach((listener) => listener());

  const persist = (next: AppState) => {
    if (next.storageStatus === 'ready' && !next.lastError) {
      repo.save({
        records: next.records,
        activityEvents: next.activityEvents,
        preferences: next.preferences,
      });
    }
  };

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    dispatch: (action) => {
      state = reducer(state, action);
      emit();
      persist(state);
    },
  };
}
