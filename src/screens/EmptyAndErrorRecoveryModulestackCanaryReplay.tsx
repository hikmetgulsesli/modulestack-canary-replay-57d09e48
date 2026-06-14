// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - ModuleStack Canary Replay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bell, CircleHelp, CircleUserRound, FileText, Gamepad2, GitBranch, Headphones, HeartPulse, Languages, PlusSquare, RefreshCw, Server, Smartphone, TriangleAlert } from "lucide-react";


export type EmptyAndErrorRecoveryModulestackCanaryReplayActionId = "create-replay-1" | "notifications-2" | "help-outline-3" | "account-circle-4" | "system-scan-5" | "retry-connection-6" | "create-manual-record-7" | "clear-filters-and-reset-view-8" | "dashboard-1" | "history-2" | "alerts-3" | "settings-4" | "web-5" | "game-6" | "mobile-7" | "backend-8" | "data-pipelines-9" | "docs-10" | "support-11";

export interface EmptyAndErrorRecoveryModulestackCanaryReplayProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryModulestackCanaryReplayActionId, () => void>>;

}

export function EmptyAndErrorRecoveryModulestackCanaryReplay({ actions }: EmptyAndErrorRecoveryModulestackCanaryReplayProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface w-full h-16 border-b border-outline-variant dark:border-outline-variant flex justify-between items-center px-lg sticky top-0 z-50">
      <div className="flex items-center gap-lg">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">
                      ModuleStack Canary Replay
                  </div>
      <div className="hidden md:flex gap-md ml-xl">
      {/* Assuming 'Dashboard' is the closest semantic match even for an error state within it, but since it's an error state, maybe none are truly 'active'. We'll highlight Dashboard as the anchor point */}
      <a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 font-body-md text-body-md" href="#" data-action-id="dashboard-1" onClick={(event) => { event.preventDefault(); actions?.["dashboard-1"]?.(); }}>
                          Dashboard
                      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 font-body-md text-body-md py-1 border-b-2 border-transparent" href="#" data-action-id="history-2" onClick={(event) => { event.preventDefault(); actions?.["history-2"]?.(); }}>
                          History
                      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 font-body-md text-body-md py-1 border-b-2 border-transparent" href="#" data-action-id="alerts-3" onClick={(event) => { event.preventDefault(); actions?.["alerts-3"]?.(); }}>
                          Alerts
                      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 font-body-md text-body-md py-1 border-b-2 border-transparent" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
                          Settings
                      </a>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="hidden md:flex bg-primary-container text-on-primary-container font-label-caps text-label-caps px-md py-sm rounded hover:opacity-90 transition-opacity" type="button" data-action-id="create-replay-1" onClick={actions?.["create-replay-1"]}>
                      Create Replay
                  </button>
      <div className="flex gap-sm text-on-surface-variant">
      <button className="p-xs hover:text-primary transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs hover:text-primary transition-colors" type="button" aria-label="Help Outline" data-action-id="help-outline-3" onClick={actions?.["help-outline-3"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs hover:text-primary transition-colors" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full py-md bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant w-[240px] flex-shrink-0">
      <div className="px-md mb-lg">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
      <HeartPulse className="text-primary-container text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary text-[14px] leading-tight">Health Monitor</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-[11px]">Global Status: Error</div>
      </div>
      </div>
      </div>
      <nav className="flex-1 px-sm space-y-1">
      {/* Active logic: The error state likely happens within the primary operational context. We'll map 'Backend' as the likely source of a data sync failure. */}
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out font-label-caps text-label-caps rounded-sm" href="#" data-action-id="web-5" onClick={(event) => { event.preventDefault(); actions?.["web-5"]?.(); }}>
      <Languages className="text-[18px]" aria-hidden={true} focusable="false" />
                          Web
                      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out font-label-caps text-label-caps rounded-sm" href="#" data-action-id="game-6" onClick={(event) => { event.preventDefault(); actions?.["game-6"]?.(); }}>
      <Gamepad2 className="text-[18px]" aria-hidden={true} focusable="false" />
                          Game
                      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out font-label-caps text-label-caps rounded-sm" href="#" data-action-id="mobile-7" onClick={(event) => { event.preventDefault(); actions?.["mobile-7"]?.(); }}>
      <Smartphone className="text-[18px]" aria-hidden={true} focusable="false" />
                          Mobile
                      </a>
      <a className="flex items-center gap-sm px-sm py-sm bg-secondary-container dark:bg-secondary-container text-primary dark:text-primary-fixed border-l-4 border-primary dark:border-primary-fixed transition-colors duration-200 ease-in-out font-label-caps text-label-caps rounded-r-sm" href="#" data-action-id="backend-8" onClick={(event) => { event.preventDefault(); actions?.["backend-8"]?.(); }}>
      <Server className="text-[18px]" aria-hidden={true} focusable="false" />
                          Backend
                      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out font-label-caps text-label-caps rounded-sm" href="#" data-action-id="data-pipelines-9" onClick={(event) => { event.preventDefault(); actions?.["data-pipelines-9"]?.(); }}>
      <GitBranch className="text-[18px]" aria-hidden={true} focusable="false" />
                          Data Pipelines
                      </a>
      </nav>
      <div className="px-md mt-auto pt-lg border-t border-outline-variant">
      <button className="w-full mb-md bg-transparent border border-outline-variant text-primary font-label-caps text-label-caps py-sm px-md rounded hover:bg-surface-variant transition-colors" type="button" data-action-id="system-scan-5" onClick={actions?.["system-scan-5"]}>
                          System Scan
                      </button>
      <div className="space-y-1">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="#" data-action-id="docs-10" onClick={(event) => { event.preventDefault(); actions?.["docs-10"]?.(); }}>
      <FileText className="text-[16px]" aria-hidden={true} focusable="false" />
                              Docs
                          </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="#" data-action-id="support-11" onClick={(event) => { event.preventDefault(); actions?.["support-11"]?.(); }}>
      <Headphones className="text-[16px]" aria-hidden={true} focusable="false" />
                              Support
                          </a>
      </div>
      </div>
      </aside>
      {/* Main Content Area - Error Recovery Canvas */}
      <main className="flex-1 bg-background overflow-y-auto p-lg flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-[#0F172A] border-2 border-[#1E293B] pulse-warning rounded-lg p-xl relative overflow-hidden">
      {/* Decorative background elements to avoid a completely blank canvas feel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#1E293B] border border-primary-container flex items-center justify-center mb-md">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-[32px] text-primary-container" aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-display-lg text-display-lg text-primary mb-sm">Data Synchronisation Failed</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-lg">
                              The dashboard is unable to establish a secure link with the primary data stream. Local session state has been preserved. You can attempt to reconnect or proceed with offline actions.
                          </p>
      {/* Technical Error Snippet */}
      <div className="w-full bg-[#020617] border border-[#1E293B] rounded p-md text-left mb-xl">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">Diagnostic Log Snippet</span>
      <span className="font-data-mono text-[10px] text-error">CRITICAL_FAULT</span>
      </div>
      <div className="font-data-mono text-data-mono text-secondary">
      <div className="flex"><span className="w-20 text-outline">TIMESTAMP</span> <span>2023-10-27T14:32:01.045Z</span></div>
      <div className="flex"><span className="w-20 text-outline">MODULE</span> <span>sync_gateway_v2</span></div>
      <div className="flex mt-2 text-error"><span className="w-20 text-outline">TRACE</span> <span>lastError: ECONNREFUSED 10.42.0.15:5432</span></div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-md w-full justify-center">
      <button className="w-full sm:w-auto bg-primary-container text-[#0F172A] font-label-caps text-label-caps px-xl py-md rounded font-bold hover:brightness-110 transition-colors flex items-center justify-center gap-sm shadow-[0_0_15px_rgba(255,225,53,0.15)]" type="button" data-action-id="retry-connection-6" onClick={actions?.["retry-connection-6"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Retry Connection
                              </button>
      <button className="w-full sm:w-auto bg-transparent border border-[#1E293B] text-primary font-label-caps text-label-caps px-lg py-md rounded hover:bg-[#1E293B] transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="create-manual-record-7" onClick={actions?.["create-manual-record-7"]}>
      <PlusSquare className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Create Manual Record
                              </button>
      </div>
      <div className="mt-lg">
      <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4" type="button" data-action-id="clear-filters-and-reset-view-8" onClick={actions?.["clear-filters-and-reset-view-8"]}>
                                  Clear Filters &amp; Reset View
                              </button>
      </div>
      </div>
      </div>
      {/* Contextual KPI row indicating frozen state */}
      <div className="w-full max-w-3xl mt-lg grid grid-cols-3 gap-md opacity-50 grayscale pointer-events-none">
      <div className="bg-[#0F172A] border border-[#1E293B] p-md rounded flex flex-col justify-center items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Active Replays</span>
      <span className="font-data-mono text-[24px] text-primary">--</span>
      </div>
      <div className="bg-[#0F172A] border border-[#1E293B] p-md rounded flex flex-col justify-center items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Ingestion Rate</span>
      <span className="font-data-mono text-[24px] text-primary">0 b/s</span>
      </div>
      <div className="bg-[#0F172A] border border-[#1E293B] p-md rounded flex flex-col justify-center items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Queue Latency</span>
      <span className="font-data-mono text-[24px] text-primary">Stale</span>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
