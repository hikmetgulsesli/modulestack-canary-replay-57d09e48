import type { Store } from '../modulestack-canary-replay/modulestack-canary-replay.store';

export function createRetryLoadAction(store: Store): () => void {
  return () => {
    store.dispatch({ type: 'RETRY_LOAD' });
  };
}
