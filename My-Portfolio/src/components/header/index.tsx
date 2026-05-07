import { useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "@components/container";
import MobileDrawer from "../mobildrawer";
import styles from "./style";
import { navLinks } from "./navItems";

export default function Header() {
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <Container>
          <Toolbar sx={styles.toolbar}>

            <Box
              sx={styles.logoContainer}
              onClick={() => navigate("/")}
            >
              <Box sx={styles.logoDot} />

              <Typography sx={styles.logoText}>
                Assan Mbete
              </Typography>
            </Box>

            <Box sx={styles.desktopNav}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    ...styles.navLink,
                    ...(isActive
                      ? styles.activeNavLink
                      : {}),
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </Box>

            <IconButton
              sx={styles.mobileMenuButton}
              onClick={handleOpenDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileDrawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        navLinks={navLinks}
      />
    </>
  );
}