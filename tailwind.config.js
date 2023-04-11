module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:
    {
      colors: {
        "light-blue": "var(--light-blue)",
        "medium-blue": "var(--medium-blue)",
        "dark-blue": "var(--dark-blue)",
        "light-yellow": "var(--light-yellow)",
        "dark-yellow": "var(--dark-yellow)",
        "dark-pink": "var(--dark-pink)"
      },
      screens: {
        'ms': {'min': '310px', 'max': '320px'},
        // => @media (min-width: 375px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
