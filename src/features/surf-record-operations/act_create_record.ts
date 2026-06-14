import type { RecordItem, Store } from '../modulestack-canary-replay/modulestack-canary-replay.store';

export function buildRecord(state: ReturnType<Store['getState']>, title = 'New replay'): RecordItem {
  return {
    id: `rec-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    module: state.preferences.defaultModule,
    status: 'draft',
    createdAt: Date.now(),
  };
}

export function createCreateRecordAction(store: Store): () => void {
  return () => {
    const record = buildRecord(store.getState());
    store.dispatch({ type: 'CREATE_RECORD', record });
    store.dispatch({ type: 'SELECT_RECORD', id: record.id });
    store.dispatch({ type: 'SET_ACTIVE_SCREEN', screen: 'record-editor' });
  };
}
