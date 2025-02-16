/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Blue
          hover: '#152B66', // Slightly darker for hover states
        },
        secondary: {
          DEFAULT: '#60A5FA', // Sky Blue
          dark: '#3B82F6', // Darker for hover states
        },
        accent: {
          DEFAULT: '#D1A054', // Warm Gold
          light: '#DEB574', // Lighter for hover states
        },
        neutral: {
          DEFAULT: '#F5F5F5', // Light Gray
          white: '#FFFFFF', // White
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1E3A8A', // Using primary color for text
            a: {
              color: '#60A5FA', // Using secondary color for links
              '&:hover': {
                color: '#3B82F6',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 