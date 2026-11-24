# Project memory

## Product intent & audience

- NetGuard AI: frontend-only network attack forecasting dashboard for security analysts and admins.
- Audience: SOC analysts and security administrators monitoring IoT network traffic.
- Core features: attack forecasting, traffic analysis, CSV upload/validation, alerts management, explainable AI, reports, admin settings.
- Eight pages required: /login, /dashboard, /traffic, /forecast, /alerts, /explain, /reports, /settings. Do not merge Explain into Forecast.
- Based on IoT-SFC v2 dataset (2026): 88 columns, ~49.9M records, collection period 3–17 April 2025.

## Brand personality & voice

- Professional, security-operations-center (SOC) tone.
- Clear, precise language; no placeholder text.
- Probability estimates framed carefully ("not confirmed attacks").

## Visual design & UX direction

- Dark-default SOC theme with cyan accents; light/dark toggle included.
- Persistent sidebar navigation + top bar with model version badge and user menu.
- Reusable components in `components/`: KpiCard, RiskGauge, SeverityBadge, DataTable, ChartCard.
- Charts via Recharts (area, line, donut, bar). Risk gauge is color-coded 0–100.
- Toast notification system, loading skeletons, empty states throughout.
- Row-click side drawers for record/alert details.
- Responsive, production-style polish.

## Decisions, constraints & rationale

- Frontend-only: all data from realistic mock functions in `lib/api.ts`. No external API or backend.
- Mock data: ~81% normal / ~19% suspicious traffic; UDP dominant then TCP; realistic MQTT/HTTP/DNS/SSH/Modbus; private IPs only (192.168.x.x / 10.x.x.x); attack bursts for scanning, floods, MQTT DoS, SSH brute force, botnet DDoS.
- Attack categories: Normal, Network Scanning, Flood/DoS, Brute Force, Botnet/DDoS, MITM/Spoofing, MQTT Suspicious Activity, IoT Device Attack. Original attack names retained in detailed views.
- Auth: mock login with React context (no localStorage). Admin vs Analyst roles. Analyst cannot access Settings or resolve/delete alerts.
- CSV upload: streaming/chunked parsing for large files; validate required column headers; show validation summary (rows, missing values, duplicates, invalid values, detected columns); distinguish missing required vs optional protocol-specific fields; never claim mock data is from original dataset.
- Attack labels used for training/evaluation only, never as model inputs.
- Radix `Progress` primitive caused SSR SyntaxError; replaced with div-based progress bars in forecast and explain pages.
- Recharts `dot` prop must return a `ReactElement` (not `null`); type props as `any` and always return an element.
- Reports: CSV generated client-side; PDF export via print dialog.
- `.bolt/prompt` contains global design and coding instructions; not restated here.

## Open questions & assumptions

- Exact model name/version string is mocked; no real model metadata exists.
- Forecast confidence values and feature-importance contributions are simulated, not computed from a real model.
- PDF export relies on browser print rather than a generated PDF file.
- Large CSV parsing strategy assumes browser streaming/chunked approach is sufficient; no server-side processing available.