import { useState } from "react"
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"

import styles from "./style"
import type { NavItem } from "./types"

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
]

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>

        {/* LOGO */}
        <Typography
          sx={styles.logo}
          onClick={() => navigate("/")}
        >
          Assan Mbete
        </Typography>

        {/* DESKTOP NAV */}
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

        {/* MOBILE MENU */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* DRAWER MOBILE */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 250, pt: 2 }}>
            <List>
              {navItems.map((item) => (
                <ListItem disablePadding key={item.path}>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

      </Toolbar>
    </AppBar>
  )
}