import { Box } from "@mui/material";

import styles from "./styles";

type SocialButtonProps = {
  children: React.ReactNode;
};

export default function SocialButton({
  children,
}: SocialButtonProps) {
  return (
    <Box sx={styles.button}>
      {children}
    </Box>
  );
}