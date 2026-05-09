import { Box, Typography } from "@mui/material";
import Container from "@components/container";
import SocialButton from "@components/socialButton";
import { navigationLinks, socials } from "./data";
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
                <Typography key={item.label} sx={styles.navLink}>
                  {item.label}
                </Typography>
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
                    <Icon />
                  </SocialButton>
                );
              })}
            </Box>

            <Typography sx={styles.location}>Yaoundé, Cameroun</Typography>
          </Box>
        </Box>
      </Container>

      {/* BOTTOM */}
      <Box sx={styles.bottom}>
        <Typography sx={styles.copyright}>
          © 2026 Assan Mbete. Conçu avec soin.
        </Typography>
      </Box>
    </Box>
  );
}
