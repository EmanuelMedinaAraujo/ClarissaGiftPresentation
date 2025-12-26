export interface TimelineEvent {
  day: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export const timelineData: TimelineEvent[] = [
  {
    day: "Donnerstag, 8.1.",
    title: "Die Vorbereitung",
    description: "Abends kommst du zu mir. Bring bitte alles mit (Garmisch + Ballkleid + Konzert-Outfit).",
    icon: "Packing"
  },
  {
    day: "Freitag, 9.1.",
    title: "Jubiläum & Piste",
    description: "Frühe Abfahrt, Skier leihen und ab auf die Piste! Abends Check-in im Dorint Hotel & Wellness.",
    icon: "Ski",
    highlight: true
  },
  {
    day: "Samstag, 10.1.",
    title: "Schnee & Tanz",
    description: "Vormittags Skifahren, 14 Uhr Rückfahrt. Abends: LMU Ball (19:30 Uhr).",
    icon: "Dance",
    highlight: true
  },
  {
    day: "Sonntag, 11.1.",
    title: "Kultur & Ausklang",
    description: "Lernen/Entspannen. Nachmittags zu deinen Eltern, Auto zurück. Abends: Philharmonie.",
    icon: "Music"
  }
];
