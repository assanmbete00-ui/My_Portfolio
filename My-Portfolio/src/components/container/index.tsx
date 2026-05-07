import MUIContainer from "@mui/material/Container";
import type { ContainerProps } from "@mui/material/Container";
export default function Container({
  children,
  sx,
  ...rest
}: ContainerProps) {
  
  return (
    <MUIContainer
      maxWidth={false}
      disableGutters
      {...rest}
      sx={{
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4, lg: 6},
        ...sx,
      }}
    >
      {children}
    </MUIContainer>
  );
}