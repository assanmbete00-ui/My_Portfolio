import { COLORS } from "@constants/colors";

const styles = {
  title: {
    fontFamily: "Playfair Display, serif",
    color: COLORS.text.auther,
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
    color: COLORS.text.auther,
    fontSize: "0.95rem",
  },

  input: {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        backgroundColor: COLORS.background.footer,
        color: COLORS.text.auther,
  },
    mb: 3,
  },
};

export default styles;