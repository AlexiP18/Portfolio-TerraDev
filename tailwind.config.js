/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Paleta de Colores Terrabyte EC ─────────────────────────────
      colors: {
        // Fondos
        'bg-main':      '#0B1120',  // Azul Abismo
        'bg-secondary': '#0F172A',  // Slate oscuro
        // Acento principal
        'primary':      '#2DD4BF',  // Turquesa Neón (teal-400)
        'primary-dark': '#14B8A6',  // tono hover
        // Superficies / Cards
        'surface':      '#1E293B',  // slate-800 base para glassmorphism
        // Texto
        'text-main':    '#F8FAFC',  // Casi blanco
        'text-body':    '#94A3B8',  // Gris plata
        'text-muted':   '#64748B',  // Gris apagado
      },

      // ─── Tipografía ──────────────────────────────────────────────────
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],  // H1, H2
        ui:      ['"Outfit"', 'sans-serif'],          // Botones, subtítulos, UI
        body:    ['"Inter"', 'sans-serif'],            // Texto de cuerpo
        code:    ['"JetBrains Mono"', 'monospace'],   // Código / tags
      },

      // ─── Backdrop Blur extra ──────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },

      // ─── Sombras Glassmorphism ────────────────────────────────────────
      boxShadow: {
        'glass':      '0 8px 32px rgba(0, 0, 0, 0.37)',
        'glass-lg':   '0 20px 60px rgba(0, 0, 0, 0.5)',
        'glow-teal':  '0 0 24px rgba(45, 212, 191, 0.35)',
        'glow-teal-lg':'0 0 48px rgba(45, 212, 191, 0.25)',
      },
    },
  },
  plugins: [],
}

