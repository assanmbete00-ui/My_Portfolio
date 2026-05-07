import { COLORS } from "@constants/colors";

const styles = {
  container: {
    mb: 6,
    textAlign: {
      xs: "center",
      md: "left",
    },
  },

  subtitle: {
    color: COLORS.primary.main,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "2px",
    mb: 1,
    fontSize: "0.9rem",
  },

  title: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    lineHeight: 1.2,
    color: COLORS.text.auther,
    fontSize: {
      xs: "2rem",
      md: "3rem",
    },
  },

  description: {
    mt: 2,
    maxWidth: "700px",
    color: COLORS.text.secondary,
    lineHeight: 1.8,
    fontSize: {
      xs: "1rem",
      md: "1.05rem",
    },

    mx: {
      xs: "auto",
      md: 0,
    },
  },
};

export default styles;