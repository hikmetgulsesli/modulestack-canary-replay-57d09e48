import type { Store } from '../features/modulestack-canary-replay/modulestack-canary-replay.store';

declare global {
  interface Window {
    app?: {
      activeScreen: string;
      selectedRecord: unknown;
      counts: { records: number; events: number };
      storageStatus: string;
      lastError: string | null;
      activePanel: string;
      dispatch: Store['dispatch'];
    };
  }
}

export function exposeApp(store: Store): void {
  if (typeof window === 'undefined') {
    return;
  }
  window.app = {
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
    dispatch: store.dispatch.bind(store),
  };
}
