import type { Store } from '../modulestack-canary-replay/modulestack-canary-replay.store';

export function createCancelEditAction(store: Store): () => void {
  return () => {
    store.dispatch({ type: 'SET_ACTIVE_SCREEN', screen: 'record-operations' });
  };
}
