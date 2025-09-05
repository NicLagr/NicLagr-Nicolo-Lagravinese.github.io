# Nicolò Lagravinese - Portfolio

A modern, accessible portfolio website showcasing full-stack development, cloud infrastructure, and hardware integration projects.

## 🚀 Live Site

Visit: [https://niclagr.github.io](https://niclagr.github.io)

## ✨ Features

- **Dual Theme System**: Toggle between Vaporwave/Y2K and Modern Minimal themes
- **Interactive Centerpiece**: Floating orb with parallax effects and project shortcuts
- **Accessibility First**: WCAG compliant with keyboard navigation and reduced motion support
- **Performance Optimized**: Lighthouse score ≥95 on all metrics
- **Responsive Design**: Mobile-first approach with smooth animations
- **Cursor Trail**: Decorative cursor effects (respects reduced motion preferences)

## 🛠️ Tech Stack

- **React 18** - Component framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **React Helmet** - SEO optimization

## 🏗️ Build Instructions

### Prerequisites

- Node.js 16+ 
- Yarn (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/NicLagr/NicLagr-Nicolo-Lagravinese.github.io.git

# Navigate to project directory
cd NicLagr-Nicolo-Lagravinese.github.io

# Install dependencies (using Yarn - recommended)
yarn install

# Or with npm
# npm install

# Start development server
yarn start

# Or with npm
# npm start
```

### Production Build

```bash
# Create production build
yarn build

# Deploy to GitHub Pages
yarn deploy

# Or with npm
# npm run build
# npm run deploy
```

## 🎨 Design Decisions

### Theme System

**Vaporwave/Y2K Theme (Default)**
- Neon gradients (pink, purple, teal)
- Dark navy/black backgrounds
- Glassy, translucent cards with backdrop blur
- Subtle noise/grain texture overlay
- Vibrant accent colors with glow effects

**Modern Minimal Theme**
- Clean pastels and light grays
- Soft blue accents
- Reduced visual noise
- Simplified animations
- Professional, accessible color contrast

### Accessibility Features

- **Skip-to-content** link for keyboard users
- **Focus-visible** styling throughout
- **Semantic HTML** with proper landmarks
- **Alt text** for all images
- **Reduced motion** fallbacks for animations
- **High contrast** ratios in both themes
- **Keyboard navigation** support

### Performance Optimizations

- **Lazy loading** for images and components
- **Code splitting** by route
- **Optimized fonts** with display: swap
- **Minimal bundle size** with tree shaking
- **Efficient animations** using transform and opacity
- **No layout shift** in critical rendering path

### Interactive Elements

**Floating Orb Centerpiece**
- 3D CSS transforms for parallax effect
- Mouse tracking with spring physics
- Orbiting project shortcuts
- Graceful degradation for reduced motion
- Touch-friendly interactions

**Cursor Trail**
- Canvas-based particle system
- Throttled with requestAnimationFrame
- Automatically disabled on touch devices
- Respects prefers-reduced-motion
- Theme-aware color adaptation

### Component Architecture

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation with theme toggle
│   ├── Hero.js         # Landing section with centerpiece
│   ├── Centerpiece.js  # Interactive floating orb
│   ├── ProjectCard.js  # Expandable project cards
│   ├── ThemeToggle.js  # Theme switching component
│   ├── CursorTrail.js  # Decorative cursor effects
│   └── Footer.js       # Site footer
├── sections/           # Page sections
│   ├── Projects.js     # Portfolio showcase
│   ├── About.js        # Skills and background
│   └── Contact.js      # Contact information
├── data/               # Content and configuration
│   ├── projects.js     # Project data
│   ├── experience.js   # Work experience
│   └── skills.js       # Technical skills
└── styles/
    └── globals.css     # Theme system and utilities
```

### Content Strategy

All project data and experience information is sourced from the provided resume to ensure accuracy. The content emphasizes:

- **Technical depth** with specific technologies
- **Impact metrics** where available  
- **Real-world applications** and business value
- **Hardware/IoT specialization** as a differentiator
- **Availability for co-op** positions

## 🔧 Development Notes

### CSS Custom Properties

The theme system uses CSS custom properties for dynamic theming:

```css
:root {
  --bg-primary: #0a0a23;
  --accent-primary: #ff00ff;
  /* ... */
}

[data-theme="modern"] {
  --bg-primary: #ffffff;
  --accent-primary: #3b82f6;
  /* ... */
}
```

### Animation Philosophy

- **Meaningful motion**: Animations guide attention and provide feedback
- **Performance first**: Use transform and opacity for 60fps animations
- **Accessibility**: Respect prefers-reduced-motion at all levels
- **Progressive enhancement**: Core functionality works without JavaScript

### Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Graceful degradation for older browsers
- Progressive enhancement approach

## 📈 Performance Metrics

Target Lighthouse scores:
- **Performance**: ≥95
- **Accessibility**: ≥95  
- **Best Practices**: ≥95
- **SEO**: ≥95

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome! Please open an issue for any bugs or improvement ideas.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion.