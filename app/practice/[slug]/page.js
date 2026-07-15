import Link from 'next/link';
import { notFound } from 'next/navigation';
import { OutboundLink } from '../../../components/OutboundLink';
import { BOOK_PRACTICES, BOOK_PRACTICE_SLUGS } from '../../../lib/bookPractices';
import styles from '../practice.module.css';

const AMAZON_URL = 'https://www.amazon.com/dp/B0H62WLMT5';
const MAHA_OS_URL = 'https://www.maha-os.com/?utm_source=themahaprinciple.com&utm_medium=referral&utm_campaign=book_practice_to_app';

export const dynamicParams = false;

export function generateStaticParams() {
  return BOOK_PRACTICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const practice = BOOK_PRACTICES[slug];
  if (!practice) return {};

  return {
    title: `${practice.title} — A Practice from The Maha Principle`,
    description: practice.description,
    alternates: { canonical: `/practice/${slug}` },
    openGraph: {
      type: 'article',
      url: `/practice/${slug}`,
      title: `${practice.title} — The Maha Principle`,
      description: practice.description,
      images: [{ url: '/cover.jpg', width: 1600, height: 2560, alt: 'The Maha Principle book cover' }],
    },
  };
}

export default async function PracticePage({ params }) {
  const { slug } = await params;
  const practice = BOOK_PRACTICES[slug];
  if (!practice) notFound();
  const isStart = slug === 'start';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.wrap}><Link href="/" className={styles.brand}>The Maha Principle</Link></div>
      </header>
      <main className={`${styles.main} ${styles.wrap}`}>
        <p className={styles.eyebrow}>{practice.eyebrow}</p>
        <h1 className={styles.title}>{practice.title}</h1>
        <p className={styles.lede}>{practice.description}</p>
        {practice.chapter !== 'Start here' && <p className={styles.chapter}>{practice.chapter}</p>}
        <hr className={styles.rule} />
        <div className={styles.grid}>
          <section>
            <h2 className={styles.heading}>{isStart ? 'A gentle place to begin' : 'Try it this week'}</h2>
            <p className={styles.body}>{practice.premise}</p>
            {isStart ? (
              <div className={styles.practiceList}>
                {BOOK_PRACTICE_SLUGS.filter((item) => item !== 'start').map((item) => (
                  <Link key={item} href={`/practice/${item}`} className={styles.practiceLink}>
                    {BOOK_PRACTICES[item].title}<span>{BOOK_PRACTICES[item].chapter}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <ol className={styles.steps}>{practice.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            )}
          </section>
          <aside className={styles.card}>
            <h2>{isStart ? 'Read the full framework' : 'Read the wider chapter'}</h2>
            <p>The book provides the argument, context, and larger set of protocols. Maha OS is the optional daily companion.</p>
            <OutboundLink href={AMAZON_URL} eventName="book_purchase_outbound_click" className={styles.cta}>Get the book on Amazon</OutboundLink>
            <a href={MAHA_OS_URL} className={styles.secondary}>Open Maha OS</a>
            <p className={styles.fine}>Educational material only; not medical, nutritional, or mental-health advice.</p>
          </aside>
        </div>
      </main>
      <footer className={styles.footer}><div className={styles.wrap}>The Maha Principle · © 2026 Mayone Maha Rajan</div></footer>
    </div>
  );
}
