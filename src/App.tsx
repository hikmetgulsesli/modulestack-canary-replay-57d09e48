import { useMemo, useSyncExternalStore } from 'react';
import {
  EmptyAndErrorRecoveryModulestackCanaryReplay,
  type EmptyAndErrorRecoveryModulestackCanaryReplayActionId,
  InsightsModulestackCanaryReplay,
  type InsightsModulestackCanaryReplayActionId,
  RecordEditorModulestackCanaryReplay,
  type RecordEditorModulestackCanaryReplayActionId,
  RecordOperationsModulestackCanaryReplay,
  type RecordOperationsModulestackCanaryReplayActionId,
} from './screens';
import {
  sampleActivityEvents,
  defaultPreferences,
  sampleRecords,
} from './__fixtures__/modulestack-canary-replay.fixture';
import { exposeApp } from './test/bridge';
import * as repo from './features/modulestack-canary-replay/modulestack-canary-replay.repo';
import {
  createStore,
  type Action,
  type AppState,
  type ScreenId,
  type Store,
} from './features/modulestack-canary-replay/modulestack-canary-replay.store';

function bootstrapStore(): Store {
  const persisted = repo.load();
  const hasCorruption = persisted === null && typeof window !== 'undefined' && window.localStorage.getItem('modulestack-canary-replay:state:v1');

  const store = createStore({
    ...(persisted ?? {
      records: sampleRecords,
      activityEvents: sampleActivityEvents,
      preferences: defaultPreferences,
    }),
    activeScreen: 'record-operations',
    selectedRecordId: null,
    activePanel: 'none',
    filterQuery: '',
    storageStatus: 'ready',
    lastError: hasCorruption ? 'Stored preferences were corrupted and have been reset.' : null,
  });

  store.dispatch({ type: 'ADD_ACTIVITY_EVENT', event: { id: 'evt-boot', message: 'Application state bootstrapped', timestamp: Date.now() } });
  exposeApp(store);
  return store;
}

function buildRecord(state: AppState, title = 'New replay'): AppState['records'][number] {
  return {
    id: `rec-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    module: state.preferences.defaultModule,
    status: 'draft',
    createdAt: Date.now(),
  };
}

export default function App() {
  const store = useMemo(bootstrapStore, []);
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);
  const dispatch = store.dispatch;

  const setScreen = (screen: ScreenId) => dispatch({ type: 'SET_ACTIVE_SCREEN', screen });
  const setPanel = (panel: AppState['activePanel']) => dispatch({ type: 'SET_ACTIVE_PANEL', panel });
  const setModule = (moduleName: string) => dispatch({ type: 'SET_PREFERENCES', preferences: { defaultModule: moduleName } });

  const recordOperationsActions: Partial<
    Record<RecordOperationsModulestackCanaryReplayActionId, () => void>
  > = useMemo(
    () => ({
      'system-scan-1': () => setPanel('scan'),
      'create-replay-2': () => setScreen('record-editor'),
      'notifications-3': () => setPanel('notifications'),
      'help-outline-4': () => setPanel('help'),
      'account-circle-5': () => setPanel('account'),
      'retry-load-6': () => dispatch({ type: 'RETRY_LOAD' }),
      'create-replay-7': () => setScreen('record-editor'),
      'close-8': () => setScreen('record-operations'),
      'view-logs-9': () => setPanel('logs'),
      'retry-10': () => dispatch({ type: 'RETRY_LOAD' }),
      'web-1': () => setModule('web'),
      'game-2': () => setModule('game'),
      'mobile-3': () => setModule('mobile'),
      'backend-4': () => setModule('backend'),
      'data-pipelines-5': () => setModule('data-pipelines'),
      'docs-6': () => setPanel('none'),
      'support-7': () => setPanel('none'),
      'dashboard-8': () => setScreen('record-operations'),
      'history-9': () => setScreen('record-operations'),
      'alerts-10': () => setScreen('empty-error'),
      'settings-11': () => setScreen('insights'),
    }),
    [dispatch],
  );

  const recordEditorActions: Partial<Record<RecordEditorModulestackCanaryReplayActionId, () => void>> = useMemo(
    () => ({
      'system-scan-1': () => setPanel('scan'),
      'notifications-2': () => setPanel('notifications'),
      'help-outline-3': () => setPanel('help'),
      'account-circle-4': () => setPanel('account'),
      'create-replay-5': () => setScreen('record-editor'),
      'add-6': () => dispatch({ type: 'CREATE_RECORD', record: buildRecord(state) }),
      'delete-7': () => state.selectedRecordId && dispatch({ type: 'DELETE_RECORD', id: state.selectedRecordId }),
      'delete-8': () => state.selectedRecordId && dispatch({ type: 'DELETE_RECORD', id: state.selectedRecordId }),
      'cancel-9': () => setScreen('record-operations'),
      'save-record-10': () => {
        const record = state.selectedRecordId
          ? { ...buildRecord(state), id: state.selectedRecordId }
          : buildRecord(state);
        dispatch({ type: 'SAVE_RECORD', record });
        setScreen('record-operations');
      },
      'web-1': () => setModule('web'),
      'game-2': () => setModule('game'),
      'mobile-3': () => setModule('mobile'),
      'backend-4': () => setModule('backend'),
      'data-pipelines-5': () => setModule('data-pipelines'),
      'description-6': () => setPanel('none'),
      'support-agent-7': () => setPanel('none'),
      'dashboard-8': () => setScreen('record-operations'),
      'history-9': () => setScreen('record-operations'),
      'alerts-10': () => setScreen('empty-error'),
      'settings-11': () => setScreen('insights'),
    }),
    [dispatch, state],
  );

  const insightsActions: Partial<Record<InsightsModulestackCanaryReplayActionId, () => void>> = useMemo(
    () => ({
      'notifications-1': () => setPanel('notifications'),
      'help-outline-2': () => setPanel('help'),
      'account-circle-3': () => setPanel('account'),
      'create-replay-4': () => setScreen('record-editor'),
      'system-scan-5': () => setPanel('scan'),
      'filter-6': () => setPanel('filter'),
      'export-summary-7': () => setPanel('export'),
      'dashboard-1': () => setScreen('record-operations'),
      'history-2': () => setScreen('record-operations'),
      'insights-3': () => setScreen('insights'),
      'alerts-4': () => setScreen('empty-error'),
      'settings-5': () => setScreen('insights'),
      'web-6': () => setModule('web'),
      'game-7': () => setModule('game'),
      'mobile-8': () => setModule('mobile'),
      'backend-9': () => setModule('backend'),
      'data-pipelines-10': () => setModule('data-pipelines'),
      'docs-11': () => setPanel('none'),
      'support-12': () => setPanel('none'),
    }),
    [dispatch],
  );

  const emptyActions: Partial<Record<EmptyAndErrorRecoveryModulestackCanaryReplayActionId, () => void>> = useMemo(
    () => ({
      'create-replay-1': () => setScreen('record-editor'),
      'notifications-2': () => setPanel('notifications'),
      'help-outline-3': () => setPanel('help'),
      'account-circle-4': () => setPanel('account'),
      'system-scan-5': () => setPanel('scan'),
      'retry-connection-6': () => dispatch({ type: 'RETRY_LOAD' }),
      'create-manual-record-7': () => setScreen('record-editor'),
      'clear-filters-and-reset-view-8': () => dispatch({ type: 'RESET_FILTERS' }),
      'dashboard-1': () => setScreen('record-operations'),
      'history-2': () => setScreen('record-operations'),
      'alerts-3': () => setScreen('empty-error'),
      'settings-4': () => setScreen('insights'),
      'web-5': () => setModule('web'),
      'game-6': () => setModule('game'),
      'mobile-7': () => setModule('mobile'),
      'backend-8': () => setModule('backend'),
      'data-pipelines-9': () => setModule('data-pipelines'),
      'docs-10': () => setPanel('none'),
      'support-11': () => setPanel('none'),
    }),
    [dispatch],
  );

  const activeScreen = state.activeScreen;

  return (
    <div data-setfarm-root data-testid="setfarm-app-root" className="relative flex min-h-screen w-full overflow-hidden">
      {activeScreen === 'record-operations' && <RecordOperationsModulestackCanaryReplay actions={recordOperationsActions} />}
      {activeScreen === 'record-editor' && <RecordEditorModulestackCanaryReplay actions={recordEditorActions} />}
      {activeScreen === 'insights' && <InsightsModulestackCanaryReplay actions={insightsActions} />}
      {activeScreen === 'empty-error' && <EmptyAndErrorRecoveryModulestackCanaryReplay actions={emptyActions} />}
    </div>
  );
}
