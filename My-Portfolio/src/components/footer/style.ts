import { COLORS } from "@constants/colors";

const styles = {
  footer: {
    width: "100%",
    backgroundColor: COLORS.background.footer,
  },

  top: {
    py: {
      xs: 8,
      md: 10,
    },

    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1.2fr 1fr 1fr",
    },

    gap: 6,
  },

  title: {
    fontFamily: "Playfair Display, serif",
    color: COLORS.text.auther,
    fontWeight: 700,

    mb: 2,

    fontSize: {
      xs: "2rem",
      md: "2.5rem",
    },
  },

  description: {
    color: COLORS.text.secondary,

    lineHeight: 1.8,

    maxWidth: "320px",
  },

  sectionTitle: {
    color: COLORS.text.secondary,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    mb: 3,
    fontSize: "0.9rem",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  navLink: {
    color: COLORS.text.auther,
    cursor: "pointer",
    transition: "0.3s ease",
    width: "fit-content",

    "&:hover": {
      color: COLORS.primary.main,
    },
  },

  socials: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 3,
  },

  location: {
    color: COLORS.text.secondary,
  },

  bottom: {
    borderTop: "1px solid #E5E7EB",
    py: 3,
    textAlign: "center",
  },

  copyright: {
    color: COLORS.text.secondary,
    fontSize: "0.95rem",
  },
};

export default styles;