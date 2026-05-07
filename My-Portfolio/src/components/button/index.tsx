import MUIButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import styles from "./styles";

type CustomButtonProps = ButtonProps & {
  customVariant?: "contained" | "outlined" | "text";
};

export default function Button({
  customVariant = "contained",
  sx,
  children,
  ...rest
}: CustomButtonProps) {
  return (
    <MUIButton
      variant={customVariant}
      sx={{
        ...styles[customVariant],
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MUIButton>
  );
}
