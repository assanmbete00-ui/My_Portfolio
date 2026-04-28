import { Theme } from "@mui/material/styles"
import { COLORS } from "constants/colors"

const styles = {
  root: {
    backgroundColor: COLORS.background.paper,
    borderTop: "1px solid",
    borderColor: "divider",
    px: { xs: 3, md: "6vw" },
    py: { xs: 10, md: 12 },
  },

  grid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gap: 6,
    alignItems: "flex-start",
  },

  imageContainer: {
    aspectRatio: "4/5",
    maxWidth: "380px",
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: COLORS.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  location: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: "0.7rem",
    color: COLORS.text.secondary,
    background: COLORS.text.primary,
    padding: "2px 6px",
    borderRadius: "4px",
  },

  overline: {
    color: "primary.main",
    mb: 3,
  },

  title: {
    mb: 3,
  },

  text: {
    color: "text.secondary",
    mb: 2,
  },

  textLast: {
    color: "text.secondary",
    mb: 3,
  },

  chipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },

  chip: {
    borderColor: "primary.main",
    color: "primary.main",
    fontSize: "0.7rem",
  },
}

export default styles