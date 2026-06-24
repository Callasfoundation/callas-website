# Callas Foundation Website - Frontend

Frontend application for the Callas Foundation, dedicated to supporting survivors of gender-based violence, providing community feeding programmes, and building safer communities on the Cape Flats.

Built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router v6
* **Icons:** Lucide React

## 📋 Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16.0 or higher)
* npm or yarn

## 🛠️ Installation & Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd callas-foundation/frontend

```


2. **Install dependencies:**
```bash
npm install

```


3. **Set up environment variables:**
Create a `.env` file in the root directory and add the necessary variables (e.g., API URL).
```env
VITE_API_URL=http://localhost:5000/api/v1

```


4. **Run the development server:**
```bash
npm run dev

```


The application will be available at `http://localhost:5173`.

## 📦 Available Scripts

* `npm run dev` - Starts the local development server.
* `npm run build` - Builds the app for production to the `dist` folder.
* `npm run preview` - Locally preview the production build.

## ✨ Features (Phase 1 Implementation)

* **Impact-Focused Homepage:** compelling messaging and mission statements.
* **Dynamic Impact Statistics:** Visual counters for meals served, survivors supported, and training participants.
* **Prominent Call-to-Actions:** Persistent "Donate" and "Get Help Now" buttons in the navigation layout.
* **Responsive Layout:** Mobile-first design ensuring accessibility across all devices.
* **Callas Branding:** Custom Tailwind configuration reflecting the official red, blue, and dark blue color palette.

## 📂 Key Directory Structure

```text
src/
├── assets/         # Global styles, fonts, and static assets
├── components/     # Reusable UI components (Layout, Impact, CTA, Forms)
├── pages/          # Route components (Home, About, Programmes, Support)
├── services/       # API integration functions
├── hooks/          # Custom React hooks
├── context/        # Global state management
└── utils/          # Helper functions and constants

```