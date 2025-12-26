# Implementation Plan: Anniversary Reveal App

## Workflow & Guidelines

1.  **Iterative Development:** I will complete tasks one by one or in logical groups.
2.  **Status Updates:** After completing a task, I will mark it as `[x]` in this file (`plan.md`) and add brief implementation notes if necessary.
3.  **Architecture Updates:** If a task requires deviating from `architecture.md`, I will update that document first (or concurrently).
4.  **Sandbox Awareness:** I acknowledge I am in a sandbox. I will write code and files, but I will **NOT** try to open browsers or run persistent servers that block the shell.
5.  **Testing Strategy:**
    *   I will **not** run the dev server or tests myself.
    *   I will rely on **you** (the user) to execute run commands (like `npm run dev`) and visually verify the app.
    *   I will provide the necessary commands for you to run.

---

## Task List

### Phase 1: Project Setup & Scaffolding
- [x] **1.1 Initialize Project:** Create Vite project, install dependencies (React, Tailwind, Framer Motion, Lucide).
- [x] **1.2 Configure Tailwind:** Set up `index.css` with Tailwind v4 directives and custom theme variables (Wellness vs. Action) using CSS variables and `@theme` blocks.
- [x] **1.3 Base Layout & State:** Create `App.tsx` with the core state machine (`currentPhase`) and the main `Layout` wrapper.
- [x] **1.4 UI Components:** Create basic `Button`, `Card`, and `PhotoPlaceholder` components.

### Phase 2: The "Wellness" Teaser (Content)
- [x] **2.1 Intro Section:** Build the "Welcome" screen with the romantic theme and first placeholder text.
- [x] **2.2 Wellness Section:** Build the "Hotel/Wellness" teaser content (text + hotel placeholders).
- [x] **2.3 Packing List Feature:** Implement the interactive checklist.
    *   *Logic:* "Next" button remains hidden/disabled until all items are checked.

### Phase 3: The "Reveal" (Interaction)
- [x] **3.1 Transition Logic:** Implement the "One More Thing" button trigger.
- [x] **3.2 Reveal Animation:** Create the Framer Motion transition (background color shift, slide-in effect) to the Skiing theme.
- [x] **3.3 Ski Content:** Display the "SKIFAHREN" reveal text and the new "Action" theme visuals.

### Phase 4: The Timeline (Utility)
- [x] **4.1 Data File:** Create `data/timeline.ts` with the **corrected** schedule (German, Skiing on Fri/Sat, etc.).
- [x] **4.2 Timeline Component:** Build the vertical timeline view using `staggerChildren` animation for entry.
- [x] **4.3 Final Approval:** Add the "Plan genehmigen" button and the confetti success state.

### Phase 5: Polish & Review
- [x] **5.1 Asset Check:** Ensure all placeholders are clearly labeled.
- [x] **5.2 Mobile Responsiveness:** Verify Tailwind classes for mobile layouts.
- [x] **5.3 Code Cleanup:** Remove unused boilerplate.
- [x] **5.4 Final Handover:** Provide instructions for you to start the app.
