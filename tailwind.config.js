/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enhanced Vaporwave/Y2K theme
        vaporwave: {
          pink: '#ff4fd8',
          purple: '#6c59ff', 
          cyan: '#33e1ff',
          teal: '#00ffff',
          blue: '#4169e1',
          navy: '#0a0a23',
          black: '#000000',
          deep: '#0a0518',
        },
        vw: {
          ink: "#e2d1ff",
          pink: "#ff4fd8",
          purple: "#6c59ff",
          cyan: "#33e1ff",
          deep: "#0a0518",
        },
        // Modern Minimal theme
        modern: {
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Marcellus', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'wobble': 'wobble 0.8s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 0, 255, 0.8)' },
        },
        wobble: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: "0 0 30px rgba(108,89,255,.35)",
        'glow-pink': "0 0 20px rgba(255,79,216,.6)",
        'glow-purple': "0 0 20px rgba(108,89,255,.6)", 
        'glow-cyan': "0 0 20px rgba(51,225,255,.6)",
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
