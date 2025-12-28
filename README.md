# Hari Krishna TB - Data Science Portfolio

A professional, minimal, and recruiter-friendly **Data Science Portfolio** built with React and Vite.

**🌐 Live Portfolio**: https://harikrishnatb8544-bot.github.io/portfolio/

---

## 📋 Overview

This is a fully responsive, high-performance single-page application designed to showcase data science skills, projects, and experience. Built with modern web technologies and deployed automatically to GitHub Pages.

**Key Highlights:**
- ✅ Professional ivory & black theme
- ✅ Smooth animations & micro-interactions
- ✅ Zero external CSS frameworks
- ✅ Mobile-first responsive design
- ✅ Auto-deployed on every push to main

---

## 🎯 Features

### Design & UX
- **Clean, Modern Aesthetic**: Ivory background (#faf8f3) with black text and blue accents (#4a90e2)
- **Responsive Grid Layout**: Works seamlessly on 480px, 768px, 1200px+ breakpoints
- **Smooth Animations**:
  - Falling confetti symbols (20 emojis) in hero section
  - Wave background animations (3-layer rotating)
  - Glow pulse effect on hero
  - Sparkle animations on skills and experience
  - Gradient transitions on experience cards
- **Sticky Navigation**: Quick access to all sections
- **Smooth Scroll Behavior**: Elegant navigation between sections

### Components
- **Navbar**: Sticky header with active link indicators
- **Hero**: Engaging introduction with call-to-action buttons
- **Skills**: Grid of 8 data science competencies with sparkle effects
- **Projects**: 3 project cards with descriptions and business impact
- **Experience**: Gradient-animated experience cards
- **Contact**: Direct links to email, LinkedIn, phone, and location

### Technology
- React 18+ (Functional Components, Hooks)
- Vite 7.3.0 (Lightning-fast build tool)
- Plain CSS only (994 lines, fully optimized)
- System fonts (no web font loading)
- No external dependencies for UI or styling

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with active link tracking
│   │   ├── Hero.jsx            # Hero section with confetti animations
│   │   ├── Skills.jsx          # 8 skills grid with sparkle effects
│   │   ├── Projects.jsx        # 3 project showcase cards
│   │   ├── Experience.jsx      # Work experience with gradients
│   │   └── Contact.jsx         # Contact information & links
│   ├── App.jsx                 # Main app wrapper
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Complete styling (994 lines)
├── public/
│   └── (static assets)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages auto-deploy
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 20.19+ or 22.12+
- **npm**: Comes with Node.js
- **Git**: For version control

### Installation

**1. Clone or navigate to the project:**
```bash
cd c:\Users\Lenovo\Desktop\react
```

**2. Install dependencies:**
```bash
npm install
```

### Development

**Start local development server:**
```bash
npm run dev
```
- Runs on `http://localhost:5174`
- Hot reload enabled
- Open in browser and see changes in real-time

**Preview production build locally:**
```bash
npm run preview
```

### Build for Production

**Build optimized bundle:**
```bash
npm run build
```
- Creates `dist/` folder with optimized assets
- CSS: 15.98 KB (3.41 KB gzipped)
- JavaScript: 199.77 KB (62.53 KB gzipped)

---

## 🎨 Customization Guide

### Update Personal Information

**1. Edit Contact Information** (`src/components/Contact.jsx`):
```jsx
<a href="mailto:your.email@example.com">Email</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<div>+91 YOUR_PHONE_NUMBER</div>
```

**2. Update Skills** (`src/components/Skills.jsx`):
```jsx
const skills = [
  'Your Skill 1',
  'Your Skill 2',
  // Add/remove skills here
];
```

**3. Add/Edit Projects** (`src/components/Projects.jsx`):
```jsx
{
  title: 'Project Name',
  description: 'What it does',
  impact: 'Business value/results'
}
```

**4. Update Experience** (`src/components/Experience.jsx`):
```jsx
{
  title: 'Your Title',
  company: 'Company Name',
  description: 'What you did'
}
```

### Modify Styling

**Color Scheme** (`src/index.css`):
```css
--primary: #faf8f3;      /* Ivory background */
--text-primary: #000000; /* Black text */
--text-accent: #4a90e2;  /* Blue accent */
```

**Typography**:
- All fonts use system fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Edit font sizes in CSS variables

**Animation Timing**:
- Hero confetti: 30-second lifecycle, 8-12s fall duration
- Confetti blur: 0.8px
- Sparkle animations: 2-4 second cycles

---

## 📊 Component Details

### Hero Section
- Full-width with glow pulse effect
- 20 falling emoji symbols (📊 📈 🔬 💻 📉 ⚙️ 🎯 🔍 📐 🧮 💡 ⚡)
- Two call-to-action buttons: "View My Work" and "Get in Touch"
- Confetti regenerates every 30 seconds

### Skills Grid
- Responsive 2-4 column grid
- 8 core data science competencies
- Sparkle animations on hover/load (scale + opacity)
- No clickable links (display-only)

### Projects Section
- 3 project cards
- Card structure: Title → Description → Business Impact
- Grid layout: auto-fit, minmax(320px, 1fr)
- Clean, impact-focused descriptions

### Experience Section
- Work history cards
- Subtle gradient animation (cream → beige → tan, 10-second cycle)
- Sparkle effects on individual elements
- Chronological or importance-based ordering

### Contact Section
- Email (clickable mailto link)
- LinkedIn (external link with target="_blank")
- Phone (clickable tel link)
- Location (display-only)
- Professional styling with labels and values

---

## 🔧 Development Workflow

### Making Changes

**1. Edit a component:**
```bash
# Example: Edit skills
nano src/components/Skills.jsx
```

**2. Save and test locally:**
```bash
npm run dev
# Open http://localhost:5174 in browser
```

**3. Commit changes:**
```bash
git add src/components/Skills.jsx
git commit -m "Update skills list"
```

**4. Push to main branch:**
```bash
git push origin main
```
- GitHub Actions automatically triggers deployment
- Site updates in ~2-3 minutes

### Branch Strategy
- **main**: Production branch (auto-deploys)
- Feature branches: For experimental changes
- Always test locally before pushing to main

---

## 🌐 Deployment (GitHub Pages)

### Current Setup
- **Repository**: harikrishnatb8544-bot/portfolio
- **Deployment URL**: https://harikrishnatb8544-bot.github.io/portfolio/
- **Trigger**: Push to `main` branch
- **Build Tool**: GitHub Actions
- **Build Command**: `npm run build`

### Deployment Workflow
1. Commit changes to `src/` folder
2. Push to `main` branch (`git push origin main`)
3. GitHub Actions workflow triggers automatically:
   - Checks out code
   - Installs dependencies (`npm ci`)
   - Builds project (`npm run build`)
   - Deploys `dist/` to GitHub Pages
4. Site goes live in 2-3 minutes

### Manual Redeployment
```bash
# If needed to force redeploy:
git push origin main --force
```

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|------------|--------|
| < 480px | Mobile (1 column, stacked) |
| 480px - 768px | Tablet (2 columns) |
| 768px - 1200px | Small Desktop (3 columns) |
| > 1200px | Full Desktop (4 columns) |

---

## 🎬 Animation Guide

### Confetti Animation (Hero)
- **Trigger**: Page load
- **Duration**: 30 seconds (regenerates)
- **Speed**: 8-12 seconds per symbol
- **Blur**: 0.8px for polish
- **Symbols**: 20 emoji icons (rotating stock)

### Wave Background
- **3 layers** at different rotation speeds (15s, 20s, 25s)
- **Effect**: Subtle background animation
- **Positioning**: Fixed, behind content

### Sparkle Effects
- **Elements**: Skills items, experience cards
- **Animation**: Scale + opacity pulse
- **Duration**: 2-4 second cycles
- **Timing**: Staggered with delays

### Gradient Transitions (Experience)
- **Colors**: #faf8f3 → #f5f1eb → #ede9e0
- **Duration**: 10-second cycle
- **Effect**: Subtle, imperceptible color shift

---

## 📝 Content Guidelines

### Skills Section
- **Keep it focused**: 6-10 core competencies
- **Data Science specific**: Python, ML, SQL, EDA, Feature Engineering, etc.
- **Avoid bloat**: One word or short phrase per skill

### Projects
- **Title**: Concise, action-oriented
- **Description**: What problem did it solve? (1-2 sentences)
- **Impact**: Business value or metrics (e.g., "Improved X by Y%")
- **Max 3-4 projects**: Quality over quantity

### Experience
- **Title**: Job title or role
- **Company**: Organization name
- **Description**: Key achievements, technologies used
- **Chronological order**: Recent first (optional)

---

## 🔐 Best Practices

- ✅ Keep sensitive information out of code (use environment variables if needed)
- ✅ Test responsive design on multiple devices
- ✅ Commit frequently with clear messages
- ✅ Use `npm run build` before major updates to catch errors
- ✅ Monitor GitHub Actions for deployment status
- ✅ Update README when adding new sections or features

---

## 🐛 Troubleshooting

### Page shows blank
- Check browser console for errors (F12)
- Ensure all component imports are correct
- Run `npm install` to install missing dependencies

### Changes not reflecting on live site
- Hard refresh browser (Ctrl+Shift+R on Windows)
- Wait 2-3 minutes for GitHub Pages to update
- Check GitHub Actions workflow status in repo settings

### Build fails locally
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version: `node --version`

### CSS not applying
- Check that CSS class names match component JSX
- Ensure no CSS conflicts (use unique class names)
- Verify file path in import statement

---

## 📊 Performance Metrics

- **Build Time**: ~3-4 seconds
- **CSS Size**: 15.98 KB (3.41 KB gzipped)
- **JS Size**: 199.77 KB (62.53 KB gzipped)
- **No external dependencies**: Reduces attack surface
- **60 FPS animations**: Smooth GPU-accelerated transforms

---

## 📞 Contact & Support

- **Email**: harikrishnatb8544@gmail.com
- **LinkedIn**: linkedin.com/in/hari-krishna-tb-1a9772304
- **Phone**: +91 9632768544
- **Location**: Bengaluru, India

---

## 📄 License

© 2025 Hari Krishna TB. All rights reserved.

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [GitHub Pages Deployment](https://pages.github.com)

---

**Last Updated**: December 28, 2025

Made with ❤️ | Clean, Professional, Responsive

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

The dev server will automatically reload when you make changes.

## Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### GitHub Pages Deployment

1. Update `vite.config.js` to include your repository name:
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings and select `gh-pages` branch.

### Other Hosting Options
- Vercel (recommended - zero config deployment)
- Netlify (automatic deployments from git)
- Firebase Hosting
- AWS S3 + CloudFront
- Any static hosting service

## Customization

### Update Personal Information
Edit component content in `src/components/`:
- **Navbar.jsx**: Change logo text or navigation items
- **Hero.jsx**: Update name, title, and subtitle
- **Skills.jsx**: Modify skills list
- **Projects.jsx**: Add/remove projects and tech stacks
- **Experience.jsx**: Update work experience
- **Contact.jsx**: Add your contact details and links

### Styling
All styles are in `src/index.css`. Key CSS variables:
- `--bg-primary`: Main dark background (#0f172a)
- `--accent`: Blue highlight color (#3b82f6)
- Modify colors in `:root` for consistent theming

## Performance
- Lightning-fast builds with Vite
- Optimized for production with minification
- Clean, efficient CSS with minimal overhead
- No unnecessary dependencies

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
Free to use and modify for your personal portfolio.

## Contact
- Email: harikrishnatb8544@gmail.com
- LinkedIn: https://www.linkedin.com/in/hari-krishna-tb-1a9772304
- Location: Bengaluru, India

---

Built with ⚡ Vite and ⚛️ React
