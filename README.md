# G&T Scales - Static Marketing Site

A static, lightweight version of the G&T Scale Services website built with Next.js static export. This site displays the company's products, services, and contact information without requiring a backend server.

## Directory Structure

```
minister/
├── gandtscales/          # Main web app (with dashboard, API, backend)
└── gandscales_site/      # Static marketing site (this project)
```

## Features

- 🌐 **Fully static** - No backend required, can be hosted on any static hosting platform
- 📱 **Responsive design** - Mobile-first, works on all screen sizes
- 🔍 **Product catalog** - Browse products by category with client-side filtering
- 📞 **Contact CTAs** - WhatsApp, phone, and email contact buttons throughout
- 🎨 **Consistent branding** - Same premium dark theme as the main webapp

## Routes

### Public pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, products, testimonials |
| `/about` | About the company |
| `/services` | Service offerings |
| `/contact` | Contact information and map |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/case-studies` | Case studies |

### Product catalog
| Route | Description |
|-------|-------------|
| `/shop` | Product listing with client-side filters |
| `/shop/categories` | Browse by category |
| `/shop/category/[slug]` | Category landing pages (statically generated) |
| `/product/[slug]` | Product detail pages (statically generated) |

### Support (static info, no forms)
| Route | Description |
|-------|-------------|
| `/quote` | How to request a quote + contact CTAs |
| `/book-service` | How to book calibration/repair/maintenance |
| `/report-fault` | How to report equipment issues |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, DM Sans

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd gandscales_site
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Export

```bash
npm run build
```

The static files will be generated in the `out/` directory.

---

## Deployment to GitHub Pages

### Option 1: Automated (GitHub Actions) - Recommended

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

#### Setup Steps:

1. **Create a new GitHub repository** for the static site (e.g., `gandscales-site`)

2. **Initialize git and push**:
   ```bash
   cd gandscales_site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gandscales-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under "Build and deployment", select **Source**: `GitHub Actions`
   - The workflow will automatically trigger on push

4. **Wait for deployment** (~2-3 minutes):
   - Check the **Actions** tab for build progress
   - Once complete, your site will be live at:
     - `https://YOUR_USERNAME.github.io/gandscales-site/`

5. **(Optional) Custom domain**:
   - In repository **Settings** → **Pages**, add your custom domain
   - Create a `CNAME` record pointing to `YOUR_USERNAME.github.io`
   - Add a file `public/CNAME` with your domain name

### Option 2: Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The static files are in the 'out' directory
# Upload the contents of 'out/' to your hosting provider
```

### GitHub Pages Configuration Notes

If deploying to a subdirectory (e.g., `github.io/gandscales-site/`), you may need to set `basePath` in `next.config.mjs`:

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/gandscales-site',  // Add this for subdirectory deployment
  images: {
    unoptimized: true,
  },
}
```

---

## Other Deployment Options

### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Vercel

1. Import the project
2. Vercel will auto-detect Next.js static export

---

## Product Data

Product catalog data is stored in `src/content/products.json`. To update products:

1. Edit `src/content/products.json`
2. Ensure corresponding images exist in `public/images/products/`
3. Rebuild the site

### Adding New Products

1. Add product entry to `src/content/products.json`:
   ```json
   {
     "id": "new-product",
     "name": "New Product Name",
     "slug": "new-product",
     "category": "category-slug",
     "description": "Product description",
     "image": "/images/products/new-product.webp",
     "featured": false,
     "applications": ["Industry1", "Industry2"]
   }
   ```
2. Add product image to `public/images/products/`
3. If adding a new category, add it to the `categories` array

---

## Customization

### Updating Contact Information

Edit `src/lib/utils.ts`:
- `COMPANY_PHONE`
- `COMPANY_EMAIL`
- `COMPANY_ADDRESS`
- `WHATSAPP_NUMBER`

### Changing Branding

- **Colors**: `tailwind.config.ts` → `theme.extend.colors.brand`
- **Fonts**: `src/app/layout.tsx` → font imports
- **Logo**: `src/components/layout/navbar.tsx` and `footer.tsx`

---

## File Structure

```
gandscales_site/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── public/
│   ├── images/
│   │   ├── products/       # Product images
│   │   └── marketing/      # Marketing images
│   └── patterns/           # Background patterns
├── src/
│   ├── app/                # Next.js pages
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Page sections
│   │   ├── ui/             # Base UI components
│   │   └── providers/      # Theme provider
│   ├── content/            # Static data (products.json)
│   ├── hooks/              # React hooks
│   └── lib/                # Utilities and catalog helpers
├── next.config.mjs         # Static export config
├── tailwind.config.ts      # Tailwind theme
└── package.json
```

---

## Notes

- This is a **static** site - no server required
- All forms have been replaced with contact CTAs (WhatsApp, phone, email)
- Product pages are pre-generated at build time
- The `/shop` page uses client-side filtering for query params

## License

© Keith Oganesson. All rights reserved.
