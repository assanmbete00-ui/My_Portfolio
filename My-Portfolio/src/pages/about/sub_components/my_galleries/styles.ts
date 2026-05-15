import { COLORS } from "@constants/colors";

const styles = {
  section: {
    backgroundColor: COLORS.background.footer,
    py: {
      xs: 8,
      md: 14,
    },
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2,1fr)",
      md: "repeat(3,1fr)",
    },

    gap: 2,
    mt: 6,
    alignItems: "start",
  },

  imageWrapper: {
    overflow: "hidden",
    borderRadius: "18px",
  },

  largeImage: {
    gridRow: {
      md: "span 2",
    },
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "0.4s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
};

export default styles;