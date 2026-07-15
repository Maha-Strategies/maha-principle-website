import { LegacyPage } from '../components/LegacyPage';

export const dynamic = 'force-static';

export const metadata = {
  title: { absolute: 'The Maha Principle — The Architecture of Human Flourishing | Mayone Maha Rajan' },
  description:
    'A field manual for rebuilding your biological, cognitive, and relational foundations in an extractive world. The Maha Principle by Mayone Maha Rajan — available now on Amazon Kindle.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'book',
    url: '/',
    siteName: 'The Maha Principle',
    title: 'The Maha Principle — The Architecture of Human Flourishing',
    description:
      'The crises of modern life are not separate. They are one machine. A field manual for rebuilding biological, cognitive, and relational foundations.',
    images: [{ url: '/cover.jpg', width: 1600, height: 2560, alt: 'The Maha Principle book cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Maha Principle — The Architecture of Human Flourishing',
    description: 'The crises of modern life are not separate. They are one machine.',
    images: ['/cover.jpg'],
  },
  other: {
    'book:author': 'Mayone Maha Rajan',
    'book:release_date': '2026-07-10',
  },
};

export default function HomePage() {
  return <LegacyPage source="home.html" />;
}
