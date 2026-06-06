import { PRIMARY, TEXT_DARK } from "@constants/colors";

const styles = {
  content: {
    padding: "1.5rem",
  },

  period: {
    color: PRIMARY,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    mb: 2,
  },

  title: {
    color: TEXT_DARK,
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    lineHeight: 1.3,
    mb: 2,
    fontSize: "1.55rem",
  },

  description: {
    color: "#6B7280",
    lineHeight: 1.8,
    mb: 4,
    fontSize: "0.96rem",
  },

  button: {
    p: 0,
    minWidth: "auto",
    color: TEXT_DARK,
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      backgroundColor: "transparent",
      color: PRIMARY,
    },
  },

  icon: {
    ml: 1,
    fontSize: "1rem",
  },
};

export default styles;