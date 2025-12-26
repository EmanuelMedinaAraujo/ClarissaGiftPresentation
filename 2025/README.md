# Clarissa Gift Presentation 2025

An interactive, phase-based web application designed to reveal a surprise weekend trip gift.

## Purpose
This project provides a guided narrative experience to reveal a gift itinerary for a weekend in Garmisch-Partenkirchen (January 8-11, 2025). The flow covers packing, hotel reveal, skiing reveal, and a detailed timeline of events (including the LMU Ball and a Philharmonie concert).

## Tech Stack
- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Persistence:** LocalStorage (to save progress)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Usage
Once the application is running, simply follow the on-screen instructions. The experience is designed to be linear:
1. Progress through the intro and "trip teaser".
2. Interact with the packing list.
3. Discover the hotel and the "one more thing" (Skiing).
4. Review the final timeline and "approve" the plan.

Progress is saved automatically. To restart the experience after completion, use the "Restart" button on the final summary screen.