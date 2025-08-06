import { heroui } from "@heroui/theme";

/** Custom color palette */
const colors = {
  primary: {
    50: "#e8f9e6",
    100: "#c8f0c0",
    200: "#a6e89a",
    300: "#82df73",
    400: "#5fd84f",
    500: "#40cc2d",
    600: "#37b528",
    700: "#328027",
    800: "#2a641f",
    900: "#204918",
    foreground: "#ffffff",
    DEFAULT: "#40cc2d",
  },
  danger: {
    50: "#ffe8ea",
    100: "#fbcfd3",
    200: "#f5a7ab",
    300: "#f07f84",
    400: "#ea595e",
    500: "#cc2d40",
    600: "#b02735",
    700: "#8f1e2a",
    800: "#6e161f",
    900: "#4f0f15",
    foreground: "#ffffff",
    DEFAULT: "#cc2d40",
  },
  white: {
    50: "#ffffff",
    100: "#fafafa",
    200: "#f5f5f5",
    300: "#f0f0f0",
    400: "#ebebeb",
    500: "#e0e0e0",
    600: "#d4d4d4",
    700: "#c8c8c8",
    800: "#bcbcbc",
    900: "#b0b0b0",
    foreground: "#000000",
    DEFAULT: "#e0e0e0",
  },
  black: {
    50: "#e5e5e5",
    100: "#bfbfbf",
    200: "#999999",
    300: "#737373",
    400: "#4d4d4d",
    500: "#222222",
    600: "#1a1a1a",
    700: "#111111",
    800: "#0b0b0b",
    900: "#050505",
    foreground: "#ffffff",
    DEFAULT: "#222222",
  },
};

const fonts = {
  sans: ['"TextFont"', "sans-serif"],
  heading: ['"AccentFont"', "sans-serif"],
  accent: ['"AccentFont"', "sans-serif"],
  text: ['"TextFont"', "sans-serif"],
  words: ['"WordsFont"', "sans-serif"],
  button: ['"ButtonFont"', "sans-serif"],
};

function createCssVariables(obj, prefix = "--color") {
  const vars = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      vars[`${prefix}-${key}`] = value;
    } else if (typeof value === "object") {
      const nested = createCssVariables(value, `${prefix}-${key}`);
      Object.assign(vars, nested);
    }
  }
  return vars;
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
    },
  },
  plugins: [
    heroui({
      theme: {
        extend: {
          colors,
          fontFamily: fonts,
        },
      },
    }),
    // Plugin to inject CSS variables globally
    function ({ addBase }) {
      addBase({
        ":root": createCssVariables(colors),
      });
    },
  ],
};
