import { COLORS } from "@constants/colors";

const styles = {
  button: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "1px solid #D6D9E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.text.secondary,
    transition: "0.3s ease",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: COLORS.primary.main,
      color: "#FFFFFF",
      borderColor: COLORS.primary.main,
      transform: "translateY(-3px)",
    },
  },
};

export default styles;