// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - ModuleStack Canary Replay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useMemo } from 'react';
import { BadgeHelp, Bell, Braces, CheckCircle2, CircleAlert, CircleHelp, CircleUserRound, FileText, Gamepad2, GitBranch, Headphones, HeartPulse, Languages, ListFilter, Network, Package, Play, RefreshCw, Search, Server, Smartphone, StickyNote, TriangleAlert, X } from "lucide-react";
import type { RecordItem } from '../features/modulestack-canary-replay/modulestack-canary-replay.store';


export type RecordOperationsModulestackCanaryReplayActionId = "system-scan-1" | "create-replay-2" | "notifications-3" | "help-outline-4" | "account-circle-5" | "retry-load-6" | "create-replay-7" | "close-8" | "view-logs-9" | "retry-10" | "web-1" | "game-2" | "mobile-3" | "backend-4" | "data-pipelines-5" | "docs-6" | "support-7" | "dashboard-8" | "history-9" | "alerts-10" | "settings-11";

export interface RecordOperationsModulestackCanaryReplayProps {
  actions?: Partial<Record<RecordOperationsModulestackCanaryReplayActionId, () => void>>;
  records?: RecordItem[];
  searchQuery?: string;
  onSearchQueryChange?: (value: string) => void;
  onSelectRecord?: (id: string) => void;

}

export function RecordOperationsModulestackCanaryReplay({ actions, records = [], searchQuery = '', onSearchQueryChange, onSelectRecord }: RecordOperationsModulestackCanaryReplayProps) {
  const filteredRecords = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return records;
    return records.filter((record) =>
      record.title.toLowerCase().includes(query) ||
      record.module.toLowerCase().includes(query) ||
      record.id.toLowerCase().includes(query)
    );
  }, [records, searchQuery]);

  return (
    <>
      {/* SideNavBar (Predicted Component) */}
      <nav className="bg-surface-container text-primary font-label-caps text-label-caps fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant flex flex-col py-md z-40">
      {/* Brand Header Area */}
      <div className="px-md pb-md mb-sm border-b border-outline-variant flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container flex-shrink-0">
      <HeartPulse aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col overflow-hidden">
      <span className="font-headline-md text-headline-md truncate">Health Monitor</span>
      <span className="text-on-surface-variant truncate opacity-80">Global Status: Nominal</span>
      </div>
      </div>
      {/* Primary Navigation */}
      <div className="flex-1 overflow-y-auto mt-sm flex flex-col gap-unit">
      <a className="flex items-center gap-sm px-md py-sm bg-secondary-container text-primary-fixed border-l-4 border-primary-fixed transition-colors duration-200 ease-in-out mx-sm" href="#" data-action-id="web-1" onClick={(event) => { event.preventDefault(); actions?.["web-1"]?.(); }}>
      <Languages aria-hidden={true} focusable="false" />
      <span className="truncate">Web</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out border-l-4 border-transparent mx-sm" href="#" data-action-id="game-2" onClick={(event) => { event.preventDefault(); actions?.["game-2"]?.(); }}>
      <Gamepad2 aria-hidden={true} focusable="false" />
      <span className="truncate">Game</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out border-l-4 border-transparent mx-sm" href="#" data-action-id="mobile-3" onClick={(event) => { event.preventDefault(); actions?.["mobile-3"]?.(); }}>
      <Smartphone aria-hidden={true} focusable="false" />
      <span className="truncate">Mobile</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out border-l-4 border-transparent mx-sm" href="#" data-action-id="backend-4" onClick={(event) => { event.preventDefault(); actions?.["backend-4"]?.(); }}>
      <Server aria-hidden={true} focusable="false" />
      <span className="truncate">Backend</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out border-l-4 border-transparent mx-sm" href="#" data-action-id="data-pipelines-5" onClick={(event) => { event.preventDefault(); actions?.["data-pipelines-5"]?.(); }}>
      <GitBranch aria-hidden={true} focusable="false" />
      <span className="truncate">Data Pipelines</span>
      </a>
      </div>
      {/* Call to Action */}
      <div className="px-md py-sm border-t border-outline-variant mt-auto">
      <button className="w-full bg-primary-container text-on-primary-fixed py-sm rounded flex items-center justify-center gap-xs hover:bg-primary-fixed transition-colors" type="button" data-action-id="system-scan-1" onClick={actions?.["system-scan-1"]}>
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                      System Scan
                  </button>
      </div>
      {/* Footer Navigation */}
      <div className="flex flex-col gap-unit px-sm pt-sm border-t border-outline-variant mt-sm">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="docs-6" onClick={(event) => { event.preventDefault(); actions?.["docs-6"]?.(); }}>
      <FileText aria-hidden={true} focusable="false" />
      <span className="truncate">Docs</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="support-7" onClick={(event) => { event.preventDefault(); actions?.["support-7"]?.(); }}>
      <Headphones aria-hidden={true} focusable="false" />
      <span className="truncate">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper (offset by sidebar width) */}
      <div className="ml-[240px] flex-1 flex flex-col h-full w-[calc(100%-240px)] relative bg-background">
      {/* TopNavBar (Predicted Component) */}
      <header className="bg-surface text-primary-fixed font-headline-md text-headline-md w-full h-16 border-b border-outline-variant flex justify-between items-center px-lg sticky top-0 z-50 flex-shrink-0">
      {/* Brand & Navigation */}
      <div className="flex items-center gap-lg h-full">
      <div className="font-headline-md text-headline-md font-bold text-primary-fixed flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary-fixed-dim shadow-[0_0_8px_rgba(226,198,15,0.6)] animate-pulse"></span>
                          ModuleStack Canary Replay
                      </div>
      <nav className="hidden lg:flex h-full items-end gap-md ml-lg">
      <a className="text-on-surface-variant hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-sm" href="#" data-action-id="dashboard-8" onClick={(event) => { event.preventDefault(); actions?.["dashboard-8"]?.(); }}>Dashboard</a>
      <a className="text-primary-fixed border-b-2 border-primary-fixed pb-1 cursor-pointer active:opacity-80" href="#" data-action-id="history-9" onClick={(event) => { event.preventDefault(); actions?.["history-9"]?.(); }}>History</a>
      <a className="text-on-surface-variant hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-sm" href="#" data-action-id="alerts-10" onClick={(event) => { event.preventDefault(); actions?.["alerts-10"]?.(); }}>Alerts</a>
      <a className="text-on-surface-variant hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80 py-sm" href="#" data-action-id="settings-11" onClick={(event) => { event.preventDefault(); actions?.["settings-11"]?.(); }}>Settings</a>
      </nav>
      </div>
      {/* Search, Actions & Trailing Icons */}
      <div className="flex items-center gap-md">
      {/* Search Bar */}
      <div className="relative hidden md:block w-64">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container border border-outline-variant text-on-surface rounded pl-[36px] pr-sm py-1.5 focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed transition-colors text-body-md font-body-md placeholder:text-on-surface-variant" placeholder="Search records..." type="text" value={searchQuery} onChange={(event) => onSearchQueryChange?.(event.target.value)} />
      </div>
      {/* Primary Action */}
      <button className="bg-primary-container text-on-primary-fixed font-body-md text-body-md px-md py-1.5 rounded hover:bg-primary-fixed transition-colors whitespace-nowrap hidden sm:block border border-transparent" type="button" data-action-id="create-replay-2" onClick={actions?.["create-replay-2"]}>
                          Create Replay
                      </button>
      {/* Icon Actions */}
      <div className="flex items-center gap-sm text-on-surface-variant">
      <button className="hover:text-primary-fixed transition-colors p-xs" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}><Bell aria-hidden={true} focusable="false" /></button>
      <button className="hover:text-primary-fixed transition-colors p-xs" type="button" aria-label="Help Outline" data-action-id="help-outline-4" onClick={actions?.["help-outline-4"]}><CircleHelp aria-hidden={true} focusable="false" /></button>
      <button className="hover:text-primary-fixed transition-colors p-xs" type="button" aria-label="Account Circle" data-action-id="account-circle-5" onClick={actions?.["account-circle-5"]}><CircleUserRound aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto p-md lg:p-lg flex flex-col gap-lg">
      {/* Page Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
      <div>
      <h1 className="font-display-lg text-display-lg text-primary mb-xs tracking-tight">Record Operations</h1>
      <p className="text-on-surface-variant text-body-md">Analyze execution traces, manage deployment queues, and retry load failures.</p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-transparent border border-outline-variant text-on-surface px-md py-1.5 rounded hover:bg-surface-variant transition-colors flex items-center gap-xs font-body-md" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Retry Load
                          </button>
      <button className="bg-primary-container text-on-primary-fixed px-md py-1.5 rounded hover:bg-primary-fixed transition-colors flex items-center gap-xs font-body-md border border-transparent" type="button" data-action-id="create-replay-7" onClick={actions?.["create-replay-7"]}>
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
                              Create Replay
                          </button>
      </div>
      </div>
      {/* Summary Metrics Cards (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {/* Card 1 */}
      <div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-xs">Active Stacks</span>
      <div className="flex items-baseline gap-sm">
      <span className="font-data-mono text-data-mono text-[28px] leading-none text-primary">124</span>
      <span className="text-on-secondary-container text-body-md opacity-80">/ 150</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container border border-error-container rounded p-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute right-0 top-0 w-16 h-16 bg-error-container opacity-10 rounded-bl-full pointer-events-none"></div>
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Critical Failures</span>
      <TriangleAlert className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-data-mono text-data-mono text-[28px] leading-none text-error">3</span>
      <span className="text-error text-body-md opacity-80">+2m</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Healthy Modules</span>
      <CheckCircle2 className="text-primary-fixed-dim text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-data-mono text-data-mono text-[28px] leading-none text-primary">98.2%</span>
      <span className="text-primary-fixed-dim text-body-md opacity-80">Target: 99.9%</span>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-xs">Deployment Queue</span>
      <div className="flex items-baseline gap-sm">
      <span className="font-data-mono text-data-mono text-[28px] leading-none text-primary">12</span>
      <span className="text-on-secondary-container text-body-md opacity-80">pending</span>
      </div>
      </div>
      </div>
      {/* Content Area: Table + Drawer Layout */}
      <div className="flex-1 flex gap-md min-h-0">
      {/* Main List/Table Container */}
      <div className="flex-1 bg-surface-container border border-outline-variant rounded flex flex-col overflow-hidden min-w-0">
      {/* Filter Bar */}
      <div className="p-sm border-b border-outline-variant bg-surface-container-highest flex items-center justify-between gap-sm whitespace-nowrap overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <div className="flex items-center gap-sm">
      <ListFilter className="text-on-surface-variant text-[18px] ml-xs" aria-hidden={true} focusable="false" />
      <select className="bg-surface border border-outline-variant text-on-surface rounded px-sm py-1 text-body-md focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed outline-none">
      <option>Module Type: All</option>
      <option>Core</option>
      <option>Edge</option>
      </select>
      <select className="bg-surface border border-outline-variant text-on-surface rounded px-sm py-1 text-body-md focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed outline-none">
      <option>Ownership: Mine</option>
      <option>Team Alpha</option>
      <option>System</option>
      </select>
      <select className="bg-surface border border-outline-variant text-on-surface rounded px-sm py-1 text-body-md focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed outline-none">
      <option>Status: All</option>
      <option>Build</option>
      <option>Test</option>
      <option>Deploy</option>
      </select>
      </div>
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px] mr-xs">{filteredRecords.length} Records</span>
      </div>
      {/* Data Table */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead className="sticky top-0 bg-surface-container-highest z-10 border-b border-outline-variant font-label-caps text-label-caps text-on-surface-variant uppercase">
      <tr>
      <th className="px-md py-sm font-normal">Module Name</th>
      <th className="px-md py-sm font-normal">Owner</th>
      <th className="px-md py-sm font-normal">Status</th>
      <th className="px-md py-sm font-normal">Failure Route</th>
      <th className="px-md py-sm font-normal text-right">Last Updated</th>
      </tr>
      </thead>
      <tbody className="font-data-mono text-data-mono divide-y divide-outline-variant">
      {filteredRecords.length === 0 && (
        <tr>
          <td colSpan={5} className="px-md py-lg text-center text-on-surface-variant">
            No records match your search.
          </td>
        </tr>
      )}
      {filteredRecords.map((record) => (
        <tr key={record.id} data-record-id={record.id} className="hover:bg-surface-variant cursor-pointer transition-colors" onClick={() => onSelectRecord?.(record.id)}>
          <td className="px-md py-sm text-primary flex items-center gap-xs">
            <Package className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
            {record.title}
          </td>
          <td className="px-md py-sm text-on-surface">{record.module}</td>
          <td className="px-md py-sm">
            <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 border-l-2 ${record.status === 'active' ? 'border-primary-fixed-dim bg-surface text-on-surface' : 'border-surface-variant bg-surface text-on-surface'} rounded-r`}>
              <span className={`w-1.5 h-1.5 rounded-full ${record.status === 'active' ? 'bg-primary-fixed-dim' : 'bg-surface-variant'}`}></span>
              {record.status === 'active' ? 'Active' : 'Draft'}
            </div>
          </td>
          <td className="px-md py-sm text-on-surface-variant truncate max-w-[150px]">-</td>
          <td className="px-md py-sm text-right text-on-surface-variant">{new Date(record.createdAt).toLocaleTimeString()}</td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
      </div>
      {/* Collapsible Side Panel (Preview) */}
      <aside className="w-[320px] xl:w-[400px] bg-surface-container border border-outline-variant rounded flex flex-col overflow-hidden hidden lg:flex flex-shrink-0">
      {/* Panel Header */}
      <div className="p-md border-b border-outline-variant flex justify-between items-start bg-surface-container-highest">
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Record Details</div>
      <h2 className="font-headline-md text-headline-md text-primary break-all">AUTH_GATEWAY_v2.4</h2>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-variant" type="button" aria-label="Close" data-action-id="close-8" onClick={actions?.["close-8"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Panel Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-md flex flex-col gap-lg">
      {/* Status Block */}
      <div className="bg-surface border border-error-container rounded p-sm">
      <div className="flex items-center gap-xs text-error mb-2">
      <CircleAlert className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-headline-md text-[16px]">Test Suite Failed</span>
      </div>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[12px] break-all">
                                      Exception: ERR_TOKEN_EXPIRED_TIMEOUT at src/auth/verify.ts:142
                                  </div>
      </div>
      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-sm">
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Owner</span>
      <span className="font-data-mono text-data-mono text-on-surface">SYS_ADMIN</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Environment</span>
      <span className="font-data-mono text-data-mono text-on-surface">Staging-Canary</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Commit hash</span>
      <span className="font-data-mono text-data-mono text-tertiary-fixed underline cursor-pointer">a7b93f2</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Duration</span>
      <span className="font-data-mono text-data-mono text-on-surface">45.2s</span>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Recovery Notes */}
      <div>
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm flex items-center gap-xs">
      <StickyNote className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Recovery Notes
                                  </h3>
      <div className="bg-surface border border-outline-variant rounded p-sm font-data-mono text-data-mono text-on-surface-variant text-[12px] leading-relaxed">
      <p>Automated rollback initiated. Previous stable version (v2.3) deployed successfully.</p>
      <p className="mt-2 text-primary-fixed-dim">Recommended Action: Verify token generation payload in staging env before retry.</p>
      </div>
      </div>
      {/* Execution History Mini-Timeline */}
      <div>
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm">Execution History</h3>
      <div className="flex flex-col gap-sm relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-outline-variant"></div>
      <div className="flex gap-sm items-start relative z-10">
      <div className="w-4 h-4 rounded-full bg-error border-2 border-surface-container mt-0.5 flex-shrink-0"></div>
      <div className="flex flex-col">
      <span className="font-body-md text-on-surface text-[13px]">Integration Tests Failed</span>
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">10:42:05 UTC</span>
      </div>
      </div>
      <div className="flex gap-sm items-start relative z-10">
      <div className="w-4 h-4 rounded-full bg-primary-fixed-dim border-2 border-surface-container mt-0.5 flex-shrink-0"></div>
      <div className="flex flex-col">
      <span className="font-body-md text-on-surface text-[13px]">Build Completed</span>
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">10:41:20 UTC</span>
      </div>
      </div>
      <div className="flex gap-sm items-start relative z-10">
      <div className="w-4 h-4 rounded-full bg-primary-fixed-dim border-2 border-surface-container mt-0.5 flex-shrink-0"></div>
      <div className="flex flex-col">
      <span className="font-body-md text-on-surface text-[13px]">Pipeline Triggered</span>
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">10:40:00 UTC</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Panel Actions */}
      <div className="p-md border-t border-outline-variant bg-surface-container-highest flex gap-sm">
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface py-1.5 rounded hover:bg-surface-variant transition-colors font-body-md" type="button" data-action-id="view-logs-9" onClick={actions?.["view-logs-9"]}>
                                  View Logs
                              </button>
      <button className="flex-1 bg-primary-container text-on-primary-fixed py-1.5 rounded hover:bg-primary-fixed transition-colors font-body-md border border-transparent" type="button" data-action-id="retry-10" onClick={actions?.["retry-10"]}>
                                  Retry
                              </button>
      </div>
      </aside>
      </div>
      </main>
      </div>
    </>
  );
}
