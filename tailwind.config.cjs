const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: '1120px',
        xl: '1200px',
      },
    },
    extend: {
      fontFamily: {
        // Use the CSS variables declared in src/style.css so Tailwind utilities
        // match the original fonts exactly.
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        popover: 'var(--color-popover)',
        'popover-foreground': 'var(--color-popover-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        destructive: 'var(--color-destructive)',
        'destructive-foreground': 'var(--color-destructive-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        'grid-color': 'var(--grid-color)'
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        elegant: 'var(--shadow-elegant)',
        soft: 'var(--shadow-soft)',
      },
      spacing: {
        '7': '1.75rem',
        '13': '3.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Provide utility aliases that mirror the old @utility names so components
    // that relied on those still get generated as Tailwind utilities.
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.btn-accent': {
          'background-color': 'var(--color-accent)',
          color: 'var(--color-accent-foreground)',
        },
        '.card-elegant': {
          'background-color': 'var(--color-card)',
          border: '1px solid var(--color-border)',
          'border-radius': 'var(--radius)',
        },
      })
    }),
  ],
  safelist: [
    // Ensure color token classes and slash-opacity variants are always generated
    { pattern: /^(bg|text|border|ring)-(background|card|popover|primary|secondary|muted|accent|destructive|border)(?:\/.+)?$/ },
    { pattern: /^(text|bg|border)-(foreground|card-foreground|popover-foreground|primary-foreground|secondary-foreground|muted-foreground|accent-foreground|destructive-foreground)(?:\/.+)?$/ },
    'btn-accent', 'card-elegant', 'rounded-3xl', 'rounded-2xl', 'animate-fade-up', 'animate-float'
  ],
};
