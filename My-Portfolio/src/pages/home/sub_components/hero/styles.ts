import {HERO_GRADIENT, 
  TEXT_PRIMARY, 
  TEXT_SECONDARY, PRIMARY  } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: HERO_GRADIENT,
  },

  content: {
    width: "100%",
    maxWidth: "1440px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 4, lg: 6 },
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      md: "flex-start",
    },

    justifyContent: "center",
    textAlign: {
      xs: "center",
      md: "left",
    },

    py: {
      xs: 10,
      md: 0,
    },
  },

  availabilityContainer: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    px: 2,
    py: 1,
    mb: 3,
    borderRadius: "999px",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#22C55E",
  },

  availabilityText: {
    fontSize: "0.9rem",
    color: TEXT_SECONDARY,
  },

  title: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    lineHeight: 1.1,
    color: TEXT_PRIMARY,
    mb: 3,
    maxWidth: "900px",
    fontSize: {
      xs: "2.8rem",
      sm: "4rem",
      md: "5.5rem",
      lg: "6.5rem",
    },
  },

  highlight: {
    color: PRIMARY,
  },

  description: {
    maxWidth: "720px",
    color: TEXT_SECONDARY,
    lineHeight: 1.9,
    mb: 5,
    fontSize: {
      xs: "1rem",
      md: "1.1rem",
    },
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,

    justifyContent: {
      xs: "center",
      md: "flex-start",
    },

    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
};

export default styles;
