import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'button': "url('/image/button.png')",
      },
      colors: {
        // FONDO
        "fondo": "#172225",
        "fondo-card": "#DFF4CC",
        "fondo-input-menu": "#101b1e",
        "fondo-btn-ingresar": "#CFEAC8",
        "fondo-button": "#1E1E1E",
        "fondo-sidebar": "#020404",
        "fondo-rojo": "#E03E1A",

        // TEXTO
        "texto-morado": "#2F2647",
        "texto-green": "#DFF4CC",
        "text-green-claro": "#CFEAC8",
        "input-fondo": "#2C2C2C",
        "title-blue": "#AFF6F1",
        "title-gray": "#F5F5F5",
        "title-green": "#CCE6C5",
        "title-card": "#2F2647",
        "precio-card": "#4D1B7F",
        "description-card": "#423760",

        //BORDER
        "borde-gray": "#728A90",
        "borde-negro": "#040708",
        "border-green": "#DFF4CC"

      }
    },
  },
  plugins: [],
};
export default config;
