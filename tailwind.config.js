/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        "xxs": "10px",
        "md": "16px",
        "display-xs": "24px",
        "display-sm": "30px",
        "display-md": "36px",
        "display-lg": "48px",
        "display-2xl": "72px"
      },
      colors: {
        "button-bg-primary": "#FFFFFF",
        "button-primary-fg": "#FFFFFF",
        "button-primary-fg_hover": "#FFFFFF",
        "button-primary-bg": "#101828",
        "button-primary-border": "#101828",
        "button-primary-border_hover": "#344054",
        "button-primary-bg_hover": "#344054",
        "button-primary-error-bg": "#D92D20",
        "button-primary-error-bg_hover": "#B42318",
        "button-primary-error-border": "#D92D20",
        "button-primary-error-border_hover": "#B42318",

        "button-secondary-fg": "#344054",
        "button-secondary-color-fg": "#A80B48",
        "button-secondary-fg_hover": "#182230",
        "button-secondary-color-border": "#F891B9",
        "button-secondary-color-border_hover": "#F891B9",
        "button-secondary-border": "#D0D5DD",
        "button-secondary-border_hover": "#D0D5DD",
        "button-secondary-bg": "#FFFFFF",
        "button-secondary-bg_hover": "#F9FAFB",
        "button-secondary-color-bg": "#FFFFFF",
        "button-secondary-color-bg_hover": "#FFF4F8",
        "button-secondary-error-border": "#FDA29B",
        "button-secondary-error-bg": "#FFFFFF",
        "button-secondary-error-border_hover": "#FDA29B",
        "button-secondary-error-bg_hover": "#FEF3F2",
        "button-secondary-error-fg": "#B42318",
        "button-secondary-error-fg_hover": "#912018",

        "button-tertiary-fg": "#475467",
        "button-tertiary-error-fg": "#B42318",
        "button-tertiary-error-fg_hover": "#912018",
        "button-tertiary-color-fg": "#A80B48",
        "button-tertiary-fg_hover": "#344054",
        "button-tertiary-color-fg_hover": "#90093E",
        "button-tertiary-bg_hover": "#F9FAFB",
        "button-tertiary-color-bg_hover": "#FFF4F8",
        "button-tertiary-error-bg_hover": "#FEF3F2",

        "utility-gray-50": "#F9FAFB",
        "utility-brand-50": "#FFF4F8",
        "utility-error-50": "#FEF3F2",
        "utility-warning-50": "#FFFAEB",
        "utility-success-50": "#ECFDF3",
        "utility-gray-blue-50": "#F8F9FC",
        "utility-blue-light-50": "#F0F9FF",
        "utility-blue-50": "#EFF8FF",
        "utility-indigo-50": "#EEF4FF",
        "utility-purple-50": "#F4F3FF",
        "utility-pink-50": "#FDF2FA",
        "utility-orange-50": "#FEF6EE",

        "utility-gray-200": "#EAECF0",
        "utility-brand-200": "#FDDEEA",
        "utility-error-200": "#FECDCA",
        "utility-warning-200": "#FEDF89",
        "utility-success-200": "#ABEFC6",
        "utility-gray-blue-200": "#D5D9EB",
        "utility-blue-light-200": "#B9E6FE",
        "utility-blue-200": "#B2DDFF",
        "utility-indigo-200": "#C7D7FE",
        "utility-purple-200": "#D9D6FE",
        "utility-pink-200": "#FCCEEE",
        "utility-orange-200": "#F9DBAF",

        "utility-gray-600": "#475467",
        "utility-brand-600": "#C00C53",
        "utility-error-600": "#D92D20",
        "utility-warning-600": "#DC6803",
        "utility-success-600": "#079455",
        "utility-gray-blue-600": "#3E4784",
        "utility-blue-light-600": "#0086C9",
        "utility-blue-600": "#1570EF",
        "utility-indigo-600": "#444CE7",
        "utility-purple-600": "#6938EF",
        "utility-pink-600": "#DD2590",
        "utility-orange-600": "#E04F16",

        "utility-gray-700": "#344054",
        "utility-brand-700": "#A80B48",
        "utility-error-700": "#B42318",
        "utility-warning-700": "#B54708",
        "utility-success-700": "#067647",
        "utility-gray-blue-700": "#3E4784",
        "utility-blue-light-700": "#026AA2",
        "utility-blue-700": "#175CD3",
        "utility-indigo-700": "#3538CD",
        "utility-purple-700": "#5925DC",
        "utility-pink-700": "#C11574",
        "utility-orange-700": "#B93815",

        "utility-gray-500": "#667085",
        "utility-brand-500": "#D80E5D",
        "utility-error-500": "#F04438",
        "utility-warning-500": "#F79009",
        "utility-success-500": "#17B26A",
        "utility-gray-blue-500": "#4E5BA6",
        "utility-blue-light-500": "#0BA5EC",
        "utility-blue-500": "#2E90FA",
        "utility-indigo-500": "#6172F3",
        "utility-purple-500": "#7A5AF8",
        "utility-pink-500": "#EE46BC",
        "utility-orange-500": "#EF6820",

        "border-primary": "#D0D5DD",
        "border-secondary": "#EAECF0",
        "border-brand": "#F891B9",

        "placeholder": "#667085",
        "tooltip-supporting-text": "#D0D5DD",
        "toggle-button-fg_disabled": "#F9FAFB",
        "text-disabled": "#667085",
        "success-secondary": "#DCFAE6",
        "error": "#FDA29B",
        "error-primary-600": "#D92D20",
        "disabled_subtle": "#EAECF0",
        "disabled": "#F2F4F7",
        "alpha-white-80": "rgba(255, 255, 255, 0.80)",

        "primary": "#101828",
        "primary-900": "#101828",
        "primary_hover": "#F9FAFB",
        "primary-solid": "#0C111D",

        "secondary-700": "#344054",
        "secondary_hover": "#182230",

        "tetriary": "#475467",
        "tertiary-fg": "#344054",
        "tertiary-600": "#475467",

        "quarterary": "#667085",
        "quaternary-500": "#667085",

        "bg-active": "#F9FAFB",
        "bg-primary": "#FFFFFF",
        "bg-primary_hover": "#F9FAFB",
        "bg-tertiary": "#F2F4F7",
        "bg-quarterary": "#EAECF0",
        "bg-disabled_subtle": "#F9FAFB",

        "fg-white": "#ffffff",
        "fg-primary": "#101828",
        "fg-secondary-700": "#344054",    
        "fg-disabled": "#98A2B3",
        "fg-disabled_subtle": "#D0D5DD",
        "fg-quarterary": "#667085",
        "fg-quaternary-500": "#667085",
        "fg-quinary": "#98A2B3",
        "fg-quinary-400": "#98A2B3",

        "brand-secondary-2": "#a80b48",
        "brand-tertiary": "#7F56D9",
        "brand-solid": "#C00C53",
        "brand-solid_hover": "#A80B48",

        "avatar-bg": "#F2F4F7",
        "avatar-contrast-border": "rgba(0, 0, 0, 0.08)",
        "avatar-focus-border": "rgba(152, 162, 179, 0.14)"
      },
      lineHeight: {
        "xxs": "14px",
        "sm": "20px",
        "md": "24px",
        "lg": "28px",

        "display-xs": "32px",
        "display-md": "44px",
        "display-lg": "60px",
        "display-2xl": "90px"
      },
      spacing: {
        "xxs": "2px",
        "xs": "4px",
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "48px",
        "7xl": "64px",
        "9xl": "90px"
      },
      boxShadow: {
        "btn-primary": "0 1px 2px 0 rgba(16,24,40,.05)",
        "btn-primary-focus": "0 1px 2px 0 rgba(16,24,40,.05), 0 0 0 4px rgba(152,162,179,.14)",
        "sm": "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        "lg": "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        "xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "ring-gray-shadow-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(152, 162, 179, 0.14)",
        "ring-gray-secondary": "0px 0px 0px 4px rgba(152, 162, 179, 0.20)",
        "ring-brand-shadow-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(216, 14, 93, 0.24)",
        "ring-error-shadow-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(240, 68, 56, 0.24)",
        "ring-gray": "0px 0px 0px 4px rgba(152, 162, 179, 0.14)",
        "ring-brand": "0px 0px 0px 4px rgba(216, 14, 93, 0.24)"
      },
      strokeWidth: {
        "sm": "1.33px",
        "md": "1.66667px",
        "lg": "2px"
      },
      backdropBlur: {
        "lg": '24px',
      },
      borderRadius: {
        "xs": '4px',
        "sm": '6px',
        "md": '8px'
      }
    },
  },
  plugins: [],
};