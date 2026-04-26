import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { COLORS } from "@constants/colors";

interface CustomButtonProps extends ButtonProps {
  component?: React.ElementType;
  to?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ sx, ...props }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: COLORS.primary.main,
      color: COLORS.text.primary,
      textTransform: "none",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: COLORS.primary.dark,
        opacity: 0.8,
      },
      ...sx,
    }}
    {...props}
  />
);

export default CustomButton;
