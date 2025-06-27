/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        // GitHub-inspired color palette
        canvas: {
          DEFAULT: '#0d1117',
          subtle: '#161b22',
        },
        border: {
          DEFAULT: '#30363d',
          muted: '#21262d',
        },
        fg: {
          DEFAULT: '#f0f6fc',
          muted: '#8b949e',
          subtle: '#6e7681',
        },
        accent: {
          DEFAULT: '#58a6ff',
          emphasis: '#1f6feb',
        },
        success: {
          DEFAULT: '#238636',
          emphasis: '#2ea043',
        },
        danger: {
          DEFAULT: '#da3633',
        },
        // Legacy colors for backward compatibility
        primary: '#f0f6fc',
        secondary: '#8b949e',
      },
      backgroundColor: {
        'canvas': '#0d1117',
        'canvas-subtle': '#161b22',
      },
      textColor: {
        'primary': '#f0f6fc',
        'secondary': '#8b949e',
        'muted': '#6e7681',
        'accent': '#58a6ff',
        'success': '#238636',
        'danger': '#da3633',
      },
      borderColor: {
        'default': '#30363d',
        'muted': '#21262d',
      },
    },
  },
  plugins: [],
}; 