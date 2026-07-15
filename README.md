# The Maha Principle website

This is a Next.js 16 static-site migration. The deployed routes remain:

- `/` — The Maha Principle book site
- `/framework` — The Maha Framework research-program page

The original page markup and page-specific CSS live in `content/` and are
pre-rendered by Next.js so that the existing visual output and URLs stay intact.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` before deployment to verify the static production build.
