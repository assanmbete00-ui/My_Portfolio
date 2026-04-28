import { createTheme } from "@mui/material/styles"
import { COLORS } from "../colors";  

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: COLORS.primary.main,
    },

    secondary: {
      main: COLORS.secondary.main,
    },

    background: {
      default: COLORS.background.default,
      paper: COLORS.background.paper,
    },

    text: {
      primary: COLORS.text.primary,
      secondary: COLORS.text.secondary,
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
})