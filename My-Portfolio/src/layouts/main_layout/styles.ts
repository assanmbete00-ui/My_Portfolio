import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material";

const contentArea: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh", // Assure une hauteur minimale pour le viewport
};

const mainContent: SxProps<Theme> = (theme) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "auto",

  // animation propre MUI
  transition: theme.transitions.create(["margin", "padding"]),
});

const styles = {
  contentArea,
  mainContent,
};

export default styles;
