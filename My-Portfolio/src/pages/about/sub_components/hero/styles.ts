import { HERO_GRADIENT, PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: HERO_GRADIENT,
    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1440px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 4, lg: 6 },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: {
      xs: "column",
      md: "row",
    },
  },

  image: {
    width: "100%",
    maxWidth: {
      xs: "320px",
      md: "420px",
    },

    borderRadius: "24px",
    objectFit: "cover",
    flexShrink: 0,
  },

  content: {
    maxWidth: "720px",
    textAlign: {
      xs: "center",
      md: "left",
    },
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
    fontFamily: "Playfair Display, serif",
    color: TEXT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1,
    mb: 4,
    fontSize: {
      xs: "3rem",
      sm: "4rem",
      md: "5.5rem",
    },
  },

  description: {
    color: TEXT_SECONDARY,
    lineHeight: 1.9,
    mb: 3,

    fontSize: {
      xs: "1rem",
      md: "1.15rem",
    },

    maxWidth: "680px",
  },
};

export default styles;