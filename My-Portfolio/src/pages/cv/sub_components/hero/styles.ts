import { COLORS } from "@constants/colors";

const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: COLORS.background.gradient,
  },

  container: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },

    gap: {
      xs: 8,
      md: 10,
    },
  },

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  SectionTitle: {
    mb: 2,
    textAlign: {
      xs: "center",
      md: "left",
    },
  },

  icon: {
    ml: 1,
    fontSize: "1rem",
  },
};

export default styles;