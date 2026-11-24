# NetGuard AI: Network Attack Forecasting

NetGuard AI is a network-security project prototype that presents network traffic, highlights suspicious activity, estimates attack risk, and displays short-term risk forecasts. It is designed with a focus on IoT and common network attack patterns.

## Project Demo

- **Live prototype:** https://netguard-ai-network-dr25.bolt.host/
- **GitHub repository:** https://github.com/Niddhikashinde/netgraud-ai

## Key Features

- Network traffic monitoring with protocol, IP, time, risk, and attack-category filters
- CSV upload with required-column checks, sample preview, and basic data validation
- Dashboard charts for traffic volume, suspicious flows, risk trends, and attack categories
- Alerts with severity levels and recommended response actions
- Risk forecasting views for 5-, 15-, and 30-minute horizons
- Prediction explanation view showing influential traffic features

## Project Workflow / Algorithm

1. **Traffic input:** Use network-flow records or upload a CSV file containing fields such as timestamp, source/destination IP and port, protocol, duration, bytes, packets, connection state, and label.
2. **Data validation:** Check that required columns are present. Inspect sample rows and flag missing or invalid values and duplicate records.
3. **Feature review:** Examine traffic indicators such as packet rate, connection rate, flow duration, byte ratios, TCP flags/connection state, protocol activity, and MQTT/HTTP/SSH metadata when available.
4. **Suspicious-activity assessment:** Compare traffic behaviour with normal patterns and calculate/display anomaly and risk indicators.
5. **Attack categorisation:** Group suspicious activity into categories such as Network Scanning, Flood/DoS, Brute Force, Botnet/DDoS, MITM/Spoofing, MQTT suspicious activity, and IoT device attacks.
6. **Risk forecasting:** Display a short-term risk trend and category probabilities for the selected forecast horizon.
7. **Alert generation and explanation:** Present severity-based alerts, supporting traffic details, and suggested mitigation actions so an analyst can investigate.

## Technology Stack

- **Frontend:** Next.js 13, React 18, TypeScript
- **Styling and UI:** Tailwind CSS, shadcn/ui, Radix UI, Lucide
- **Charts:** Recharts
- **Data handling:** TypeScript utilities and CSV parsing/validation

## Important Prototype Note

The current repository is a frontend prototype. Its traffic records, risk values, anomaly scores, and forecast outputs are generated as demo data in `lib/api.ts`; the displayed model information does not mean a trained XGBoost model is currently running in this web app. CSV upload currently validates and previews data rather than training or running inference on an uploaded dataset. A production version would connect a trained detection/forecasting model and persistent backend to live or uploaded traffic data.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Status

Prototype / academic project — intended to demonstrate a network-security monitoring and attack-risk forecasting workflow.
