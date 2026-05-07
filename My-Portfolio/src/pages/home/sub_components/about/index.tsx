import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Container from "@components/container";
import Button from "@components/button";
import SectionTitle from "@components/sectionTitle";
import styles from "./styles";
import profileImage from "@assets/profils/profil1.jpeg";

export default function About() {
  return (
    <Box
      component="section"
      sx={styles.section}
    >
      <Container>
        <Box sx={styles.container}>
          {/* IMAGE */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={styles.imageContainer}
          >
            <Box
              component="img"
              src={profileImage}
              alt="profile"
              sx={styles.image}
            />
          </Box>

          {/* CONTENT */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={styles.content}
          >
            <SectionTitle
              subtitle="À PROPOS"
              title={`Un développeur avec un œil d’éditeur.`}
              description={`Huit ans à construire des logiciels en production dans la fintech, 
             la santé et les outils créatifs. J'attache une importance particulière à une 
             architecture propre, à des interfaces apaisées et à un travail qui tient dans le temps.`}
            />

            {/* BUTTON */}
            <Button
              customVariant="contained"
              sx={styles.button}
            >
              En savoir plus

              <ArrowForwardIcon sx={styles.icon} />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}