# LabourBaba Frontend

**LabourBaba** is a mobile-first web application connecting users with local skilled and daily wage workers (masons, plumbers, electricians, painters, and general labour).

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Features

- **Mobile-First Experience**: Optimized UX for mobile and desktop screens.
- **Service Request Workflow**: Step-by-step job creation, location selection, and skill configuration.
- **Real-Time Tracking & Matching**: Live worker dispatch status and Socket.IO updates.
- **Authentication**: Phone and password customer authentication with secure session management.
- **Interactive Maps**: Map picker and location detection powered by Leaflet and OpenStreetMap.

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Maps:** Leaflet & React-Leaflet
- **Icons:** Lucide React
- **Real-time:** Socket.IO Client
- **State Management:** Zustand

---

## 🏁 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file from the example template:
```bash
cp .env.example .env.local
```
Ensure `NEXT_PUBLIC_BACKEND_URL` points to your backend instance:
```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:5000"
BACKEND_URL="http://localhost:5000"
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
