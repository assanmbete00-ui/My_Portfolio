import { SxProps, Theme } from "@mui/material";

const styles = {
  container: {
    padding: "64px 16px",
    display: "flex",
    justifyContent: "center",
  } as SxProps<Theme>,

  content: {
    maxWidth: "1100px",
    width: "100%",
  } as SxProps<Theme>,

  grid: {
    marginTop: "32px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 3,
  } as SxProps<Theme>,

  gridItem: {
    flex: { xs: "1", md: "1 1 50%" },
  } as SxProps<Theme>,

  title: {
    fontWeight: 700,
    textAlign: "center",
  } as SxProps<Theme>,

  text: {
    color: "text.secondary",
    lineHeight: 1.7,
  } as SxProps<Theme>,

  card: {
    padding: "24px",
    borderRadius: 3,
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-5px)",
    },
  } as SxProps<Theme>,

  skillItem: {
    padding: "6px 12px",
    borderRadius: "20px",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontSize: "0.8rem",
  } as SxProps<Theme>,

  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    marginTop: "10px",
  } as SxProps<Theme>,
};

export default styles;
