# CPU Club Official Website

The official website for the **Computing & Programming Unplugged (CPU) Club** at Heriot-Watt University, built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🧭 Project Architecture

Project structure and architecture

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

---

##  Contributing & Pull Request Workflow

To prevent merge conflicts, each page is strictly isolated to its own directory under `src/app/`. Every member must work within their assigned route and submit changes via Pull Requests (PRs).

### 1. Create a Feature Branch
Never push directly to `main`. Always create an isolated branch off an up-to-date `main`:
```bash
git checkout main
git pull origin main
git checkout -b feature/<page-name>
# Example: git checkout -b feature/about-page
```

### 2. Work in Isolation
- **Your Page Only**: Work strictly inside your assigned route folder (e.g., `src/app/about/` and its `_components/` folder).
- **Packages**: Avoid running `npm install` for individual ad-hoc packages without coordinating first, as this causes lockfile conflicts.

### 3. Stage, Commit, and Push
Verify your modified files before pushing:
```bash
# Check modified files (ensure only your route files are listed)
git status

# Stage your changes
git add .

# Commit with a clean message
git commit -m "feat(<page-name>): implement <summary of changes>"

# Push to your remote branch
git push -u origin feature/<page-name>
```

### 4. Open a Pull Request (PR)
1. Go to the project repository on GitHub.
2. Click "Compare & pull request" on your recently pushed branch.
3. Verify that `base: main` and `compare: feature/<page-name>`.
4. Title format: `feat(<page-name>): <short description>`.
5. In the PR description, summarize what was built and attach a quick screenshot of the rendered page.
6. Click **Create pull request**.

### 5. Review & Merging
- **Code Review**: The project lead will review the PR to verify file isolation, clean component structure, and responsive styling.
- **Addressing Feedback**: If changes are requested, do not open a new PR. Make the fixes locally on your existing branch, commit, and push (`git add .`, `git commit -m "fix: address PR feedback"`, `git push`). The PR updates automatically.
- **Merge**: Once approved, your branch will be merged into `main`.
