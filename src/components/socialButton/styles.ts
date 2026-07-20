import { PRIMARY, TEXT_SECONDARY } from "@constants/colors";

const styles = {
  button: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "1px solid #D6D9E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: TEXT_SECONDARY,
    transition: "0.3s ease",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: PRIMARY,
      color: "#FFFFFF",
      borderColor: PRIMARY,
      transform: "translateY(-3px)",
    },
  },
};

export default styles;