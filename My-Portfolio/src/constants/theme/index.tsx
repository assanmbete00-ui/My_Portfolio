import { createTheme } from "@mui/material/styles";
import { COLORS } from "../colors";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: COLORS.primary.main,
      light: COLORS.primary.light,
      dark: COLORS.primary.dark,
    },

    secondary: {
      main: COLORS.secondary.main,
      light: COLORS.secondary.light,
      dark: COLORS.secondary.dark,
    },

    background: {
      default: COLORS.background.default,
      paper: COLORS.background.paper,
    },

    text: {
      primary: COLORS.text.primary,
      secondary: COLORS.text.secondary,
    },

    divider: COLORS.divider,
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontFamily: "Playfair Display, serif",
      fontSize: "3.5rem",
      fontWeight: 600,
    },

    h2: {
      fontFamily: "Playfair Display, serif",
      fontSize: "2.5rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      color: COLORS.text.secondary,
    },

    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});