export interface PackingItem {
  id: string;
  label: string;
  icon: string;
  anecdote: string;
}

export const packingList: PackingItem[] = [
  {
    id: 'sports',
    label: 'Sportsachen (für das Gym)',
    icon: 'Dumbbell',
    anecdote: "Du willst ja genauso stark werden wie ich, deswegen werden wir auch Sport machen! 💪"
  },
  {
    id: 'warm',
    label: 'Warme Kleidung (für Spaziergänge)',
    icon: 'Snowflake',
    anecdote: "Da du es immer kuschelig warm brauchst, pack bitte etwas Warmes ein. 🧣"
  },
  {
    id: 'swim',
    label: 'Badesachen (Bikini & Co.)',
    icon: 'Waves',
    anecdote: "Da dir die Therme Erding so gut gefallen hat (und du Sauna liebst), brauchen wir mehr davon! 👙"
  },
  {
    id: 'dinner',
    label: 'Schickes & Cooles Outfit',
    icon: 'Wine',
    anecdote: "Weil wir unser Jubiläum feiern, brauchen wir natürlich coole und frische Outfits! 👗"
  }
];