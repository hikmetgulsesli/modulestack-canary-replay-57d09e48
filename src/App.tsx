import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
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
import { createSaveRecordAction } from './features/surf-record-editor/act_save_record';
import { createCancelEditAction } from './features/surf-record-editor/act_cancel_edit';
import {
  createCreateRecordAction,
  buildRecord,
} from './features/surf-record-operations/act_create_record';
import { createRetryLoadAction } from './features/surf-record-operations/act_retry_load';
import { createSelectRecordAction } from './features/surf-record-operations/act_select_record';
import {
  createSearchRecordsAction,
  loadSearchQuery,
} from './features/surf-record-operations/act_search_records';
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

export default function App() {
  const store = useMemo(bootstrapStore, []);
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);
  const dispatch = store.dispatch;

  const setScreen = (screen: ScreenId) => dispatch({ type: 'SET_ACTIVE_SCREEN', screen });
  const setPanel = (panel: AppState['activePanel']) => dispatch({ type: 'SET_ACTIVE_PANEL', panel });
  const setModule = (moduleName: string) => dispatch({ type: 'SET_PREFERENCES', preferences: { defaultModule: moduleName } });

  const [searchQuery, setSearchQuery] = useState(() => loadSearchQuery());
  const handleSearchQueryChange = useMemo(
    () => createSearchRecordsAction(setSearchQuery),
    [],
  );

  const createRecordAction = useMemo(() => createCreateRecordAction(store), [store]);
  const retryLoadAction = useMemo(() => createRetryLoadAction(store), [store]);
  const selectRecordAction = useMemo(() => createSelectRecordAction(store), [store]);
  const saveRecordAction = useMemo(() => createSaveRecordAction(store), [store]);
  const cancelEditAction = useMemo(() => createCancelEditAction(store), [store]);

  const selectedRecord = useMemo(
    () => state.records.find((r) => r.id === state.selectedRecordId) ?? null,
    [state.records, state.selectedRecordId],
  );

  const draftRecord = useMemo(
    () => selectedRecord ?? buildRecord(state),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.selectedRecordId, state.preferences.defaultModule],
  );

  const recordOperationsActions: Partial<
    Record<RecordOperationsModulestackCanaryReplayActionId, () => void>
  > = useMemo(
    () => ({
      'system-scan-1': () => setPanel('scan'),
      'create-replay-2': createRecordAction,
      'notifications-3': () => setPanel('notifications'),
      'help-outline-4': () => setPanel('help'),
      'account-circle-5': () => setPanel('account'),
      'retry-load-6': retryLoadAction,
      'create-replay-7': createRecordAction,
      'close-8': () => setScreen('record-operations'),
      'view-logs-9': () => setPanel('logs'),
      'retry-10': retryLoadAction,
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
    [createRecordAction, retryLoadAction],
  );

  const recordEditorActions: Partial<Record<RecordEditorModulestackCanaryReplayActionId, () => void>> = useMemo(
    () => ({
      'system-scan-1': () => setPanel('scan'),
      'notifications-2': () => setPanel('notifications'),
      'help-outline-3': () => setPanel('help'),
      'account-circle-4': () => setPanel('account'),
      'create-replay-5': createRecordAction,
      'add-6': () => {}, // Hook addition is not implemented in the store
      'delete-7': () => {}, // Hook deletion is not implemented in the store
      'delete-8': () => {}, // Hook deletion is not implemented in the store
      'cancel-9': cancelEditAction,
      'save-record-10': () => {}, // Save is handled via onSaveRecord prop to pass form values
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
    [cancelEditAction, createRecordAction],
  );

  const insightsActions: Partial<Record<InsightsModulestackCanaryReplayActionId, () => void>> = useMemo(
    () => ({
      'notifications-1': () => setPanel('notifications'),
      'help-outline-2': () => setPanel('help'),
      'account-circle-3': () => setPanel('account'),
      'create-replay-4': createRecordAction,
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
    [createRecordAction],
  );

  const emptyActions: Partial<Record<EmptyAndErrorRecoveryModulestackCanaryReplayActionId, () => void>> = useMemo(
    () => ({
      'create-replay-1': createRecordAction,
      'notifications-2': () => setPanel('notifications'),
      'help-outline-3': () => setPanel('help'),
      'account-circle-4': () => setPanel('account'),
      'system-scan-5': () => setPanel('scan'),
      'retry-connection-6': retryLoadAction,
      'create-manual-record-7': createRecordAction,
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
    [createRecordAction, retryLoadAction],
  );

  useEffect(() => {
    let active = true;
    let handle = 0;
    const step = () => {
      dispatch({ type: 'TICK', now: Date.now() });
      if (active) {
        handle = requestAnimationFrame(step);
      }
    };
    handle = requestAnimationFrame(step);
    return () => {
      active = false;
      cancelAnimationFrame(handle);
    };
  }, [dispatch]);

  const activeScreen = state.activeScreen;

  return (
    <div data-setfarm-root data-testid="setfarm-app-root" className="relative flex min-h-screen w-full overflow-hidden">
      {activeScreen === 'record-operations' && (
        <RecordOperationsModulestackCanaryReplay
          actions={recordOperationsActions}
          records={state.records}
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
          onSelectRecord={selectRecordAction}
        />
      )}
      {activeScreen === 'record-editor' && (
        <RecordEditorModulestackCanaryReplay
          actions={recordEditorActions}
          record={draftRecord}
          onSaveRecord={saveRecordAction}
        />
      )}
      {activeScreen === 'insights' && <InsightsModulestackCanaryReplay actions={insightsActions} />}
      {activeScreen === 'empty-error' && <EmptyAndErrorRecoveryModulestackCanaryReplay actions={emptyActions} />}
    </div>
  );
}
