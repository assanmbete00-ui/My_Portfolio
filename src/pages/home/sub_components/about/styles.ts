import type { Theme } from "@mui/material/styles";
import { FOOTER_BG } from "@constants/colors";

const styles = {
 section: {
     width: "100vw",
     marginLeft: "calc(-50vw + 50%)",
     minHeight: "calc(100vh - 80px)",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     background: FOOTER_BG,
   },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: {
      xs: "column",
      md: "row",
    },

    gap: {
      xs: 8,
      md: 10,
    },
  },

  imageContainer: (theme: Theme) => ({
    flex: 1,
    width: "100%",
    maxWidth: "520px",
    borderRadius: "24px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  }),

  image: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },

  content: {
    flex: 1,
    maxWidth: "520px",
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      md: "flex-start",
    },
  },

  button: {
    minWidth: 170,
    py: 1.5,
    px: 3,
    borderRadius: "12px",
    backgroundColor: "#0F5D6C",
    fontWeight: 600,
    textTransform: "none",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "#0C4A57",
      boxShadow: "none",
    },
  },

  icon: {
    ml: 1,
    fontSize: "1rem",
  },
};

export default styles;