import { COLORS } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    backgroundColor: "#e5e9ee",

    py: {
      xs: 8,
      md: 14,
    },
  },

  container: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "1.2fr 0.9fr",
    },

    gap: 5,
    alignItems: "start",
  },

  formCard: {
    backgroundColor: "#fff",
    border: "1px solid rgba(15,23,42,0.08)",
    borderRadius: "24px",

    p: {
      xs: 3,
      md: 5,
    },

    display: "flex",
    flexDirection: "column",
    gap: 4,
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  },

  title: {
    fontFamily: "Playfair Display, serif",
    color: COLORS.text.auther,
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: {
      xs: "2.4rem",
      md: "4rem",
    },
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
  },

  rightContent: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  infoCard: {
    backgroundColor: COLORS.background.footer,
    border: "1px solid rgba(15,23,42,0.08)",
    borderRadius: "24px",
    p: 4,
  },

  infoTitle: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    color: COLORS.text.auther,
    mb: 4,
    fontSize: "2rem",
  },

  icon: {
    color: COLORS.primary.main,
  },

  infoText: {
    color: COLORS.text.auther,
    fontWeight: 500,
  },

  location: {
    color: COLORS.text.secondary,
  },

  map: {
    overflow: "hidden",
    borderRadius: "24px",
    height: {
      xs: 300,
      md: 360,
    },

    border: "1px solid rgba(15,23,42,0.08)",
  },
};

export default styles;