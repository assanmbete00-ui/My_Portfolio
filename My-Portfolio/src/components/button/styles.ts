import { COLORS } from "@constants/colors";

const styles = {
  contained: {
    minWidth: 180,
    py: 1.6,
    borderRadius: "12px",
    backgroundColor: COLORS.primary.main,
    fontWeight: 600,
    boxShadow: "none",

    "&:hover": {
      backgroundColor: COLORS.primary.dark,
      boxShadow: "none",
    },
  },

  outlined: {
    minWidth: 180,
    py: 1.6,
    borderRadius: "12px",
    borderColor: "rgba(255,255,255,0.15)",
    color: COLORS.text.primary,

    "&:hover": {
      borderColor: COLORS.primary.main,
      backgroundColor: "rgba(255,255,255,0.03)",
    },
  },

  text: {
    minWidth: 0,
    px: 0,
    py: 0,
    borderRadius: "0",
    color: COLORS.text.auther,
    backgroundColor: "transparent",
    textTransform: "none",

    "&:hover": {
      backgroundColor: "transparent",
      color: COLORS.primary.main,
    },
  },
};

export default styles;
