/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sap: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffe',
          300: '#7cc4fd',
          400: '#36a6fa',
          500: '#0c87eb',
          600: '#0070F2', // Signature SAP Fiori Blue
          700: '#0154be',
          800: '#06479c',
          900: '#0b3d7d',
          950: '#08264e',
        },
        navy: {
          850: '#0f172a',
          900: '#0b0f19',
          950: '#070a12',
          card: '#0d1322',
          border: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'subtle-blue': '0 4px 20px -2px rgba(0, 112, 242, 0.15)',
        'enterprise-card': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'enterprise-card-hover': '0 20px 40px -10px rgba(0, 112, 242, 0.12), 0 0 0 1px rgba(0, 112, 242, 0.3)',
      },
      backgroundImage: {
        'enterprise-grid': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        'sap-gradient': 'linear-gradient(135deg, #0070F2 0%, #0c87eb 50%, #38bdf8 100%)',
      }
    },
  },
  plugins: [],
}
