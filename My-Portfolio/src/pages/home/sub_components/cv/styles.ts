import { COLORS } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    backgroundColor: "#e5e9ee",

    py: {
      xs: 10,
      md: 16,
    },
  },

  content: {
    width: "100%",
    maxWidth: "1440px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 4, lg: 6 },
  },

  block: {
    mt: 10,
  },

  blockHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 4,
  },

  blockTitle: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    color: COLORS.text.auther,
    fontSize: {
      xs: "1.6rem",
      md: "2rem",
    },
  },

  viewAll: {
    color: COLORS.primary.main,
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "0.95rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      lg: "repeat(3, 1fr)",
    },

    gap: 4,
  },
};

export default styles;
