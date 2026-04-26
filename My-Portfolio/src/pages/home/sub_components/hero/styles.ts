
import { SxProps, Theme } from "@mui/material";

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 3,
  } as SxProps<Theme>,

  stack: {
    textAlign: "center",
    maxWidth: "700px",
  } as SxProps<Theme>,

  title: {
    fontWeight: "bold",
  } as SxProps<Theme>,

  name: {
    color: "#1976d2",
  } as SxProps<Theme>,

  role: {
    color: "text.secondary",
  } as SxProps<Theme>,

  description: {
    color: "text.secondary",
  } as SxProps<Theme>,

  actions: {
    justifyContent: "center",
  } as SxProps<Theme>,
};

export default styles;
