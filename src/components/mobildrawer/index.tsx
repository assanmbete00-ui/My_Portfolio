import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import styles from "./styles";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;

  navLinks: {
    label: string;
    path: string;
  }[];
};

export default function MobileDrawer({
  open,
  onClose,
  navLinks,
}: MobileDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: styles.paper,
      }}
    >
      <Box sx={styles.header}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={styles.navContainer}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
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
    </Drawer>
  );
}