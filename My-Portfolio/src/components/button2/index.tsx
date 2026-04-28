import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
//import { COLORS } from "@constants/colors";

interface CustomButton2Props extends ButtonProps {
  component?: React.ElementType;
  to?: string;
}
const CustomButton: React.FC<CustomButton2Props> = ({ sx, ...props }) => (
            <Button
                  variant="contained"
                  sx={{
                    alignSelf: "flex-start",
                    backgroundColor: "#E67E22",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#cf711f",
                    },
                    ...sx,
                  }}
                  {...props}
                />
);

export default CustomButton;