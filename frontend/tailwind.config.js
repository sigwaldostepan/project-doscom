/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lightMode: {
          primary: "#a855f7",
          secondary: "#9333ea",
          accent: "#6d28d9",
          neutral: "#111827",
          "base-100": "#f3f4f6",
          info: "#ff00ff",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
        darkMode: {
          primary: "#9333ea",
          secondary: "#7e22ce",
          accent: "#00ffff",
          neutral: "#7c3aed",
          "base-100": "#252525",
          info: "#7e22ce",
          success: "#eab308",
          warning: "#00ff00",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
