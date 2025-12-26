export interface PackingItem {
  id: string;
  label: string;
  icon: string;
}

export const packingList: PackingItem[] = [
  {
    id: 'sports',
    label: 'Sportsachen (für das Gym)',
    icon: 'Dumbbell'
  },
  {
    id: 'swim',
    label: 'Badesachen (Bikini & Co.)',
    icon: 'Waves'
  },
  {
    id: 'warm',
    label: 'Warme Kleidung (für Spaziergänge)',
    icon: 'Snowflake'
  },
  {
    id: 'dinner',
    label: 'Schickes Outfit (Abendessen)',
    icon: 'Wine'
  }
];
