export const BOOK_PRACTICES = {
  start: {
    title: 'Start a Seven-Day Baseline',
    eyebrow: 'A companion path for The Maha Principle',
    description: 'A calm, seven-day introduction to the book’s ideas: attention, food environment, light and sleep, movement, relationships, and a weekly review.',
    chapter: 'Start here',
    premise: 'The book argues that durable change is cumulative rather than cinematic. This path is a small way to test that idea in ordinary life.',
    steps: [
      'Choose one small practice that feels workable today.',
      'Keep a private note about what changes, without trying to optimize everything.',
      'At the end of the week, keep the practices that helped and let the rest go.',
    ],
  },
  attention: {
    title: 'Protect the First Hour',
    eyebrow: 'Attention practice',
    description: 'A small practice from the book’s Attention Audit: protect the first part of the day from automatic feed consumption.',
    chapter: 'Chapter 2 · Protocol 1: The Attention Audit · pp. 63–67',
    premise: 'The book treats attention as a finite and recoverable resource. This is an invitation to create one intentional window before external inputs begin.',
    steps: [
      'Put the phone outside arm’s reach before sleep.',
      'For the first hour after waking, choose one analogue activity: a walk, paper reading, journaling, or a single task.',
      'Notice what changes when the first thoughts of the day are yours.',
    ],
  },
  'food-environment': {
    title: 'Make One Food Default Easier',
    eyebrow: 'Food environment practice',
    description: 'A small, non-perfectionist application of the Biological Audit: change one default in the food environment rather than relying on willpower.',
    chapter: 'Chapter 1 · Protocol 0: The Biological Audit · pp. 42–47',
    premise: 'The book frames the Biological Audit as orientation, not judgment. Begin by making one nourishing, minimally processed option easier to choose.',
    steps: [
      'Pick one meal or snack you repeat often.',
      'Make its simpler version the easiest option to reach this week.',
      'Pay attention to whether the environment, rather than effort alone, makes the choice more workable.',
    ],
  },
  'light-sleep': {
    title: 'Anchor the Day With Light',
    eyebrow: 'Light and sleep practice',
    description: 'A gentle circadian practice from the book’s daily architecture: morning outdoor light and a calmer transition toward sleep.',
    chapter: 'Chapter 9 · The Body Domain · pp. 175–178',
    premise: 'The book describes light as biological information. This is not a sleep prescription; it is a practical experiment in giving your day a clearer beginning and end.',
    steps: [
      'Spend a few minutes outside in natural morning light, as your circumstances allow.',
      'Choose a modest screen-free point before bed that feels sustainable.',
      'After a few days, note whether the transitions into work and rest feel any different.',
    ],
  },
  movement: {
    title: 'Take a Short Movement Break',
    eyebrow: 'Movement practice',
    description: 'A return to the body from the book’s daily architecture: choose a brief movement practice without turning it into a score.',
    chapter: 'Chapter 9 · Forging the Maha Individual · pp. 172–176',
    premise: 'The book’s 85% Rule favors practices that can be sustained without white-knuckling. A short walk or movement break is enough to begin.',
    steps: [
      'Choose ten minutes of walking, stretching, or another movement you can do safely.',
      'Leave the tracking and performance comparison aside for this block.',
      'Notice whether a brief return to the body changes the rest of your afternoon.',
    ],
  },
  relationships: {
    title: 'Make One Real Connection',
    eyebrow: 'Relationship practice',
    description: 'A small application of the Community Audit: give one relationship your undivided, unhurried attention.',
    chapter: 'Chapter 3 · Protocol 2: The Community Audit · pp. 86–90',
    premise: 'The book distinguishes real reciprocity from passive consumption. This practice makes room for one conversation, walk, or meal with someone who matters to you.',
    steps: [
      'Choose one person you would genuinely like to be more present with.',
      'Call, walk with, or share a meal with them—without making it a performance.',
      'Keep the phone out of the conversation when you reasonably can.',
    ],
  },
  'weekly-review': {
    title: 'Clear One Piece of Noise',
    eyebrow: 'Weekly review practice',
    description: 'A light version of the book’s Weekly Complexity Audit: examine one information source or commitment before it becomes automatic.',
    chapter: 'Chapter 9 · Weekly Complexity Audit · pp. 179–181',
    premise: 'The book suggests reviewing information and commitments for their real utility. This is a short review, not an exercise in eliminating everything.',
    steps: [
      'Choose one information source or recurring commitment from the past week.',
      'Ask whether it added real value or merely accumulated by default.',
      'Keep it, pause it, or give it a clearer boundary for the coming week.',
    ],
  },
};

export const BOOK_PRACTICE_SLUGS = Object.keys(BOOK_PRACTICES);
