import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import { COLORS } from "constants/colors";

interface SectionTitleProps extends TypographyProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
}

const SectionTitle = ({
  children,
  align = "center",
  ...props
}: SectionTitleProps) => {
  return (
    <Typography
      variant="h4"
      {...props}
      sx={{
        fontWeight: "bold",
        textAlign: align,
        mb: 6,
        position: "relative",
        "&::after": {
          content: '""',
          display: "block",
          width: "60px",
          height: "4px",
          backgroundColor: COLORS.text.primary,
          margin: "12px auto 0",
         // borderRadius: "2px",
        },
        ...props?.sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
