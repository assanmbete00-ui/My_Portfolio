import { PRIMARY, FOOTER_BG, TEXT_DARK} from "@constants/colors";

const styles = {
  card: {
    p: 4,
    borderRadius: "24px",
    border: "1px solid rgba(15,23,42,0.08)",
    backgroundColor: FOOTER_BG,
  },

  title: {
    fontSize: "2rem",
    fontWeight: 700,
    mb: 4,
    color: TEXT_DARK,
  },

  icon: {
    color: PRIMARY,
  },

  text: {
    fontWeight: 500,
      color: TEXT_DARK,
  },

  location: {
    color: "#6B7280",
  },
};

export default styles;