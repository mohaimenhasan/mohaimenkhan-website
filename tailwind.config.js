module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'code-black': '#1e1e1e',
          'code-blue': '#569cd6',
          'code-green': '#6a9955',
          'code-yellow': '#dcdcaa',
          'code-orange': '#ce9178',
          'code-red': '#f44747',
          'code-purple': '#c586c0',
          'code-pink': '#d16969',
          'terminal-black': '#282c34',
          'terminal-green': '#98c379',
        },
        fontFamily: {
          'mono': ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
          'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        animation: {
          'cursor-blink': 'cursor-blink 1.2s infinite',
          'float': 'float 6s ease-in-out infinite',
          'typing': 'typing 3.5s steps(40, end)',
        },
        keyframes: {
          'cursor-blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'typing': {
            'from': { width: '0' },
            'to': { width: '100%' },
          }
        },
      },
    },
    plugins: [],
  }
  