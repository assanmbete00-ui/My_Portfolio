import { ReactNode, ComponentType } from "react"
import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"

import Container from "@components/container"
import BaseLayout from "@layouts/base_layout"

import styles from "./styles"

type MainLayoutProps = {
  HeaderComponent?: ComponentType
  FooterComponent?: ComponentType
  ContextProvider?: ComponentType<{ children: ReactNode }>
  bgColor?: "primary" | "secondary"
}

export default function MainLayout({
  HeaderComponent,
  FooterComponent,
  ContextProvider,
  bgColor
}: MainLayoutProps) {
  const content = (
    <Box sx={styles.contentArea}>
      {HeaderComponent && <HeaderComponent />}

      <Box sx={styles.mainContent}>
        <Container sx={{ flex: 1 }}>
          <Outlet />
        </Container>
      </Box>

      {FooterComponent && <FooterComponent />}
    </Box>
  )

  return (
    <BaseLayout bgColor={bgColor}>
      {ContextProvider ? (
        <ContextProvider>{content}</ContextProvider>
      ) : (
        content
      )}
    </BaseLayout>
  )
}