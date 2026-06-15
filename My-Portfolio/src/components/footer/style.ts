import {
  FOOTER_BG,
  TEXT_DARK,
  TEXT_SECONDARY,
  TEXT_PRIMARY,
  PRIMARY,
} from "@constants/colors";

const styles = {
  footer: {
    width: "100%",
    backgroundColor: FOOTER_BG,
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
    color: TEXT_DARK,
    fontWeight: 700,

    mb: 2,

    fontSize: {
      xs: "2rem",
      md: "2.5rem",
    },
  },

  description: {
    color: TEXT_SECONDARY,
    lineHeight: 1.8,
    maxWidth: "320px",
  },

  sectionTitle: {
    color: TEXT_SECONDARY,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    mb: 3,
    fontSize: "0.9rem",

    "&:hover": {
      textdecoration: "underline",
    }
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  navLink: {
    color: TEXT_DARK,
    cursor: "pointer",
    transition: "0.3s ease",
    width: "fit-content",
    textDecoration: "none",

    "&:hover": {
      color: PRIMARY,
    },
  },

  activeNavLink: {
    color: PRIMARY,
  },

  socials: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 3,
  },

  location: {
    color: TEXT_SECONDARY,
  },

  bottom: {
    borderTop: "1px solid " + TEXT_PRIMARY,
    textAlign: "center",
  },

  copyright: {
    color: TEXT_SECONDARY,
    fontSize: "0.95rem",
  },
};

export default styles;
