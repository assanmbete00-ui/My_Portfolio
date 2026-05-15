import { type ElementType } from "react";
import MUIButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import styles from "./styles";

type CustomButtonProps<C extends ElementType = typeof MUIButton> =
  ButtonProps<C> & {
    customVariant?: "contained" | "outlined" | "text";
    to?: string;
  };

export default function Button<C extends ElementType = typeof MUIButton>({
  customVariant = "contained",
  sx,
  children,
  ...rest
}: CustomButtonProps<C>) {
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
