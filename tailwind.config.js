module.exports = {
  theme: {
    extend: {
      fontFamily: {
        gaming: ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'sans-serif'], // You can change 'Inter' to your preferred font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide': 'slide 60s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  variants: {},
  plugins: [],
}