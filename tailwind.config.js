/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "759px" },
        tablet: { min: "760px", max: "1023px" },
        desktop: { min: "1024px" },
      },
      colors: {
        "gray-100": "var(--color-gray-100)",
        "gray-200": "var(--color-gray-200)",
        "gray-300": "var(--color-gray-300)",
        "gray-400": "var(--color-gray-400)",
        "gray-500": "var(--color-gray-500)",
        "gray-600": "var(--color-gray-600)",
        "gray-700": "var(--color-gray-700)",
        "gray-800": "var(--color-gray-800)",
        "gray-900": "var(--color-gray-900)",
        "yellow-100": "var(--color-yellow-100)",
        "yellow-200": "var(--color-yellow-200)",
        "yellow-300": "var(--color-yellow-300)",
        "yellow-400": "var(--color-yellow-400)",
        "yellow-500": "var(--color-yellow-500)",
        "yellow-600": "var(--color-yellow-600)",
        "yellow-700": "var(--color-yellow-700)",
        "yellow-800": "var(--color-yellow-800)",
        "yellow-900": "var(--color-yellow-900)",
        "blue-100": "var(--color-blue-100)",
        "blue-200": "var(--color-blue-200)",
        "blue-300": "var(--color-blue-300)",
        "blue-400": "var(--color-blue-400)",
        "blue-500": "var(--color-blue-500)",
        "blue-600": "var(--color-blue-600)",
        "blue-700": "var(--color-blue-700)",
        "blue-800": "var(--color-blue-800)",
        "blue-900": "var(--color-blue-900)",
        "system-red": "var(--color-system-red)",
        "system-green": "var(--color-system-green)",
        white: "#FFFFFF",
        dark: "#0E0E0E",
      },
      fontSize: {
        // headline
        "headline-1-bold": [
          "40px",
          {
            fontWeight: "700",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "headline-1-regular": [
          "40px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "headline-2-bold": [
          "36px",
          {
            fontWeight: "700",
            letterSpacing: "-1.1px",
            lineHeight: "1.34",
          },
        ],
        "headline-2-regular": [
          "36px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.34",
          },
        ],
        "headline-3-bold": [
          "32px",
          {
            fontWeight: "700",
            letterSpacing: "-1.1px",
            lineHeight: "1.36",
          },
        ],
        "headline-3-regular": [
          "32px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.36",
          },
        ],
        "headline-4-bold": [
          "28px",
          {
            fontWeight: "700",
            letterSpacing: "-1.1px",
            lineHeight: "1.36",
          },
        ],
        "headline-4-semibold": [
          "28px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.36",
          },
        ],
        "headline-4-medium": [
          "28px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.36",
          },
        ],
        "headline-4-regular": [
          "28px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.36",
          },
        ],
        // title
        "title-1-bold": [
          "24px",
          {
            fontWeight: "700",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-1-semibold": [
          "24px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-1-medium": [
          "24px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-1-regular": [
          "24px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-2-semibold": [
          "20px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-2-medium": [
          "20px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-2-regular": [
          "20px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.4",
          },
        ],
        "title-3-semibold": [
          "18px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.445",
          },
        ],
        "title-3-medium": [
          "18px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.445",
          },
        ],
        "title-3-regular": [
          "18px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.445",
          },
        ],
        // body
        "body-1-semibold": [
          "16px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.5",
          },
        ],
        "body-1-medium": [
          "16px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.5",
          },
        ],
        "body-1-regular": [
          "16px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.5",
          },
        ],
        "body-2-semibold": [
          "14px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.6",
          },
        ],
        "body-2-medium": [
          "14px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.6",
          },
        ],
        "body-2-regular": [
          "14px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.6",
          },
        ],
        "body-3-semibold": [
          "12px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.5",
          },
        ],
        "body-3-medium": [
          "12px",
          {
            fontWeight: "500",
            letterSpacing: "-1.1px",
            lineHeight: "1.5",
          },
        ],
        "body-3-regular": [
          "12px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.5",
          },
        ],
        // caption
        "caption-1-semibold": [
          "10px",
          {
            fontWeight: "600",
            letterSpacing: "-1.1px",
            lineHeight: "1.6",
          },
        ],
        "caption-1-regular": [
          "10px",
          {
            fontWeight: "400",
            letterSpacing: "-1.1px",
            lineHeight: "1.6",
          },
        ],
      },
      boxShadow: {
        normal: "var(--shadow-normal)",
        emphasize: "var(--shadow-emphasize)",
      },
    },
  },
  plugins: [],
};
