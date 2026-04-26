import type { ContainerProps } from "@mui/material/Container"
import MUIContainer from "@mui/material/Container"

export default function Container(props: ContainerProps) {
  return (
    <MUIContainer
      {...props}
      maxWidth={"xl"}
      disableGutters
      sx={{
        "&.MuiContainer-root": {
          maxWidth: "1920px!important"
        },
        height: "100%",
        ...props?.sx
      }}
    />
  )
}

