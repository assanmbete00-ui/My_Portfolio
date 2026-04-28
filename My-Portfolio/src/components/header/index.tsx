import { useState } from "react"
import { AppBar, Toolbar, Typography, Button, IconButton, Box, } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"

import styles from "./style"
import navItems from "./navItems"
import MobileDrawer from "@components/mobildrawer"

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>

        <Typography
          sx={styles.logo}
          onClick={() => navigate("/")}
        >
          Assan Mbete
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        
        <MobileDrawer open={open} onClose={() => setOpen(false)} />

      </Toolbar>
    </AppBar>
  )
}