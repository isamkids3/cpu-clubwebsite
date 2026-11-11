# CPU Club Official Website

The official website for the **Computer Processing Unit (CPU) Club** at Heriot-Watt University, built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🧭 Project Architecture

To prevent Git merge conflicts across multiple developers, this project uses a **feature-colocated architecture**. Every route is isolated into its own folder under `src/app/`.

```text
src/
├── app/
│   ├── layout.tsx                     # Global shell wrapping Navbar, children, and Footer
│   ├── globals.css                    # Tailwind / Base styling
│   ├── page.tsx                       # Home page ("In Construction")
│   │
│   ├── about/                         # About Us (/about)
│   │   ├── page.tsx
│   │   └── _components/
│   │
│   ├── announcements/                 # Notices & News (/announcements)
│   │   ├── page.tsx
│   │   └── _components/
│   │
│   ├── events/                        # Events Showcase (/events)
│   │   ├── page.tsx
│   │   └── _components/
│   │
│   ├── projects/                      # Student & Club Projects (/projects)
│   │   ├── page.tsx
│   │   └── _components/
│   │
│   ├── contact/                       # Contact & Inquiries (/contact)
│   │   ├── page.tsx
│   │   └── _components/
│   │
│   ├── feedback/                      # Community Feedback (/feedback)
│   │   ├── page.tsx
│   │   └── _components/
│   │
│   └── faq/                           # Frequently Asked Questions (/faq)
│       ├── page.tsx
│       └── _components/
│
└── components/
    └── layout/                        # Global shell components (Navbar, Footer)
```
---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- `npm` (or `pnpm` / `yarn` / `bun`)

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 4. Verification Commands
Run these before opening a Pull Request:
```bash
# Type check TypeScript code
npx tsc --noEmit

# Run ESLint
npm run lint

# Build production bundle
npm run build
```
