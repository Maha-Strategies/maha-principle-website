import './globals.css';

export const metadata = {
  metadataBase: new URL('https://themahaprinciple.com'),
  title: {
    default: 'The Maha Principle — The Architecture of Human Flourishing',
    template: '%s | The Maha Principle',
  },
  description:
    'A field manual for rebuilding biological, cognitive, and relational foundations in an extractive world.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM-readable summary" />
      </head>
      <body>{children}</body>
    </html>
  );
}
