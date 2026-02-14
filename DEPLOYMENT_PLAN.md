# Deployment Plan - G&T Scales Site

## Goal

Deploy `gandscales_site` so:
- every push to `main` updates production automatically
- deployments are safe and reversible
- SEO is optimized for Zimbabwe-focused search traffic

## 1) Deployment Strategy

Use **GitHub + GitHub Actions + GitHub Pages** (already compatible with this static Next.js export).

- Code source: GitHub repository
- Build: `npm ci && npm run build`
- Output: `out/`
- Deploy trigger: push to `main`
- Optional: PR previews in a secondary hosting platform (Cloudflare Pages/Vercel) later

## 2) Repository + Branch Model

- `main`: production branch (auto-deploy)
- feature branches: all new work
- PR required before merge to `main`
- protect `main` with:
  - required pull request
  - required status checks (build/lint)

## 3) CI/CD Pipeline (GitHub Actions)

### Current state

There are two similar workflows in `.github/workflows/`:
- `deploy.yml`
- `nextjs.yml`

Use only **one** production deployment workflow to avoid duplicate deploys/race conditions.

### Recommended workflow behavior

On every push to `main`:
1. Checkout code
2. Setup Node 20
3. Install dependencies (`npm ci`)
4. Run lint and build
5. Upload `out/`
6. Deploy to GitHub Pages

## 4) Environment Variables

Set repository variables/secrets for production:

- `NEXT_PUBLIC_SITE_URL`
  - production custom domain example: `https://gandtscales.com`
- `NEXT_PUBLIC_BASE_PATH`
  - custom domain root: leave empty
  - GitHub project subpath deployment: `/gandscales-site`

These values control metadata, sitemap, robots, and route behavior.

## 5) DNS + Domain Setup

If using custom domain:
1. Add domain in GitHub Pages settings
2. Create DNS records at domain provider:
   - `A`/`AAAA` or `CNAME` to GitHub Pages (as documented by GitHub)
3. Enable HTTPS in GitHub Pages
4. Verify `https://gandtscales.com` and `https://www.gandtscales.com` canonical behavior

## 6) Release Workflow

For each release:
1. Merge PR to `main`
2. Confirm GitHub Action succeeds
3. Validate live site:
   - homepage loads without 404
   - key pages (`/shop`, `/services`, `/contact`) render
   - sitemap and robots are reachable
4. Run quick SEO checks (see section 7)

## 7) SEO Production Checklist (Zimbabwe-first)

- Technical
  - `robots.txt` accessible
  - `sitemap.xml` accessible and includes product/category URLs
  - metadata title/description correct and keyword-relevant for Zimbabwe
  - Open Graph image renders correctly
  - canonical domain is consistent (single preferred host)
- Local relevance
  - Google Business Profile linked and fully optimized
  - NAP consistency (name/address/phone) across site and directories
  - pages explicitly mention Zimbabwe cities/industries served
- Search Console
  - submit sitemap
  - monitor indexing and coverage
  - track queries: "scales in zimbabwe", "weighbridge zimbabwe", etc.

## 8) Monitoring and Rollback

- Keep deployment history in Actions
- If a bad release is deployed:
  1. Revert the merge commit in GitHub
  2. Push revert to `main`
  3. Pipeline redeploys previous stable state automatically

## 9) 30-Day Follow-up Plan

- Week 1: baseline indexing + Search Console setup
- Week 2: publish 2-3 SEO landing pages (industry/city-specific)
- Week 3: improve internal linking from homepage to high-intent pages
- Week 4: review query data and update titles/descriptions from real terms

---

Owner suggestion:
- Technical owner: manages CI/CD and uptime
- Marketing/SEO owner: manages keywords, content updates, and ranking reports
