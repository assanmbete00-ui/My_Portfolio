import { Theme } from "@mui/material/styles"
import { SxProps } from "@mui/material"

const container =
  (bgColor?: "primary" | "secondary"): SxProps<Theme> =>
  (theme) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",

    backgroundColor: bgColor
      ? theme.palette[bgColor].main
      : theme.palette.background.default,

    overflowX: "hidden",
  })

const styles = {
  container,
}

export default styles
