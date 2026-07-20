import { FOOTER_BG, TEXT_DARK, PRIMARY } from "@constants/colors";

const styles = {
  section: {
    py: {
      xs: 8,
      md: 12,
    },

   // backgroundColor: COLORS.background.footer,
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
    backgroundColor: FOOTER_BG,
    borderRadius: "14px",
    border: "1px solid rgba(15, 23, 42, 0.08)",

    px: 3,
    py: 3,
    transition: "0.3s",

    "&:hover": {
       border: PRIMARY,
    },
  },

  text: {
    color: TEXT_DARK,
    fontWeight: 600,
    lineHeight: 1.6,
    fontSize: "1rem",
  },
};

export default styles;