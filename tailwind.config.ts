import type { Config } from "tailwindcss";import type { Config } from "tailwindcss";



export default {export default {

  darkMode: ["class"],  darkMode: ["class"],

  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],

  theme: {  theme: {

    extend: {    extend: {

      borderRadius: {      borderRadius: {

        lg: ".5625rem", /* 9px */        lg: ".5625rem", /* 9px */

        md: ".375rem", /* 6px */        md: ".375rem", /* 6px */

        sm: ".1875rem", /* 3px */        sm: ".1875rem", /* 3px */

      },      },

      colors: {      colors: {

        // Flat / base colors (regular buttons)        // Flat / base colors (regular buttons)

        background: "hsl(var(--background) / <alpha-value>)",        background: "hsl(var(--background) / <alpha-value>)",

        foreground: "hsl(var(--foreground) / <alpha-value>)",        foreground: "hsl(var(--foreground) / <alpha-value>)",

        border: "hsl(var(--border) / <alpha-value>)",        border: "hsl(var(--border) / <alpha-value>)",

        input: "hsl(var(--input) / <alpha-value>)",        input: "hsl(var(--input) / <alpha-value>)",

        card: {        card: {

          DEFAULT: "hsl(var(--card) / <alpha-value>)",          DEFAULT: "hsl(var(--card) / <alpha-value>)",

          foreground: "hsl(var(--card-foreground) / <alpha-value>)",          foreground: "hsl(var(--card-foreground) / <alpha-value>)",

          border: "hsl(var(--card-border) / <alpha-value>)",          border: "hsl(var(--card-border) / <alpha-value>)",

        },        },

        popover: {        popover: {

          DEFAULT: "hsl(var(--popover) / <alpha-value>)",          DEFAULT: "hsl(var(--popover) / <alpha-value>)",

          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",

          border: "hsl(var(--popover-border) / <alpha-value>)",          border: "hsl(var(--popover-border) / <alpha-value>)",

        },        },

        primary: {        primary: {

          DEFAULT: "hsl(var(--primary) / <alpha-value>)",          DEFAULT: "hsl(var(--primary) / <alpha-value>)",

          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",

          border: "var(--primary-border)",          border: "var(--primary-border)",

        },        },

        secondary: {        secondary: {

          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",

          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",

          border: "var(--secondary-border)",          border: "var(--secondary-border)",

        },        },

        muted: {        muted: {

          DEFAULT: "hsl(var(--muted) / <alpha-value>)",          DEFAULT: "hsl(var(--muted) / <alpha-value>)",

          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",

          border: "var(--muted-border)",          border: "var(--muted-border)",

        },        },

        accent: {        accent: {

          DEFAULT: "hsl(var(--accent) / <alpha-value>)",          DEFAULT: "hsl(var(--accent) / <alpha-value>)",

          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",

          border: "var(--accent-border)",          border: "var(--accent-border)",

        },        },

        destructive: {        destructive: {

          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",

          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",

          border: "var(--destructive-border)",          border: "var(--destructive-border)",

        },        },

        ring: "hsl(var(--ring) / <alpha-value>)",        ring: "hsl(var(--ring) / <alpha-value>)",

        chart: {        chart: {

          "1": "hsl(var(--chart-1) / <alpha-value>)",          "1": "hsl(var(--chart-1) / <alpha-value>)",

          "2": "hsl(var(--chart-2) / <alpha-value>)",          "2": "hsl(var(--chart-2) / <alpha-value>)",

          "3": "hsl(var(--chart-3) / <alpha-value>)",          "3": "hsl(var(--chart-3) / <alpha-value>)",

          "4": "hsl(var(--chart-4) / <alpha-value>)",          "4": "hsl(var(--chart-4) / <alpha-value>)",

          "5": "hsl(var(--chart-5) / <alpha-value>)",          "5": "hsl(var(--chart-5) / <alpha-value>)",

        },        },

        sidebar: {        sidebar: {

          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",

          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",

          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",

          border: "hsl(var(--sidebar-border) / <alpha-value>)",          border: "hsl(var(--sidebar-border) / <alpha-value>)",

        },        },

        "sidebar-primary": {        "sidebar-primary": {

          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",

          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",

          border: "var(--sidebar-primary-border)",          border: "var(--sidebar-primary-border)",

        },        },

        "sidebar-accent": {        "sidebar-accent": {

          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",

          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",

          border: "var(--sidebar-accent-border)"          border: "var(--sidebar-accent-border)"

        },        },

        status: {        status: {

          online: "rgb(34 197 94)",          online: "rgb(34 197 94)",

          away: "rgb(245 158 11)",          away: "rgb(245 158 11)",

          busy: "rgb(239 68 68)",          busy: "rgb(239 68 68)",

          offline: "rgb(156 163 175)",          offline: "rgb(156 163 175)",

        },        },

        success: "hsl(120 85% 50%)",        success: "hsl(120 85% 50%)",

        warning: "hsl(280 90% 65%)",        warning: "hsl(280 90% 65%)",

      },      },

      fontFamily: {      fontFamily: {

        sans: ["var(--font-sans)"],        sans: ["var(--font-sans)"],

        serif: ["var(--font-serif)"],        serif: ["var(--font-serif)"],

        mono: ["var(--font-mono)"],        mono: ["var(--font-mono)"],

      },      },

      keyframes: {      keyframes: {

        "accordion-down": {        "accordion-down": {

          from: { height: "0" },          from: { height: "0" },

          to: { height: "var(--radix-accordion-content-height)" },          to: { height: "var(--radix-accordion-content-height)" },

        },        },

        "accordion-up": {        "accordion-up": {

          from: { height: "var(--radix-accordion-content-height)" },          from: { height: "var(--radix-accordion-content-height)" },

          to: { height: "0" },          to: { height: "0" },

        },        },

      },      },

      animation: {      animation: {

        "accordion-down": "accordion-down 0.2s ease-out",        "accordion-down": "accordion-down 0.2s ease-out",

        "accordion-up": "accordion-up 0.2s ease-out",        "accordion-up": "accordion-up 0.2s ease-out",

      },      },

    },    },

  },  },

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],

} satisfies Config;} satisfies Config;
