"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    secondary: {
      main: "#201034",
    },

    primary: {
      main: "#5D2E9A",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    color: '#ffffff', // Define a cor de texto para todas as variantes de tipografia
  },
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          background: "transparent",
        },
      },
    },
  },
});

export default theme;
