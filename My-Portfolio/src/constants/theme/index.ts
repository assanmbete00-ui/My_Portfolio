import { createTheme } from "@mui/material/styles";

import {
  PRIMARY,
  PRIMARY_LIGHT,
  PRIMARY_DARK,
  WHITE,
  
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  DIVIDER,
} from "../colors";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: PRIMARY,
      light: PRIMARY_LIGHT,
      dark: PRIMARY_DARK,
      contrastText: WHITE,
    },

    secondary: {
      main: WHITE,
    },

    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },

    divider: DIVIDER,
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.1,
    },

    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.1,
    },

    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        },

        a: {
          textDecoration: "none",
          color: "inherit",
        },

        "*": {
          boxSizing: "border-box",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
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

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});