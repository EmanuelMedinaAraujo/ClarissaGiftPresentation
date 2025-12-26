# Clarissa Gift Presentation 2025

## Project Overview

This project is an interactive web application built with **React**, **TypeScript**, and **Vite**. It is designed as a digital "gift reveal" presentation for a specific user ("Clarissa"), guiding them through a sequence of steps to reveal a weekend trip itinerary.

The application functions as a linear narrative flow, transitioning between different "phases" (e.g., Intro, Packing List, Hotel Reveal, Skiing Reveal, Timeline).

## Key Technologies

*   **Framework:** React 19
*   **Build Tool:** Vite 7
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 4 (`@tailwindcss/vite`)
*   **Animations:** Framer Motion (`framer-motion`)
*   **Icons:** Lucide React
*   **Extras:** `canvas-confetti` for celebratory effects, `vite-plugin-pwa` for PWA capabilities.

## Architecture & Structure

The application structure is relatively flat and component-focused:

*   **`src/App.tsx`**: The main entry point that manages the global state (`currentPhase`) and orchestrates the flow of the presentation. It handles the routing logic (rendering specific components based on the current phase).
*   **`src/components/features/`**: Contains the main screen components for each phase of the reveal (e.g., `IntroSection`, `PackingFlow`, `SkiReveal`).
*   **`src/components/ui/`**: Reusable UI components (e.g., `Button`, `Card`).
*   **`src/data/`**: Static data files defining the content (e.g., `timeline.ts`, `packingList.ts`).
*   **`src/components/Layout.tsx`**: Wraps the content and likely handles the overall layout structure and background theming (`wellness` vs `action` themes).

### Application Flow (Phases)

The app moves through the following phases (defined in `App.tsx`):
1.  `intro`
2.  `trip_teaser`
3.  `packing`
4.  `hotel`
5.  `one_more`
6.  `forgotten`
7.  `reveal` (Skiing reveal)
8.  `plan_intro`
9.  `timeline`
10. `success`
11. `summary`

Completion state is persisted in `localStorage` (`clarissa_gift_completed`), so returning users see the summary directly.

## Development Scripts

Run these commands from the project root:

*   **`npm run dev`**: Starts the development server.
*   **`npm run build`**: Type-checks and builds the application for production.
*   **`npm run preview`**: Previews the production build locally.
*   **`npm run lint`**: Runs ESLint to check for code quality issues.

## Conventions

*   **Components:** Functional components with TypeScript interfaces for props.
*   **Styling:** Utility-first CSS using Tailwind classes.
*   **State Management:** React `useState` and `useEffect` for local logic; lifting state up to `App.tsx` for phase management.
