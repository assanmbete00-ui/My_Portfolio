
import { SxProps } from "@mui/material"
import { COLORS } from "@constants/colors"

const styles = {
  appBar: {
    backgroundColor: COLORS.background.paper,
    boxShadow: "none",
    borderBottom: "1px solid",
    borderColor: "divider",
  } as SxProps,

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as SxProps,

  logo: {
    fontWeight: 700,
    fontSize: "1.2rem",
    cursor: "pointer",
  } as SxProps,

  nav: {
    display: "flex",
    gap: 3,
  } as SxProps,
}

export default styles