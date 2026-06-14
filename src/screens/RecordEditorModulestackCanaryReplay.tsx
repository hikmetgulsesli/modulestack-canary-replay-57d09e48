// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - ModuleStack Canary Replay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useEffect, useState } from 'react';
import { BadgeHelp, Bell, CircleAlert, CircleHelp, CircleUserRound, FileText, Gamepad2, GitBranch, Headphones, HeartPulse, Languages, Plus, Save, Search, Server, Settings2, Smartphone, Trash2, TriangleAlert } from "lucide-react";
import type { RecordItem } from '../features/modulestack-canary-replay/modulestack-canary-replay.store';


export type RecordEditorModulestackCanaryReplayActionId = "system-scan-1" | "notifications-2" | "help-outline-3" | "account-circle-4" | "create-replay-5" | "add-6" | "delete-7" | "delete-8" | "cancel-9" | "save-record-10" | "web-1" | "game-2" | "mobile-3" | "backend-4" | "data-pipelines-5" | "description-6" | "support-agent-7" | "dashboard-8" | "history-9" | "alerts-10" | "settings-11";

export interface RecordEditorModulestackCanaryReplayProps {
  actions?: Partial<Record<RecordEditorModulestackCanaryReplayActionId, () => void>>;
  record?: RecordItem | null;
  onSaveRecord?: (record: RecordItem) => void;

}

export function RecordEditorModulestackCanaryReplay({ actions, record, onSaveRecord }: RecordEditorModulestackCanaryReplayProps) {
  const [title, setTitle] = useState(record?.title ?? 'New replay');
  const [module, setModule] = useState(record?.module ?? 'web');
  const [owner, setOwner] = useState('team-finops');
  const [notes, setNotes] = useState('In case of failure during replay, isolate the payment queue immediately. Check logs in the EU-central cluster before attempting a soft reset.');

  useEffect(() => {
    if (record) {
      setTitle(record.title);
      setModule(record.module);
      setOwner('team-finops');
      setNotes('In case of failure during replay, isolate the payment queue immediately. Check logs in the EU-central cluster before attempting a soft reset.');
    }
  }, [record?.id]);

  const handleSave = () => {
    if (!record) return;
    onSaveRecord?.({
      ...record,
      title,
      module,
      status: record.status === 'active' ? 'active' : 'draft',
    });
  };

  return (
    <>
      {/* TopNavBar (JSON Blueprint) - Handled via Top sticky nav structure if needed, but per specs SideNav is primary. 
               Wait, TopNavBar component JSON says w-full sticky top-0. Let's include it for the top context, above the content area. */}
      {/* SideNavBar (JSON Blueprint) */}
      <aside className="fixed left-0 top-0 h-full w-[240px] bg-surface-container border-r border-outline-variant flex flex-col py-md z-40">
      <div className="px-md mb-xl flex items-center gap-sm">
      <HeartPulse className="text-primary-fixed text-2xl" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md text-primary">Health Monitor</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Global Status: Nominal</p>
      </div>
      </div>
      <nav className="flex-1 px-sm space-y-xs">
      {/* Settings Active per intent (editing a record is configuration) */}
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="web-1" onClick={(event) => { event.preventDefault(); actions?.["web-1"]?.(); }}>
      <Languages className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Web</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="game-2" onClick={(event) => { event.preventDefault(); actions?.["game-2"]?.(); }}>
      <Gamepad2 className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Game</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="mobile-3" onClick={(event) => { event.preventDefault(); actions?.["mobile-3"]?.(); }}>
      <Smartphone className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Mobile</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="backend-4" onClick={(event) => { event.preventDefault(); actions?.["backend-4"]?.(); }}>
      <Server className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Backend</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded" href="#" data-action-id="data-pipelines-5" onClick={(event) => { event.preventDefault(); actions?.["data-pipelines-5"]?.(); }}>
      <GitBranch className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Data Pipelines</span>
      </a>
      </nav>
      <div className="mt-auto px-md space-y-sm">
      <button className="w-full flex items-center justify-center gap-xs py-sm border border-outline-variant text-primary font-label-caps text-label-caps rounded hover:bg-surface-variant transition-colors" type="button" data-action-id="system-scan-1" onClick={actions?.["system-scan-1"]}>
      <Search className="text-sm" aria-hidden={true} focusable="false" />
                      System Scan
                  </button>
      <div className="pt-sm border-t border-outline-variant flex justify-between">
      <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Description" data-action-id="description-6" onClick={(event) => { event.preventDefault(); actions?.["description-6"]?.(); }}>
      <FileText aria-hidden={true} focusable="false" />
      </a>
      <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" aria-label="Support Agent" data-action-id="support-agent-7" onClick={(event) => { event.preventDefault(); actions?.["support-agent-7"]?.(); }}>
      <Headphones aria-hidden={true} focusable="false" />
      </a>
      </div>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="ml-[240px] flex-1 flex flex-col h-screen overflow-hidden bg-background">
      {/* TopNavBar (JSON) integrated as header for the main area */}
      <header className="w-full h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-lg sticky top-0 z-30 shrink-0">
      <div className="flex items-center gap-lg h-full">
      <span className="font-headline-md text-headline-md font-bold text-primary-fixed">ModuleStack Canary Replay</span>
      <nav className="hidden md:flex h-full items-end gap-md">
      {/* Nav items based on JSON */}
      <a className="text-on-surface-variant pb-1 hover:text-primary-fixed transition-colors" href="#" data-action-id="dashboard-8" onClick={(event) => { event.preventDefault(); actions?.["dashboard-8"]?.(); }}>Dashboard</a>
      <a className="text-on-surface-variant pb-1 hover:text-primary-fixed transition-colors" href="#" data-action-id="history-9" onClick={(event) => { event.preventDefault(); actions?.["history-9"]?.(); }}>History</a>
      <a className="text-on-surface-variant pb-1 hover:text-primary-fixed transition-colors" href="#" data-action-id="alerts-10" onClick={(event) => { event.preventDefault(); actions?.["alerts-10"]?.(); }}>Alerts</a>
      <a className="text-primary-fixed border-b-2 border-primary-fixed pb-1" href="#" data-action-id="settings-11" onClick={(event) => { event.preventDefault(); actions?.["settings-11"]?.(); }}>Settings</a> {/* Active state for Settings/Editor */}
      </nav>
      </div>
      <div className="flex items-center gap-sm">
      {/* Search bar abstract */}
      <div className="w-64 h-8 bg-[#020617] border border-outline-variant rounded flex items-center px-sm">
      <Search className="text-on-surface-variant text-sm mr-sm" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none text-body-md text-on-surface focus:ring-0 w-full p-0 h-full" placeholder="Search records..." type="text" />
      </div>
      <div className="flex items-center gap-xs ml-sm text-on-surface-variant">
      <button className="p-xs hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}><Bell aria-hidden={true} focusable="false" /></button>
      <button className="p-xs hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Help Outline" data-action-id="help-outline-3" onClick={actions?.["help-outline-3"]}><CircleHelp aria-hidden={true} focusable="false" /></button>
      <button className="p-xs hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}><CircleUserRound aria-hidden={true} focusable="false" /></button>
      </div>
      <button className="ml-sm bg-primary-container text-on-primary-container px-md py-sm rounded font-label-caps text-label-caps hover:bg-primary-fixed transition-colors" type="button" data-action-id="create-replay-5" onClick={actions?.["create-replay-5"]}>Create Replay</button>
      </div>
      </header>
      {/* Unsaved Changes Banner */}
      <div className="w-full bg-surface-tint/10 border-b border-surface-tint py-sm px-lg flex items-center justify-center gap-sm shrink-0">
      <TriangleAlert className="text-surface-tint text-sm" aria-hidden={true} focusable="false" />
      <span className="font-data-mono text-data-mono text-surface-tint">Unsaved Changes</span>
      </div>
      {/* Scrollable Form Area */}
      <div className="flex-1 overflow-y-auto p-xl flex justify-center">
      <div className="w-full max-w-4xl space-y-lg">
      {/* Form Header */}
      <div className="border-b border-outline-variant pb-md flex justify-between items-end">
      <div>
      <h2 className="font-display-lg text-display-lg text-primary">Record Editor</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Configure module parameters and verification hooks.</p>
      </div>
      <div className="font-data-mono text-data-mono text-on-surface-variant">
                              ID: <span className="text-primary">{record?.id ?? 'NEW'}</span>
      </div>
      </div>
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
      {/* Main Specs Section */}
      <section className="md:col-span-8 bg-[#0F172A] border border-[#1E293B] rounded p-lg space-y-md">
      <div className="flex items-center gap-xs mb-sm">
      <Settings2 className="text-surface-tint text-sm" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-primary">Core Configuration</h3>
      </div>
      {/* Module Name */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-secondary-container mb-xs">
                                      Module Name <span className="text-surface-tint">*</span>
      </label>
      <input className="w-full bg-[#020617] border border-[#1E293B] text-primary font-data-mono text-data-mono p-sm rounded focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed transition-colors" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      {/* Ownership & Type Row */}
      <div className="grid grid-cols-2 gap-md">
      <div>
      <label className="block font-label-caps text-label-caps text-on-secondary-container mb-xs">
                                          Module Type <span className="text-surface-tint">*</span>
      </label>
      <select className="w-full bg-[#020617] border border-[#1E293B] text-primary font-body-md p-sm rounded focus:outline-none focus:border-tertiary-fixed appearance-none" value={module} onChange={(event) => setModule(event.target.value)}>
      <option value="web">Web</option>
      <option value="backend">Backend</option>
      <option value="mobile">Mobile</option>
      <option value="data">Data Pipeline</option>
      </select>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-secondary-container mb-xs">
                                          Ownership Boundary <span className="text-surface-tint">*</span>
      </label>
      <input className="w-full bg-[#020617] border border-[#1E293B] text-primary font-data-mono text-data-mono p-sm rounded focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed transition-colors" type="text" value={owner} onChange={(event) => setOwner(event.target.value)} />
      </div>
      </div>
      {/* Recovery Notes */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-secondary-container mb-xs">
                                      Recovery Notes
                                  </label>
      <textarea className="w-full bg-[#020617] border border-[#1E293B] text-on-surface font-body-md p-sm rounded focus:outline-none focus:border-tertiary-fixed resize-none" rows={4} value={notes} onChange={(event) => setNotes(event.target.value)} />
      </div>
      </section>
      {/* Side Panel: Hooks & Actions */}
      <aside className="md:col-span-4 space-y-md">
      {/* Verification Hooks */}
      <div className="bg-[#0F172A] border border-[#1E293B] rounded p-lg flex flex-col h-full">
      <div className="flex items-center justify-between mb-sm">
      <div className="flex items-center gap-xs">
      <BadgeHelp className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-primary">Verification Hooks</h3>
      </div>
      <button className="text-surface-tint hover:text-primary-fixed transition-colors" type="button" aria-label="Add" data-action-id="add-6" onClick={actions?.["add-6"]}>
      <Plus className="text-sm" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="space-y-sm flex-1">
      {/* Hook Item 1 */}
      <div className="border border-[#1E293B] bg-[#020617] rounded p-xs flex justify-between items-center group hover:border-surface-variant transition-colors">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">PRE-BUILD</span>
      <span className="font-data-mono text-data-mono text-primary truncate w-32">lint_check.sh</span>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-colors" type="button" aria-label="Delete" data-action-id="delete-7" onClick={actions?.["delete-7"]}>
      <Trash2 className="text-sm" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Hook Item 2 */}
      <div className="border border-[#1E293B] bg-[#020617] rounded p-xs flex justify-between items-center group hover:border-surface-variant transition-colors">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">POST-TEST</span>
      <span className="font-data-mono text-data-mono text-primary truncate w-32">audit_log_sync</span>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-colors" type="button" aria-label="Delete" data-action-id="delete-8" onClick={actions?.["delete-8"]}>
      <Trash2 className="text-sm" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      <div className="mt-md pt-sm border-t border-[#1E293B] text-center">
      <span className="font-data-mono text-data-mono text-on-surface-variant text-xs">2 Hooks configured</span>
      </div>
      </div>
      </aside>
      </div>
      {/* Footer Actions */}
      <div className="flex justify-end gap-md pt-md border-t border-outline-variant">
      <button className="px-lg py-sm border border-outline-variant text-primary font-label-caps text-label-caps rounded hover:bg-surface-variant transition-colors" type="button" data-action-id="cancel-9" onClick={actions?.["cancel-9"]}>
                              Cancel
                          </button>
      <button className="px-lg py-sm bg-primary-container text-on-primary-container font-label-caps text-label-caps rounded hover:bg-primary-fixed transition-colors flex items-center gap-xs" type="button" data-action-id="save-record-10" onClick={handleSave}>
      <Save className="text-sm" aria-hidden={true} focusable="false" />
                              Save Record
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
