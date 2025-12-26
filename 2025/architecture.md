# Technical Design Document: Anniversary Reveal App

## 1. Project Overview

**Goal:** Create a responsive, interactive web application to present a surprise anniversary trip.
**Core Concept:** A linear narrative experience ("Scrollytelling" or Slide-based) that transitions from a relaxing wellness theme to an energetic ski reveal, culminating in a detailed itinerary.
**Target Audience:** 1 User (Clarissa).
**Language:** German.

## 2. Technology Stack

- **Core Framework:** **React 19.2**
  - _Reasoning:_ Component-based architecture ideal for managing the different "Phases" of the presentation.
- **Build Tool:** **Vite**
  - _Reasoning:_ Instant server start, HMR (Hot Module Replacement), and optimized production build.
- **Styling:** **Tailwind CSS**
  - _Reasoning:_ Utility-first CSS for rapid UI development, easy responsive design, and theme switching (Wellness vs. Ski).
- **Animations:** **Framer Motion**
  - _Reasoning:_ Industry standard for React animations. Essential for the "Reveal" effect, smooth list staggering, and page transitions.
- **Icons:** **Lucide React**
  - _Reasoning:_ Clean, consistent SVG icons for the timeline and packing list.
- **Utilities:** `clsx` & `tailwind-merge`
  - _Reasoning:_ For conditional class rendering (useful for state-dependent styling like checked items).

## 3. Architecture & State Management

### 3.1 Global State

The app will use a simple logical state machine to track the user's progress through the story.

**State Variables:**

1.  `currentPhase`: Enum/String
    - `'intro'`: Welcome screen.
    - `'wellness'`: Hotel teaser & Packing list.
    - `'reveal'`: The "One More Thing" & Ski transition.
    - `'timeline'`: The detailed itinerary.
    - `'success'`: Final celebration/approval.
2.  `packingListState`: Object/Map
    - Tracks which items are checked off. The "Reveal" button is disabled/hidden until all items are checked.

### 3.2 Component Structure

```text
src/
├── assets/              # Static images (placeholders)
├── components/
│   ├── ui/              # Reusable basic UI
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PhotoPlaceholder.tsx  # Generic placeholder component
│   │   └── IconWrapper.tsx
│   ├── features/        # Complex feature-specific components
│   │   ├── IntroSection.tsx
│   │   ├── WellnessTeaser.tsx    # Includes PackingList
│   │   ├── SkiReveal.tsx         # The big animation
│   │   ├── Timeline.tsx          # Vertical timeline view
│   │   └── FinalApproval.tsx
│   └── Layout.tsx       # Main wrapper (backgrounds, centering)
├── data/
│   ├── timeline.ts      # The hardcoded itinerary data
│   └── packingList.ts   # The packing items configuration
├── App.tsx              # Main state orchestrator
└── main.tsx             # Entry point
```

## 4. Data Structures

### 4.1 Timeline Data (`timeline.ts`)

Array of objects to render the vertical timeline.

```typescript
interface TimelineEvent {
  day: string; // "Donnerstag, 8.1."
  title: string; // "Die Anreise"
  description: string; // Details about luggage, etc.
  icon: string; // Icon name (e.g., 'Car', 'Moon', 'Ski')
  highlight?: boolean; // For special styling (e.g., The Reveal)
}
```

### 4.2 Packing List Data (`packingList.ts`)

```typescript
interface PackingItem {
  id: string;
  label: string; // e.g., "Badesachen (Bikini)"
  icon: string;
}
```

## 5. Visual Design & Theming

### 5.1 Theme Modes

The app will visually transition between two themes using Tailwind classes and Framer Motion background interpolation.

- **Theme A: "Cozy Wellness" (Phases: Intro, Wellness)**

  - _Background:_ Warm off-white / Soft Beige / Light Blue-Grey.
  - _Accents:_ Gold, Soft Teal.
  - _Font:_ Serif headers (elegant), Sans-serif body.
  - _Vibe:_ Slow, relaxing, snowflakes.

- **Theme B: "Alpine Action" (Phases: Reveal, Timeline)**
  - _Background:_ Crisp White / Ice Blue.
  - _Accents:_ Energetic Blue, Signal Red (for the "Ski" reveal).
  - _Font:_ Bold, clean Sans-serif.
  - _Vibe:_ Fast, energetic, excitement.

### 5.2 Animations (Framer Motion)

- **StaggerChildren:** Used for the timeline and packing list items to appear one by one.
- **AnimatePresence:** Used to smoothly exit the "Wellness" section and enter the "Ski" section.
- **Confetti:** A lightweight canvas confetti effect triggering on the final "Approve" button.

## 6. Implementation Plan

1.  **Scaffolding:** Initialize Vite + React + Tailwind.
2.  **Base Components:** Create `PhotoPlaceholder` and `Layout`.
3.  **Phase 1 (Wellness):** Implement the Intro and Packing List logic.
4.  **Phase 2 (Reveal):** Build the "One More Thing" transition and Ski reveal screen.
5.  **Phase 3 (Timeline):** Implement the responsive vertical timeline using the corrected schedule.
6.  **Refinement:** Add animations, smooth transitions, and ensure the tone is German and fun.
7.  **Final Review:** Check against the User Guide.

## 7. Placeholder Strategy

Since real photos are not yet available, `PhotoPlaceholder` will be a styled `div` with a border, a gray background, an icon (camera), and a text label (e.g., "Süßes Foto von uns"). This makes it easy for the user to replace them with `img` tags later.
