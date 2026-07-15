import { LegacyPage } from '../../components/LegacyPage';

export const dynamic = 'force-static';

export const metadata = {
  title: { absolute: 'The Maha Framework — A Research Program | Mayone Maha Rajan' },
  description:
    'The Maha Framework by Mayone Maha Rajan: an evolving research program on complex adaptive systems, with The Maha Principle, the Maha OS app, and open research.',
  alternates: { canonical: '/framework' },
  openGraph: {
    type: 'website',
    url: '/framework',
    siteName: 'The Maha Principle',
    title: 'The Maha Framework — A Research Program',
    description:
      'One question pursued across scales: what governs the organization of complex adaptive systems?',
    images: [{ url: '/cover.jpg', width: 1600, height: 2560, alt: 'The Maha Principle book cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Maha Framework — A Research Program',
    description: 'Books, research, and tools investigating complex adaptive systems.',
    images: ['/cover.jpg'],
  },
};

export default function FrameworkPage() {
  return <LegacyPage source="framework.html" />;
}
