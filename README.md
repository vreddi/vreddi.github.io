# vreddi.github.io

Personal website built with React + TypeScript + Vite, deployed to GitHub Pages.

## 🚀 Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

**Important**: Make sure to configure GitHub Pages in your repository settings:
1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy on every push to `main`

Visit: [vishrutreddi.com](https://vishrutreddi.com) or [vreddi.github.io](https://vreddi.github.io)

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **pnpm** - Package manager

## 📁 Project Structure

```
vreddi.github.io/
├── src/              # Source code
├── public/           # Static assets
├── dist/             # Production build (generated)
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages deployment
├── index.html        # Entry point
├── vite.config.ts    # Vite configuration
└── package.json      # Dependencies
```

## 🔧 Configuration

- **Base URL**: Set to `/` in `vite.config.ts` for user/organization GitHub Pages
- **Custom Domain**: Configured via `CNAME` file (vishrutreddi.com)
- **Build Output**: `dist/` directory (deployed to GitHub Pages)
