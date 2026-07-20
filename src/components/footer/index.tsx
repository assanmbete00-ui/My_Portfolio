import { Box, Typography } from "@mui/material";
import Container from "@components/container";
import SocialButton from "@components/socialButton";
import { navigationLinks, socials } from "./data";
import { NavLink,} from "react-router-dom";
import styles from "./style";

export default function Footer() {
  return (
    <Box component="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.top}>
          <Box>
            <Typography sx={styles.title}>Assan Mbete</Typography>

            <Typography sx={styles.description}>
              Je conçois des produits web rapides, accessibles et soignés
              jusqu'au moindre détail.
            </Typography>
          </Box>

          <Box>
            <Typography sx={styles.sectionTitle}>Navigation</Typography>

            <Box sx={styles.nav}>
              {navigationLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) => ({
                    ...styles.navLink,
                    ...(isActive ? styles.activeNavLink : {}),
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={styles.sectionTitle}>Ailleurs</Typography>

            <Box sx={styles.socials}>
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <SocialButton key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit" }}
                    >
                      <Icon />
                    </a>
                  </SocialButton>
                );
              })}
            </Box>

            <Typography sx={styles.location}>Yaoundé, Cameroun</Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={styles.bottom}>
        <Typography sx={styles.copyright}>
          © 2026 Assan Mbete. Conçu avec soin.
        </Typography>
      </Box>
    </Box>
  );
}
