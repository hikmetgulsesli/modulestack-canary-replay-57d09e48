import type { RecordItem, Store } from '../modulestack-canary-replay/modulestack-canary-replay.store';

export function createSaveRecordAction(store: Store): (record: RecordItem) => void {
  return (record) => {
    store.dispatch({ type: 'SAVE_RECORD', record });
    store.dispatch({ type: 'SET_ACTIVE_SCREEN', screen: 'record-operations' });
  };
}
