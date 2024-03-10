module.exports = {
  //...
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        
        light: {
          primary: "#2c4",
          secondary: "#64f475",
          accent: "#5cd",
          neutral: "#2c1e34",
          "base-100": "#edecef",
          info: "#1361f1",
          success: "#24a86d",
          warning: "#e6b105",
          error: "#e04d7c",
        },
      },
      {
        dark: {
          primary: "#2c4",
          // "primary": "#4277ff",
          secondary: "#f943e1",
          accent: "#b5ff93",
          neutral: "#1f1e2e",
          "base-100": "#543455",
          info: "#5f9bd3",
          success: "#1d9663",
          warning: "#b57412",
          error: "#f96693",
        },
      },
      {
        admin: {
          primary: "#A508A5",
          // primary-content: "#A508A5",
          secondary: "#f97316",
          accent: "#b5ff93",
          neutral: "#1f1e2e",
          "base-100": "#ffffff",
          info: "#5f9bd3",
          success: "#1d9663",
          warning: "#b57412",
          error: "#f96693",
        },
      },
    ],
  },
};
