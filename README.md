# Solo Leveling

Solo Leveling is a React productivity tracker that turns daily habits and personal goals into quests. Complete the daily quest to unlock a bonus quest, keep an eye on weekly goals, and manage additional todos from a separate workspace.

## Features

- Daily quest checklist with progress tracking
- Bonus daily quest unlocked after completing the daily quest
- Weekly quest checklist for longer-term goals
- Todo workspace with add, edit, and delete actions
- Client-side routing between the home dashboard and todo list
- Fast development workflow powered by Vite and HMR

## Tech Stack

- React 19
- React Router
- Vite
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Routes

| Path | View |
| --- | --- |
| `/` | Home dashboard with daily, bonus, and weekly quests |
| `/todo` | Todo list with in-memory CRUD operations |

## Project Structure

```text
src/
├── App.jsx              # Router and top-level navigation
├── Home.jsx             # Quest dashboard
├── DailyQuest.jsx       # Daily quest and progress calculation
├── BonusDailyQuest.jsx  # Bonus quest unlocked at 100% daily progress
├── WeeklyQuest.jsx      # Weekly goals
├── TodoList.jsx         # Todo creation and editing workspace
├── Todo.jsx             # Individual todo item
├── TodoTemplate.jsx     # Reusable quest task item
├── App.css              # App-level styles
└── index.css            # Global styles
```

## Data Persistence

The current app stores quest and todo state in React component state. Refreshing the browser resets progress and todos; no backend or database is required.
