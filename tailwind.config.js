/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        surface: "#16161A",
        surface2: "#1E1E23",
        cyan: {
          DEFAULT: "#29C5F0",
          soft: "#7FE0FA",
        },
        volt: "#E8FF3C",
        bone: "#F2F2ED",
        mute: "#8A8A93",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        tag: ["'Space Mono'", "monospace"],
      },
      backgroundImage: {
        noise: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-18px) rotate(var(--tilt, 0deg))" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
