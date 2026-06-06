import { PRIMARY, HERO_GRADIENT, WHITE, TEXT_SECONDARY } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: HERO_GRADIENT,

    py: {
      xs: 10,
      md: 16,
    },

    textAlign: "center",
  },

  subtitle: {
    color: PRIMARY,
    fontWeight: 700,
    letterSpacing: "4px",
    textTransform: "uppercase",
    mb: 3,
    fontSize: "2rem",
  },

  title: {
    color: WHITE,
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    lineHeight: 1.1,
    mb: 4,

    fontSize: {
      xs: "2.8rem",
      md: "5rem",
    },
  },

  description: {
    color: TEXT_SECONDARY,
    lineHeight: 1.8,
    maxWidth: "700px",
    margin: "0 auto",
    mb: 5,

    fontSize: {
      xs: "1rem",
      md: "1.15rem",
    },
  },
};

export default styles;
