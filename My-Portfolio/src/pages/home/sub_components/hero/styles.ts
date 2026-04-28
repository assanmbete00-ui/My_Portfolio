import { SxProps, Theme } from "@mui/material";
import { COLORS } from "@constants/colors";

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 3,
  } as SxProps,

  stack: {
    textAlign: "center",
    maxWidth: "700px",
  } as SxProps,

  title: {
    fontWeight: "bold",
  } as SxProps,

  name: {
    color: COLORS.primary.main,
  } as SxProps,

  role: {
    color: COLORS.text.secondary,
  } as SxProps,

  description: {
    color: COLORS.text.secondary,
  } as SxProps,

  actions: {
    justifyContent: "center",
  } as SxProps,
};

export default styles;
