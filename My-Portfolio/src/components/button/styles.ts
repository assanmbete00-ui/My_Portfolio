import { PRIMARY, PRIMARY_LIGHT, TEXT_PRIMARY, TEXT_DARK } from "@constants/colors";

const styles = {
  contained: {
    minWidth: 180,
    py: 1.6,
    borderRadius: "12px",
    backgroundColor: PRIMARY,
    fontWeight: 600,
    boxShadow: "none",

    "&:hover": {
      backgroundColor: PRIMARY_LIGHT,
      boxShadow: "none",
    },
  },

  outlined: {
    minWidth: 180,
    py: 1.6,
    borderRadius: "12px",
    borderColor: "rgba(255,255,255,0.15)",
    color: TEXT_PRIMARY,

    "&:hover": {
      borderColor: PRIMARY,
      backgroundColor: "rgba(255,255,255,0.03)",
    },
  },

  text: {
    minWidth: 0,
    px: 0,
    py: 0,
    borderRadius: "0",
    color: TEXT_DARK,
    backgroundColor: "transparent",
    textTransform: "none",

    "&:hover": {
      backgroundColor: "transparent",
      color: PRIMARY,
    },
  },
};

export default styles;
