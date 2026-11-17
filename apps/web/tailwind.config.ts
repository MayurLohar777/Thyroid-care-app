import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#123D42",      // Primary dark teal
          primary: "#167D83",   // Primary teal
          secondary: "#37A6A0", // Secondary teal
          mint: "#8DD3C7",      // Soft mint
          subtle: "#E6F4F4",    // Pale teal background tint
        },
        canvas: {
          bg: "#F5FAFA",        // Light serene clinical background
          surface: "#FFFFFF",   // Crisp white card/modal surface
          hover: "#F0F7F7",     // Table row hover
        },
        typography: {
          primary: "#183638",   // Deep charcoal teal for high contrast
          secondary: "#718487", // Readable secondary metadata
          muted: "#9EAFB2",     // Placeholder text
        },
        stroke: {
          border: "#E4EEEE",    // Soft, crisp border
          focused: "#167D83",   // Focus ring
        },
        status: {
          success: "#10B981",   // Normal / in-range
          warning: "#F59E0B",   // Borderline / subclinical / pending
          danger: "#EF4444",    // Out-of-range / critical
          info: "#0EA5E9",      // Informational tips
        },
      },
      borderRadius: {
        card: "16px",
        element: "10px",
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(18, 61, 66, 0.05)",
        float: "0 10px 25px -5px rgba(18, 61, 66, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
