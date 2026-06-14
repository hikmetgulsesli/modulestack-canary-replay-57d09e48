// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - ModuleStack Canary Replay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Bell, CircleHelp, CircleUserRound, Clock, Download, FileText, Gamepad2, GitBranch, Headphones, HeartPulse, Languages, Lightbulb, PieChart, Route, Server, SlidersHorizontal, Smartphone, TrendingUp, TriangleAlert } from "lucide-react";


export type InsightsModulestackCanaryReplayActionId = "notifications-1" | "help-outline-2" | "account-circle-3" | "create-replay-4" | "system-scan-5" | "filter-6" | "export-summary-7" | "dashboard-1" | "history-2" | "insights-3" | "alerts-4" | "settings-5" | "web-6" | "game-7" | "mobile-8" | "backend-9" | "data-pipelines-10" | "docs-11" | "support-12";

export interface InsightsModulestackCanaryReplayProps {
  actions?: Partial<Record<InsightsModulestackCanaryReplayActionId, () => void>>;

}

export function InsightsModulestackCanaryReplay({ actions }: InsightsModulestackCanaryReplayProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface w-full h-16 border-b border-outline-variant dark:border-outline-variant flex justify-between items-center px-lg sticky top-0 z-50">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">ModuleStack Canary Replay</span>
      <nav className="hidden md:flex gap-lg ml-xl">
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-4 border-b-2 border-transparent" href="#" data-action-id="dashboard-1" onClick={(event) => { event.preventDefault(); actions?.["dashboard-1"]?.(); }}>Dashboard</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-4 border-b-2 border-transparent" href="#" data-action-id="history-2" onClick={(event) => { event.preventDefault(); actions?.["history-2"]?.(); }}>History</a>
      <a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>Insights</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-4 border-b-2 border-transparent" href="#" data-action-id="alerts-4" onClick={(event) => { event.preventDefault(); actions?.["alerts-4"]?.(); }}>Alerts</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-4 border-b-2 border-transparent" href="#" data-action-id="settings-5" onClick={(event) => { event.preventDefault(); actions?.["settings-5"]?.(); }}>Settings</a>
      </nav>
      </div>
      <div className="flex items-center gap-sm">
      <button className="flex items-center justify-center w-8 h-8 rounded text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="flex items-center justify-center w-8 h-8 rounded text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="Help Outline" data-action-id="help-outline-2" onClick={actions?.["help-outline-2"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="flex items-center justify-center w-8 h-8 rounded text-on-surface-variant hover:text-primary transition-colors mr-sm" type="button" aria-label="Account Circle" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary-container text-[#020617] font-data-mono text-data-mono px-md py-sm rounded hover:bg-primary-fixed transition-colors flex items-center gap-xs" type="button" data-action-id="create-replay-4" onClick={actions?.["create-replay-4"]}>
      <span>Create Replay</span>
      </button>
      </div>
      </header>
      <div className="flex h-[calc(100vh-64px)] w-full">
      {/* SideNavBar */}
      <aside className="bg-[#0F172A] border-r border-[#1E293B] fixed left-0 top-16 h-full w-[240px] flex flex-col py-md z-40 hidden md:flex">
      <div className="px-md mb-lg">
      <div className="flex items-center gap-sm mb-xs">
      <HeartPulse className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-md text-headline-md text-primary truncate">Health Monitor</h2>
      </div>
      <p className="font-data-mono text-data-mono text-on-surface-variant text-[11px] uppercase tracking-wider">Global Status: Nominal</p>
      <div className="mt-md h-[2px] w-full bg-[#1E293B] overflow-hidden">
      <div className="h-full bg-primary-fixed-dim w-[85%] relative">
      <div className="absolute top-0 right-0 bottom-0 w-[20px] bg-white opacity-50 blur-[4px] animate-pulse"></div>
      </div>
      </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-sm flex flex-col gap-[2px]">
      <a className="flex items-center gap-sm px-sm py-xs rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps" href="#" data-action-id="web-6" onClick={(event) => { event.preventDefault(); actions?.["web-6"]?.(); }}>
      <Languages className="text-[18px]" aria-hidden={true} focusable="false" />
                          Web
                      </a>
      <a className="flex items-center gap-sm px-sm py-xs rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps" href="#" data-action-id="game-7" onClick={(event) => { event.preventDefault(); actions?.["game-7"]?.(); }}>
      <Gamepad2 className="text-[18px]" aria-hidden={true} focusable="false" />
                          Game
                      </a>
      <a className="flex items-center gap-sm px-sm py-xs rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps" href="#" data-action-id="mobile-8" onClick={(event) => { event.preventDefault(); actions?.["mobile-8"]?.(); }}>
      <Smartphone className="text-[18px]" aria-hidden={true} focusable="false" />
                          Mobile
                      </a>
      <a className="flex items-center gap-sm px-sm py-xs bg-[#1E293B] text-primary dark:text-primary-fixed border-l-[2px] border-primary-fixed-dim rounded-r hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#" data-action-id="backend-9" onClick={(event) => { event.preventDefault(); actions?.["backend-9"]?.(); }}>
      <Server className="text-[18px] filled text-primary-fixed-dim" aria-hidden={true} focusable="false" />
                          Backend
                      </a>
      <a className="flex items-center gap-sm px-sm py-xs rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps" href="#" data-action-id="data-pipelines-10" onClick={(event) => { event.preventDefault(); actions?.["data-pipelines-10"]?.(); }}>
      <GitBranch className="text-[18px]" aria-hidden={true} focusable="false" />
                          Data Pipelines
                      </a>
      </nav>
      <div className="mt-auto px-md pb-xl pt-md border-t border-[#1E293B] flex flex-col gap-sm">
      <button className="w-full border border-[#1E293B] text-primary font-data-mono text-data-mono py-xs rounded hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim transition-colors flex justify-center items-center gap-xs" type="button" data-action-id="system-scan-5" onClick={actions?.["system-scan-5"]}>
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                          System Scan
                      </button>
      <div className="flex justify-between mt-sm">
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary flex items-center gap-xs" href="#" data-action-id="docs-11" onClick={(event) => { event.preventDefault(); actions?.["docs-11"]?.(); }}>
      <FileText className="text-[14px]" aria-hidden={true} focusable="false" /> Docs
                          </a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary flex items-center gap-xs" href="#" data-action-id="support-12" onClick={(event) => { event.preventDefault(); actions?.["support-12"]?.(); }}>
      <Headphones className="text-[14px]" aria-hidden={true} focusable="false" /> Support
                          </a>
      </div>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-[240px] bg-[#020617] overflow-y-auto p-lg relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 bg-primary-fixed-dim opacity-[0.02] blur-[100px] rounded-full pointer-events-none w-[calc(100vw-48px)] max-w-[360px] aspect-square md:w-[500px] md:h-[500px] md:max-w-none"></div>
      {/* Toolbar */}
      <div className="flex justify-between items-end mb-lg border-b border-[#1E293B] pb-md">
      <div>
      <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Insights: Backend</h1>
      <p className="font-data-mono text-data-mono text-on-surface-variant mt-xs">Analysis window: Last 72 hours • Aggregated across 14 clusters</p>
      </div>
      <div className="flex gap-sm">
      <button className="border border-[#1E293B] bg-[#0F172A] text-on-surface-variant font-data-mono text-data-mono px-md py-sm rounded hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-colors flex items-center gap-xs" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <SlidersHorizontal className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                          </button>
      <button className="border border-[#1E293B] bg-[#0F172A] text-primary font-data-mono text-data-mono px-md py-sm rounded hover:bg-[#1E293B] transition-colors flex items-center gap-xs" type="button" data-action-id="export-summary-7" onClick={actions?.["export-summary-7"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" /> Export Summary
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
      {/* KPI: Stack Health Trend (col-span-4) */}
      <div className="col-span-12 lg:col-span-4 bg-[#0F172A] border border-[#1E293B] rounded p-md flex flex-col justify-between group hover:border-primary-fixed-dim transition-colors">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Stack Health Trend</span>
      <div className="flex items-center gap-xs px-xs py-[2px] bg-surface-container border-l-2 border-primary-fixed-dim text-primary-fixed-dim font-data-mono text-[10px]">
      <TrendingUp className="text-[12px]" aria-hidden={true} focusable="false" /> +2.4%
                              </div>
      </div>
      <div>
      <div className="font-display-lg text-display-lg text-primary mb-xs">98.4<span className="text-headline-md text-on-surface-variant">%</span></div>
      <div className="h-[40px] w-full flex items-end gap-[2px] opacity-80 group-hover:opacity-100 transition-opacity">
      {/* Simulated Sparkline Bars */}
      <div className="w-full bg-[#1E293B] h-[40%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[55%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[45%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[70%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[60%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[85%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[80%] rounded-t-sm"></div>
      <div className="w-full bg-[#1E293B] h-[95%] rounded-t-sm"></div>
      <div className="w-full bg-primary-fixed-dim h-[100%] rounded-t-sm relative shadow-[0_0_10px_rgba(226,198,15,0.3)]"></div>
      </div>
      </div>
      </div>
      {/* KPI: Failure Distribution (col-span-4) */}
      <div className="col-span-12 lg:col-span-4 bg-[#0F172A] border border-[#1E293B] rounded p-md flex flex-col justify-between group hover:border-tertiary-fixed-dim transition-colors">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Failure Dist.</span>
      <PieChart className="text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center gap-md">
      {/* Simulated Ring Chart */}
      <div className="relative w-[60px] h-[60px] rounded-full border-4 border-[#1E293B] flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-4 border-error opacity-80" style={{clipPath: "polygon(50% 50%, 100% 0, 100% 30%, 50% 50%)", transform: "rotate(45deg)"}}></div>
      <div className="absolute inset-0 rounded-full border-4 border-tertiary-fixed-dim opacity-80" style={{clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%)", transform: "rotate(135deg)"}}></div>
      <span className="font-data-mono text-[14px] text-primary">12</span>
      </div>
      <div className="flex-1 flex flex-col gap-xs font-data-mono text-[11px]">
      <div className="flex justify-between items-center"><div className="flex items-center gap-xs"><div className="w-2 h-2 bg-error rounded-full"></div><span>Timeout</span></div><span className="text-on-surface-variant">4</span></div>
      <div className="flex justify-between items-center"><div className="flex items-center gap-xs"><div className="w-2 h-2 bg-tertiary-fixed-dim rounded-full"></div><span>State Mismatch</span></div><span className="text-on-surface-variant">8</span></div>
      </div>
      </div>
      </div>
      {/* KPI: Recovery Efficiency (col-span-4) */}
      <div className="col-span-12 lg:col-span-4 bg-[#0F172A] border border-[#1E293B] rounded p-md flex flex-col justify-between group hover:border-primary-fixed-dim transition-colors">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Recovery Effic.</span>
      <div className="flex items-center gap-xs px-xs py-[2px] bg-surface-container border-l-2 border-outline text-on-surface-variant font-data-mono text-[10px]">
      <BadgeHelp className="text-[12px]" aria-hidden={true} focusable="false" /> 0.0%
                              </div>
      </div>
      <div className="flex items-end justify-between">
      <div>
      <div className="font-display-lg text-display-lg text-primary mb-xs">4.2<span className="text-headline-md text-on-surface-variant">s</span></div>
      <span className="font-data-mono text-[11px] text-on-surface-variant">Avg. TTMR</span>
      </div>
      <div className="w-[80px] h-[40px] relative overflow-hidden">
      {/* Abstract wave/line graphic */}
      <svg className="w-full h-full stroke-primary-fixed-dim fill-none stroke-[2] opacity-70" viewBox="0 0 100 40">
      <path d="M0 20 Q 25 5, 50 20 T 100 20"></path>
      </svg>
      </div>
      </div>
      </div>
      {/* Recent Activity Timeline (col-span-8) */}
      <div className="col-span-12 lg:col-span-8 bg-[#0F172A] border border-[#1E293B] rounded p-0 overflow-hidden flex flex-col h-[400px]">
      <div className="p-md border-b border-[#1E293B] bg-[#0A101D] flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Recent Activity Events</span>
      <span className="font-data-mono text-[11px] text-tertiary-fixed-dim cursor-pointer hover:underline">View Full Log →</span>
      </div>
      <div className="flex-1 overflow-y-auto p-md pl-xl relative">
      {/* Vertical Line */}
      <div className="absolute left-[39px] top-md bottom-md w-[1px] bg-[#1E293B]"></div>
      <div className="flex flex-col gap-lg">
      {/* Event Item */}
      <div className="relative flex gap-md">
      <div className="absolute left-[-29px] top-[2px] w-4 h-4 rounded-full bg-[#0F172A] border-[2px] border-error flex items-center justify-center z-10 shadow-[0_0_8px_rgba(255,180,171,0.2)]"></div>
      <div className="flex-1 pb-md border-b border-[#1E293B] border-dashed last:border-0 last:pb-0">
      <div className="flex justify-between items-baseline mb-xs">
      <h4 className="font-data-mono text-[13px] text-error font-medium">Stack Replay-42 Failed</h4>
      <span className="font-data-mono text-[11px] text-on-surface-variant">10:42:05 UTC</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-[13px] line-clamp-2">State divergence detected in module 'AuthSvc' during phase 2 validation. Rollback initiated autonomously.</p>
      </div>
      </div>
      {/* Event Item */}
      <div className="relative flex gap-md">
      <div className="absolute left-[-29px] top-[2px] w-4 h-4 rounded-full bg-[#0F172A] border-[2px] border-tertiary-fixed-dim flex items-center justify-center z-10"></div>
      <div className="flex-1 pb-md border-b border-[#1E293B] border-dashed last:border-0 last:pb-0">
      <div className="flex justify-between items-baseline mb-xs">
      <h4 className="font-data-mono text-[13px] text-primary font-medium">Ownership Boundary Updated</h4>
      <span className="font-data-mono text-[11px] text-on-surface-variant">09:15:22 UTC</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-[13px] line-clamp-2">User 'sysadmin' modified routing constraints for data-pipeline-alpha.</p>
      </div>
      </div>
      {/* Event Item */}
      <div className="relative flex gap-md">
      <div className="absolute left-[-29px] top-[2px] w-4 h-4 rounded-full bg-[#0F172A] border-[2px] border-outline flex items-center justify-center z-10"></div>
      <div className="flex-1 pb-md border-b border-[#1E293B] border-dashed last:border-0 last:pb-0">
      <div className="flex justify-between items-baseline mb-xs">
      <h4 className="font-data-mono text-[13px] text-on-secondary-container font-medium">Replay-41 Succeeded</h4>
      <span className="font-data-mono text-[11px] text-on-surface-variant">08:00:00 UTC</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-[13px] line-clamp-2">Scheduled canary replay executed with 0 variances across 14 nodes.</p>
      </div>
      </div>
      {/* Event Item */}
      <div className="relative flex gap-md">
      <div className="absolute left-[-29px] top-[2px] w-4 h-4 rounded-full bg-[#0F172A] border-[2px] border-outline flex items-center justify-center z-10"></div>
      <div className="flex-1 pb-md border-b border-[#1E293B] border-dashed last:border-0 last:pb-0">
      <div className="flex justify-between items-baseline mb-xs">
      <h4 className="font-data-mono text-[13px] text-on-secondary-container font-medium">Cluster Scale-Up Detected</h4>
      <span className="font-data-mono text-[11px] text-on-surface-variant">07:45:10 UTC</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-[13px] line-clamp-2">+3 nodes provisioned in region us-east-2.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Suggested Actions Panel (col-span-4) */}
      <div className="col-span-12 lg:col-span-4 bg-surface-container border border-[#1E293B] rounded p-0 overflow-hidden flex flex-col h-[400px]">
      <div className="p-md border-b border-[#1E293B] bg-[#0A101D] flex gap-sm items-center">
      <Lightbulb className="text-primary-fixed-dim text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Suggested Actions</span>
      </div>
      <div className="flex-1 p-sm flex flex-col gap-sm overflow-y-auto">
      {/* Hint Card */}
      <div className="bg-[#0F172A] border border-[#1E293B] border-l-2 border-l-error p-sm rounded hover:bg-[#1E293B] transition-colors cursor-pointer group">
      <div className="flex items-start gap-sm">
      <TriangleAlert className="text-error text-[16px] mt-[2px]" aria-hidden={true} focusable="false" />
      <div>
      <h5 className="font-data-mono text-[12px] text-primary mb-[2px]">Missing Recovery Notes</h5>
      <p className="font-body-md text-[12px] text-on-surface-variant leading-tight">3 backend modules lack documented recovery procedures for state mismatch errors.</p>
      <span className="inline-block mt-sm font-data-mono text-[10px] text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity">Review Modules →</span>
      </div>
      </div>
      </div>
      {/* Hint Card */}
      <div className="bg-[#0F172A] border border-[#1E293B] border-l-2 border-l-tertiary-fixed-dim p-sm rounded hover:bg-[#1E293B] transition-colors cursor-pointer group">
      <div className="flex items-start gap-sm">
      <Route className="text-tertiary-fixed-dim text-[16px] mt-[2px]" aria-hidden={true} focusable="false" />
      <div>
      <h5 className="font-data-mono text-[12px] text-primary mb-[2px]">Verify Pipeline Routing</h5>
      <p className="font-body-md text-[12px] text-on-surface-variant leading-tight">Recent ownership updates may conflict with inherited routing rules in 'alpha' cluster.</p>
      <span className="inline-block mt-sm font-data-mono text-[10px] text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity">Run Diagnostics →</span>
      </div>
      </div>
      </div>
      {/* Hint Card */}
      <div className="bg-[#0F172A] border border-[#1E293B] border-l-2 border-l-outline p-sm rounded hover:bg-[#1E293B] transition-colors cursor-pointer group">
      <div className="flex items-start gap-sm">
      <Clock className="text-on-surface-variant text-[16px] mt-[2px]" aria-hidden={true} focusable="false" />
      <div>
      <h5 className="font-data-mono text-[12px] text-primary mb-[2px]">Optimize Replay Schedule</h5>
      <p className="font-body-md text-[12px] text-on-surface-variant leading-tight">Shifting automated replays to 03:00 UTC could reduce compute contention by 14%.</p>
      <span className="inline-block mt-sm font-data-mono text-[10px] text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity">Apply Suggestion →</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
