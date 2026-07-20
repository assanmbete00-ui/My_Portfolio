import { Theme } from "@mui/material/styles";
import { PRIMARY, HEADER_BG,TEXT_SECONDARY } from "@constants/colors";

const styles = {
  appBar: {
    backgroundColor: HEADER_BG,
      boxShadow: "none",
      borderBottom: "1px solid #F3F4F6",
      
  },

  toolbar: {
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    cursor: "pointer",
  },

  logoDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: PRIMARY,
  },

  logoText: {
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },

    fontWeight: 700,
    color: "#111827",
    letterSpacing: "-0.5px",
  },

  desktopNav: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),

  navLink: {
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    color: TEXT_SECONDARY,
    transition: "0.3s ease",

    "&:hover": {
      color: PRIMARY,
      fontWeight: 600,
    },
  },

  activeNavLink: {
    color: PRIMARY,
  },

  mobileMenuButton: (theme: Theme) => ({
    display: "none",
    color: PRIMARY,
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  }),
};

export default styles;