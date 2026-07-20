import { FOOTER_BG, TEXT_DARK } from "@constants/colors";

const styles = {
  title: {
    fontFamily: "Playfair Display, serif",
    color: TEXT_DARK,
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: {
      xs: "2.4rem",
      md: "4rem",
    },
    mb: 5,
  },

    label: {
    mb: 1.2,
    fontWeight: 600,
    color: TEXT_DARK,
    fontSize: "0.95rem",
  },

  input: {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        backgroundColor: FOOTER_BG,
        color: TEXT_DARK,
  },
    mb: 3,
  },
};

export default styles;