export interface EventDetails {
  date: string;
  dayOfWeek: string;
  time: string;
  venueName: string;
  venueAddress: string;
  features: string[]; // e.g., ["お菓子・ドリンク付き！"]
}

export interface HeroData {
  catchphraseLines: string[];
  mainTitleSerifLetterColors: { letter: string; colorClass: string }[];
  cursiveTitle: string;
  subtitleJa: string;
  circularMessage: {
    prefix: string;
    highlights: { text: string; colorClass: string; spaceAfter?: string }[];
    postfix: string;
  };
  heroImage: string;
  event: EventDetails;
}
