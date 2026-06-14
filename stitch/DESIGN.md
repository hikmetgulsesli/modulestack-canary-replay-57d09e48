---
name: ModuleStack Canary Replay
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#cec6ac'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#979179'
  outline-variant: '#4c4733'
  surface-tint: '#e2c60f'
  primary: '#fffdff'
  on-primary: '#393000'
  primary-container: '#ffe135'
  on-primary-container: '#736300'
  inverse-primary: '#6d5e00'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#fefdff'
  on-tertiary: '#00354a'
  tertiary-container: '#c0e6ff'
  on-tertiary-container: '#006b91'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe245'
  primary-fixed-dim: '#e2c60f'
  on-primary-fixed: '#211b00'
  on-primary-fixed-variant: '#524700'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin: 16px
---

## Brand & Style
The design system for this dashboard prioritizes **Deterministic Functionalism**. It is engineered for high-density operations where clarity and speed of data perception are paramount. The "Canary" theme is not treated as a decorative flourish, but as a critical signaling mechanism—representing the "canary in the coal mine" for system health.

The style is **Corporate / Technical**, characterized by:
- **High Information Density:** Maximizing screen real estate without sacrificing legibility.
- **Precision Engineering:** Using rigid structures, thin borders, and monospaced data points to evoke a feeling of a specialized tool.
- **Controlled Contrast:** A muted, professional foundation that allows the Canary Yellow accents to demand immediate attention during critical events.
- **Zero Ambiguity:** Avoiding soft shadows or decorative gradients in favor of flat surfaces and clear state indicators.

## Colors
The palette is built on a "Dark Mode First" architecture to reduce eye strain during long-shift monitoring.
- **Primary (Canary Yellow):** Reserved strictly for active states, warnings, and high-priority action buttons. It is the primary signal color.
- **Secondary (Slate Deep Blue):** Used for the core background and surface layers to provide a sophisticated, low-fatigue environment.
- **Tertiary (Sky Blue):** Used for informational accents, link states, and neutral data visualizations.
- **Borders & Grids:** A strict palette of slate-grays (`#1E293B`) defines the structure, creating a "blueprint" feel.

## Typography
Typography is split between two functional roles:
1.  **Inter (Sans):** Used for interface labels, headers, and general navigation. It provides a clean, modern frame.
2.  **JetBrains Mono (Monospace):** Mandatory for all dynamic data, timestamps, logs, and metric counts. The fixed character width ensures that jumping values don't cause layout shifts and allows for easier vertical scanning of data columns.

All labels should use the `label-caps` style for structural headers to distinguish them from interactive content.

## Layout & Spacing
This design system utilizes a **Fixed Grid with High-Density Spacing**.
- **The 4px Rule:** All spacing and sizing must be a multiple of 4px.
- **Grid:** A 12-column grid for desktop with 12px gutters. On tablet/mobile, the layout collapses into a single-column scroll or a 2-column card view.
- **Density:** Padding within components (cards, list items) is minimized to 8px or 12px to maximize information throughput. 
- **Sidebars:** Use a fixed 240px navigation rail on the left to maximize horizontal space for complex data tables and charts.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Rigid Outlines** rather than shadows.
- **Level 0 (Background):** `#020617` — The foundation.
- **Level 1 (Surfaces):** `#0F172A` — Primary containers, cards, and sidebar.
- **Level 2 (Overlays):** `#1E293B` — Modals, tooltips, and popovers.
- **Borders:** Every surface is defined by a 1px solid border (`#1E293B`). When a container is "Active" or "Focused," the border transitions to Canary Yellow or Tertiary Sky Blue. 
- **No Shadows:** Avoid drop shadows to maintain a "flat/technical" aesthetic that mimics high-end hardware interfaces.

## Shapes
Shapes are **Low-Radius/Soft (0.25rem)**.
- Standard components like buttons and inputs use a 4px (0.25rem) radius to feel precise.
- Status indicators (dots) are perfectly circular.
- Avoid fully pill-shaped or organic curves; the interface should feel constructed and architectural.

## Components
- **Buttons:** 
  - *Primary:* Canary Yellow background, Slate text. High visibility.
  - *Secondary:* Ghost style with 1px Slate-gray border and white text.
- **Status Chips:** Small, rectangular chips with a 2px left-border indicating status color (Success/Error/Warning) rather than a full color fill, ensuring the text remains legible.
- **Input Fields:** Dark fill (`#020617`) with 1px border. Focus state uses a bright 1px Tertiary Blue border. Use monospaced font for numerical inputs.
- **Data Tables:** Zebra-striping is forbidden. Use 1px horizontal dividers. On hover, rows highlight with a subtle `#1E293B` background.
- **Metrics/KPIs:** Large monospaced values with small, uppercase labels positioned above the value.
- **The "Canary" Indicator:** A specialized global health component that pulses with a subtle 2px glow when a system-wide replay is active or a critical threshold is breached.