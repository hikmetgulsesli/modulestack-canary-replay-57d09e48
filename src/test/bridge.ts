import type {
  ActivePanel,
  Preferences,
  RecordItem,
  ScreenId,
  StorageStatus,
} from '../features/modulestack-canary-replay/modulestack-canary-replay.store';
import {
  createActivityEvent,
  type Store,
} from '../features/modulestack-canary-replay/modulestack-canary-replay.store';

declare global {
  interface Window {
    app?: {
      state: import('../features/modulestack-canary-replay/modulestack-canary-replay.store').AppState;
      activeScreen: string;
      selectedRecord: unknown;
      counts: { records: number; events: number };
      storageStatus: string;
      lastError: string | null;
      activePanel: string;
      actions: {
        tick: (now?: number) => void;
        setScreen: (screen: ScreenId) => void;
        setPanel: (panel: ActivePanel) => void;
        selectRecord: (id: string | null) => void;
        createRecord: (record: RecordItem) => void;
        saveRecord: (record: RecordItem) => void;
        deleteRecord: (id: string) => void;
        addActivityEvent: (message: string) => void;
        resetFilters: () => void;
        retryLoad: () => void;
        setLastError: (error: string | null) => void;
        setPreferences: (preferences: Partial<Preferences>) => void;
        setStorageStatus: (status: StorageStatus) => void;
        loadState: (
          state: Partial<import('../features/modulestack-canary-replay/modulestack-canary-replay.store').AppState>,
        ) => void;
      };
      dispatch: Store['dispatch'];
      subscribe: Store['subscribe'];
    };
  }
}

export function exposeApp(store: Store): void {
  if (typeof window === 'undefined') {
    return;
  }
  window.app = {
    get state() {
      return store.getState();
    },
    get activeScreen() {
      return store.getState().activeScreen;
    },
    get selectedRecord() {
      const state = store.getState();
      return state.records.find((record) => record.id === state.selectedRecordId) ?? null;
    },
    get counts() {
      const state = store.getState();
      return {
        records: state.records.length,
        events: state.activityEvents.length,
      };
    },
    get storageStatus() {
      return store.getState().storageStatus;
    },
    get lastError() {
      return store.getState().lastError;
    },
    get activePanel() {
      return store.getState().activePanel;
    },
    actions: {
      tick: (now = Date.now()) => store.dispatch({ type: 'TICK', now }),
      setScreen: (screen) => store.dispatch({ type: 'SET_ACTIVE_SCREEN', screen }),
      setPanel: (panel) => store.dispatch({ type: 'SET_ACTIVE_PANEL', panel }),
      selectRecord: (id) => store.dispatch({ type: 'SELECT_RECORD', id }),
      createRecord: (record) => store.dispatch({ type: 'CREATE_RECORD', record }),
      saveRecord: (record) => store.dispatch({ type: 'SAVE_RECORD', record }),
      deleteRecord: (id) => store.dispatch({ type: 'DELETE_RECORD', id }),
      addActivityEvent: (message) =>
        store.dispatch({ type: 'ADD_ACTIVITY_EVENT', event: createActivityEvent(message) }),
      resetFilters: () => store.dispatch({ type: 'RESET_FILTERS' }),
      retryLoad: () => store.dispatch({ type: 'RETRY_LOAD' }),
      setLastError: (error) => store.dispatch({ type: 'SET_LAST_ERROR', error }),
      setPreferences: (preferences) => store.dispatch({ type: 'SET_PREFERENCES', preferences }),
      setStorageStatus: (status) => store.dispatch({ type: 'SET_STORAGE_STATUS', status }),
      loadState: (state) => store.dispatch({ type: 'LOAD_STATE', state }),
    },
    dispatch: store.dispatch.bind(store),
    subscribe: store.subscribe.bind(store),
  };
}
