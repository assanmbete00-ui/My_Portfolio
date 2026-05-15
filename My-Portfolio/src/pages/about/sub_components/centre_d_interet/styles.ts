import { COLORS } from "@constants/colors";

const styles = {
  section: {
    py: {
      xs: 8,
      md: 12,
    },

    backgroundColor: COLORS.background.footer,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2,1fr)",
      lg: "repeat(4,1fr)",
    },

    gap: 3,
    mt: 6,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    px: 3,
    py: 3,
    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-4px)",
       border: COLORS.primary.main,
    },
  },

  text: {
    color: COLORS.text.auther,
    fontWeight: 600,
    lineHeight: 1.6,
    fontSize: "1rem",
  },
};

export default styles;