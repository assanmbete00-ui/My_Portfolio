import { COLORS } from "@constants/colors";

const styles = {
  content: {
    padding: "1.5rem",
  },

  period: {
    color: COLORS.primary.main,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    mb: 2,
  },

  title: {
    color: COLORS.text.auther,
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
    color: COLORS.text.auther,
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      backgroundColor: "transparent",
      color: COLORS.primary.main,
    },
  },

  icon: {
    ml: 1,
    fontSize: "1rem",
  },
};

export default styles;