import type { Store } from '../modulestack-canary-replay/modulestack-canary-replay.store';

export function createSelectRecordAction(store: Store): (id: string) => void {
  return (id) => {
    store.dispatch({ type: 'SELECT_RECORD', id });
    store.dispatch({ type: 'SET_ACTIVE_SCREEN', screen: 'record-editor' });
  };
}
