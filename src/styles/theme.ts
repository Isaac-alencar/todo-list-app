const colors = {
  main: "#edf2fb",
  secondary: "#ffffff",
  background: "#edf2fb",
  text: "#777777",
  heading: "#4d4d4d",
  stroke: "#8182ef",
};

const borderRadius = "5px";

const fonts = {
  default: "Inter",
  fallback: "sans-serif",
};

const fontSize = {
  small: "1rem",
  medium: "1.5rem",
  large: "3rem",
};

const REM_SIZE = 16;
const QUARTER_PART_OF_REM = REM_SIZE / 4;
// 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px

const spacing = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((size) => {
  // 1 * 4 = 4, 2 * 4 = 8...
  return `${size * QUARTER_PART_OF_REM}px`;
});

const theme = {
  colors,
  borderRadius,
  fonts,
  fontSize,
  spacing,
};

export type Theme = typeof theme;

export { theme };
