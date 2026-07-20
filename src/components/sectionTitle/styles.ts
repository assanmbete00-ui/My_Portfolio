import { PRIMARY, TEXT_DARK, TEXT_SECONDARY } from "@constants/colors";

const styles = {
  container: {
    mb: 6,
    textAlign: {
      xs: "center",
      md: "left",
    },
  },

  subtitle: {
    color: PRIMARY,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "2px",
    mb: 1,
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "1.2rem",
      lg: "1.3rem",
    },
  },

  title: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    lineHeight: 1.2,
    color: TEXT_DARK,
    fontSize: {
      xs: "2rem",
      sm: "2.4rem",
      md: "3rem",
      lg: "3.5rem",
    },
  },

  description: {
    mt: 2,
    maxWidth: "700px",
    color: TEXT_SECONDARY,
    lineHeight: 1.8,
    fontSize: {
      xs: "0.95rem",
      sm: "1rem",
      md: "1.05rem",
      lg: "1.1rem",
    },

    mx: {
      xs: "auto",
      md: 0,
    },
  },
};

export default styles;
