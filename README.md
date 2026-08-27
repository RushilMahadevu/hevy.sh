# ⚡ hevy.sh — Bento Fitness Analytics Platform

A minimalist, high-density Bento dashboard for visualizing your [Hevy](https://hevyapp.com) workout history, anatomical muscle heatmaps, personal records (PRs), strength percentiles, and AI-ready training exports.

Designed for desktop, tablet, and mobile with light/dark themes.

---

## ✨ Features

- **📱 Fully Mobile Responsive**: Seamless layout on iOS, Android, tablets, and desktop.
- **🥩 Anatomical Muscle Highlighter**: Interactive front & back muscle heatmaps (Spectrum, Hotspot, and Muscle Group modes) with tap & hover feedback.
- **📊 Strength Percentiles**: Bodyweight-adjusted strength percentiles benchmarked against Symmetric Strength norms.
- **⚡ Bento Box KPIs**: Instant volume, sessions, training duration, estimated 1RM, and bodyweight tracking.
- **📈 Interactive Charts**: Muscle set balance radar, session volume over time, split distribution (PPL, Upper/Lower, Anterior/Posterior), and session durations via Chart.js.
- **🏆 PR Leaderboard & Est. 1RM**: Epley-formula 1RM calculations for every exercise.
- **🤖 AI Export Tool**: 1-click Markdown prompt and raw JSON export of your complete training logs formatted for ChatGPT, Claude, or Gemini.
- **🌓 Theme & Unit Toggle**: Dark / light mode and LBS / KG toggles with instant live recalculations.
- **☁️ Zero-Config Vercel Support**: Deploys as a static website with optional Serverless API key configuration.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (optional, can also be opened directly in any browser)

### Run Locally
```bash
# Clone the repository
git clone https://github.com/RushilMahadevu/hevy-tracker.git
cd hevy-tracker

# Start the local server
npm start
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

You can deploy `hevy-tracker` to Vercel in seconds:

### Method 1: Vercel Web Dashboard (Recommended)
1. Push this repository to your GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new) and import `hevy-tracker`.
3. *(Optional)* In **Environment Variables**, add:
   - `HEVY_API_KEY`: Your Hevy API Key (from Hevy Settings > Developer API)
4. Click **Deploy**.

> **Note**: Even without an environment variable, you can simply open the dashboard in your mobile or desktop browser, click **API Key**, and enter your key. It is securely saved in your browser's `localStorage`.

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🔑 Hevy API Key Setup

1. Open the [Hevy App](https://hevyapp.com) or website.
2. Navigate to **Settings** > **Developer API**.
3. Generate or copy your API Key.
4. In the dashboard, click the **API Key** button in the top-right header, paste your key, and click **Save & Sync**.

---

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5, CSS3 (Modern Flexbox & Bento CSS Grid), Vanilla ES6+ JavaScript
- **Charts**: [Chart.js](https://www.chartjs.org/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Typography**: [Chivo Mono](https://fonts.google.com/specimen/Chivo+Mono)
- **Deployment**: [Vercel](https://vercel.com) (Static Hosting + Serverless Function)

---

## 📄 License

MIT
