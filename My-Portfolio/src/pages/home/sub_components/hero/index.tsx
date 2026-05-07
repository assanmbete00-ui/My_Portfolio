import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
//import Container from "@components/container";
import Button from "@components/button";
import styles from "./styles";

export default function Hero() {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.content}>
        {/* AVAILABILITY */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={styles.availabilityContainer}
        >
          <Box sx={styles.availabilityDot} />

          <Typography sx={styles.availabilityText}>
            Disponible pour de nouveaux projets
          </Typography>
        </Box>

        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={styles.title}
        >
          Bonjour, je suis Assan. <br />
          Full-Stack
          <br />
          <Box component="span" sx={styles.highlight}>
            Developer
          </Box>
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
          }}
          sx={styles.description}
        >
          Je conçois des produits web rapides, accessibles et soignés jusqu'au
          moindre détail.
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          sx={styles.buttonsContainer}
        >
          <Button customVariant="contained">Voir mes projets</Button>
          <Button customVariant="outlined">Me contacter</Button>
        </Box>
      </Box>
    </Box>
  );
}
