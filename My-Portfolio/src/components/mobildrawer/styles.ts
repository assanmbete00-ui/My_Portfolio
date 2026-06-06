import { PRIMARY, WHITE } from "@constants/colors";

const styles = {
  paper: {
    width: 260,
    backgroundColor: WHITE,
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
      color: PRIMARY,
      fontWeight: 600,
    },
  },

  activeNavLink: {
    color: PRIMARY,
  },
};

export default styles;