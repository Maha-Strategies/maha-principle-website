import { readFile } from 'node:fs/promises';
import path from 'node:path';

function extract(raw, expression, label) {
  const match = raw.match(expression);

  if (!match) {
    throw new Error(`Unable to find ${label} in legacy template.`);
  }

  return match[1].trim();
}

function extractAll(raw, expression) {
  return [...raw.matchAll(expression)].map((match) => match[1].trim());
}

export async function LegacyPage({ source }) {
  const raw = await readFile(path.join(process.cwd(), 'content', source), 'utf8');
  const body = extract(raw, /<body[^>]*>([\s\S]*?)<\/body>/i, 'body content');
  const styles = extractAll(raw, /<style[^>]*>([\s\S]*?)<\/style>/gi);
  const structuredData = extractAll(
    raw,
    /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );

  return (
    <>
      {styles.map((style, index) => (
        <style key={`style-${index}`} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      {structuredData.map((json, index) => (
        <script
          key={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
      <div className="legacy-page" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
