import { COLORS } from "@constants/colors";

const styles = {
  section: {
    width: "100%",
    background:
      "linear-gradient(135deg, #111827 0%, #1A2238 100%)",

    py: {
      xs: 10,
      md: 16,
    },

    textAlign: "center",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },

  subtitle: {
    color: COLORS.primary.main,
    fontWeight: 700,
    letterSpacing: "4px",
    textTransform: "uppercase",
    mb: 3,
    fontSize: "0.85rem",
  },

  title: {
    color: "#FFFFFF",
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
    color: "#7B859F",
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