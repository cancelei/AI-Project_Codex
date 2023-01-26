// import "vuetify/styles";
import { createVuetify } from "vuetify";

// for testing
export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    variations: {
      colors: ["primary", "secondary", "info", "warning", "error", "success"],
      lighten: 5,
      darken: 5,
    },
    themes: {
      myCustomTheme: {
        dark: true,
        variables: {}, // ✅ this property is required to avoid Vuetify crash

        colors: {
          //green: '#00ff00' // cannot use primary color names here, so use a custom color name (such as 'greenish')

          // Workaround: Custom colors seem to erase default colors, so we need to include the default colors (of `light` or `dark` theme)

          primary: "#0A68FF",
          secondary: "#647283",
          info: "#8C8DFF",
          warning: "#DB9E55",
          error: "#FF316F",
          success: "#27CE88",
        },
      },
    },
  },
});
