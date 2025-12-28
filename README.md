# Hari Krishna TB - Data Science Portfolio

A professional, minimal, and recruiter-friendly Data Science portfolio built with React and Vite.

**🌐 Live Site**: https://harikrishnatb8544-bot.github.io/portfolio/

## Features

✨ **Professional Design**
- Dark theme with clean, modern aesthetics
- Single Page Application with smooth scrolling navigation
- Sticky navbar with active link indicators
- Fully responsive design (mobile, tablet, desktop)
- Plain CSS (no frameworks or UI libraries)

📱 **Responsive Components**
- Hero section with call-to-action
- Skills grid showcase
- Project cards with tech stacks and business impact
- Experience timeline
- Contact section with direct links

🚀 **Technology Stack**
- React (Functional Components)
- Vite (Fast build tool)
- Plain CSS (responsive grid layouts)
- No external dependencies for styling

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        - Sticky navigation with active links
│   ├── Hero.jsx          - Hero section with name and title
│   ├── Skills.jsx        - Skills grid
│   ├── Projects.jsx      - Project cards with tech stacks
│   ├── Experience.jsx    - Experience timeline
│   └── Contact.jsx       - Contact information and links
├── App.jsx              - Main app component
├── main.jsx             - React DOM entry point
└── index.css            - All styling (dark theme, responsive)
```

## Installation & Development

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn

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
