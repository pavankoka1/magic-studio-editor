import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#261d6d",
            egg: "#F0EAD6",
            secondary: "#F0EAD6",
            linen: "#E9DCC9",
            ivory: "#FFFFF0",
            charcoal: "36454F",
            onyx: "#353935",
            "matte-black": "#28282B",
            "logo-blue": "#0ad4de",
            "dark-gray": "#A9A9A9",
            black: "#000",
        },
        extend: {},
    },
    plugins: [],
} satisfies Config;
