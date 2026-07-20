import { FOOTER_BG, PRIMARY, TEXT_DARK, TEXT_SECONDARY } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
   // backgroundColor: FOOTER_BG,
    

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
    backgroundColor: FOOTER_BG,
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
    color: TEXT_DARK,
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
    color: TEXT_DARK,
    fontSize: "0.95rem",
  },

  input: {
    
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: FOOTER_BG,
      color: TEXT_DARK,
    },
  },

  rightContent: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  infoCard: {
    backgroundColor: FOOTER_BG,
    border: "1px solid rgba(15,23,42,0.08)",
    borderRadius: "24px",
    p: 4,
  },

  infoTitle: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    color: TEXT_DARK,
    mb: 4,
    fontSize: "2rem",
  },

  icon: {
    color: PRIMARY,
  },

  infoText: {
    color: TEXT_DARK,
    fontWeight: 500,
  },

  location: {
    color: TEXT_SECONDARY,
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