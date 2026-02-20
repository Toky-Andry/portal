/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0a',
        teal: {
          glow: '#00ffcc',
          dim: '#00b38a',
        },
        violet: {
          glow: '#9b5de5',
          dim: '#6b3fa0',
        },
        organic: {
          skin: '#1a1a2e',
          vein: '#00ffcc22',
          pulse: '#9b5de520',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'vein-flow': 'veinFlow 3s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        veinFlow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px #00ffcc)' },
          '50%': { filter: 'drop-shadow(0 0 25px #00ffcc) drop-shadow(0 0 50px #9b5de5)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 50% 70% 50%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
      },
      backgroundImage: {
        'radial-teal': 'radial-gradient(ellipse at center, #00ffcc15 0%, transparent 70%)',
        'radial-violet': 'radial-gradient(ellipse at center, #9b5de515 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
