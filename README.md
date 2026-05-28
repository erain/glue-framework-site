# glue-framework-site

Marketing homepage for [`glue`](https://github.com/erain/glue), a Go
agent framework.

Astro + Tailwind, statically generated, deployed via Vercel. Mirrors the
pattern established in
[`glue-review-site`](https://github.com/erain/glue-review-site).

## Dev

Requires Node 22+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist/
npm run preview  # serve ./dist/ locally
```

## Layout

```
src/
  layouts/Base.astro       page shell (head, header, footer)
  components/Section.astro numbered-section block, like glue-review-site
  pages/index.astro        the single page — hero, 7 numbered sections, FAQ
  styles/global.css        Tailwind v4 + theme tokens (purple accent)
public/favicon.svg         purple action-branded mark (the agent loop arrow)
```

The site is **one page on purpose** — the
[building-agents.md guide](https://github.com/erain/glue/blob/main/docs/building-agents.md)
in the main repo is the primary CTA. The numbered section rhythm
(01 / 02 / …) is the narrative spine.

## Content edits

All copy lives in [`src/pages/index.astro`](src/pages/index.astro)
above the markup. Code snippets and the capabilities grid are hoisted
into JS template strings / arrays at the top of the frontmatter so the
markup stays scannable.

## Deploy

Vercel auto-detects Astro. To wire it up the first time:

1. Vercel dashboard → Add New → Project → Import `erain/glue-framework-site`.
2. Framework preset: Astro (auto-detected).
3. Root directory: `./`.
4. Build command: `npm run build`. Output directory: `dist/`.
5. Deploy.

Every push to `main` auto-deploys. PRs get preview URLs.

Set `ASTRO_SITE` at deploy time if a custom domain lands (e.g.
`ASTRO_SITE=https://glue.dev`). The default `astro.config.mjs` site is
`https://glue-framework-site.vercel.app`.

## OG image

`public/og.png` is the 1200×630 social-share image referenced by
`Base.astro`. Regenerate from [`scripts/og.html`](scripts/og.html):
open it in a browser at 1200×630 viewport, screenshot, save to
`public/og.png`.
