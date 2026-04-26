import { ReactNode } from "react";
import { Stack, Box } from "@mui/material";

import { AppContextProvider } from "@contexts/app_context";

import styles from "./styles";

type BaseLayoutProps = {
  children: ReactNode;
  bgColor?: "primary" | "secondary";
};

export default function BaseLayout({ children, bgColor }: BaseLayoutProps) {
  return (
    <AppContextProvider>
      <Box sx={styles.container(bgColor)}>
        <Stack width="100%">{children}</Stack>
      </Box>
    </AppContextProvider>
  );
}
