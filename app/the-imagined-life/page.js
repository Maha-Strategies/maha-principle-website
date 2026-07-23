import Image from 'next/image';
import styles from './page.module.css';

const privacyUrl = 'https://www.mahastrategies.com/apps/the-engine/privacy';
const supportEmail = 'mayone@mahastrategies.com';

export const metadata = {
  title: 'The Imagined Life — Read, Practice, Archive',
  description:
    'The Engine is the complete companion to The Imagined Life: read the book, practice privately, and turn imagination into deliberate action.',
  alternates: { canonical: '/the-imagined-life' },
  openGraph: {
    type: 'website',
    url: '/the-imagined-life',
    siteName: 'The Maha Principle',
    title: 'The Engine — Read, Practice, Archive',
    description: 'Read the book. Practice privately. Turn imagination into deliberate action.',
    images: [{ url: '/the-engine-og.png', width: 1731, height: 909, alt: 'The Engine — Read, Practice, Archive' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Engine — Read, Practice, Archive',
    description: 'Read the book. Practice privately. Turn imagination into deliberate action.',
    images: ['/the-engine-og.png'],
  },
};

export default function ImaginedLifePage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="The Imagined Life navigation">
        <a className={styles.wordmark} href="/">THE MAHA PRINCIPLE</a>
        <a className={styles.support} href={`mailto:${supportEmail}`}>Support</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>THE IMAGINED LIFE · COMPLETE EDITION</p>
          <h1>Read the book.<br />Then use its small instrument.</h1>
          <p className={styles.lede}>The Engine brings the complete text of <em>The Imagined Life: Living Inside a Dreaming Brain</em> together with a private practice for attention, reflection, and action.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#access">Get release updates</a>
            <a className={styles.secondary} href="#practice">See the practice ↓</a>
          </div>
          <p className={styles.availability}>App Store and Google Play release in preparation.</p>
        </div>
        <div className={styles.art} aria-hidden="true">
          <Image src="/the-engine-artwork.png" alt="" width={1024} height={1536} priority />
        </div>
      </section>

      <p className={styles.statement}>Imagination is not magic. It changes the dreamer, and the dreamer changes what happens next.</p>

      <section className={styles.practice} id="practice">
        <div className={styles.intro}><p className={styles.eyebrow}>A PRIVATE PRACTICE</p><h2>Three moves. No mystical shortcuts.</h2><p>The practice is deliberately modest: hold something near attention, notice what remains, and choose an ordinary next action.</p></div>
        <div className={styles.steps}>
          <article><span>01</span><h3>Seed</h3><p>Choose a question, image, conversation, fear, or unfinished problem to carry near attention.</p></article>
          <article><span>02</span><h3>Trace</h3><p>Record fragments from the night before the day explains them away. A feeling counts. Nothing counts, too.</p></article>
          <article><span>03</span><h3>Action</h3><p>Ask what one concrete action makes the imagined thing slightly more actual, then do the work after.</p></article>
        </div>
      </section>

      <section className={styles.private}><div><p className={styles.eyebrow}>DESIGNED TO STAY PRIVATE</p><h2>Your archive belongs to you.</h2></div><div><p>There are no ads, no social feed, and no dream-decoding claims. Entries stay on your device. Export or delete them only when you choose.</p><a href={privacyUrl}>Read the privacy policy ↗</a></div></section>

      <section className={styles.access} id="access"><p className={styles.eyebrow}>THE ENGINE</p><h2>A book about the dreaming brain.<br />A practice for the waking life.</h2><p>For release information, book and app questions, or support, write to us.</p><a className={styles.primary} href={`mailto:${supportEmail}?subject=The%20Engine%20release%20updates`}>Contact Mayone</a></section>

      <footer className={styles.footer}><span>© 2026 Mayone Maha Rajan</span><div><a href={privacyUrl}>Privacy</a><a href={`mailto:${supportEmail}`}>Support</a></div></footer>
    </main>
  );
}
