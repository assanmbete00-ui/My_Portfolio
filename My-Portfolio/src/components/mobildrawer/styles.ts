import { COLORS } from "@constants/colors";

const styles = {
  paper: {
    width: 260,
    backgroundColor: "#FFFFFF",
    padding: "2rem 1.5rem",
  },

  header: {
    display: "flex",
    justifyContent: "flex-end",
  },

  navContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "2rem",
  },

  navLink: {
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#111827",
    transition: "0.3s ease",

    "&:hover": {
      color: COLORS.primary.main,
      fontWeight: 600,
    },
  },

  activeNavLink: {
    color: COLORS.primary.main,
  },
};

export default styles;