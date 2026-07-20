import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Container from "@components/container";
import Button from "@components/button";
import SectionTitle from "@components/sectionTitle";
import styles from "./styles";
import profileImage from "@assets/profils/profil1.jpeg";
import { Link as RouterLink } from "react-router-dom";

export default function About() {
  return (
    <Box component="section" sx={styles.section}>
      <Container>
        <Box sx={styles.container}>
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
              title={`Je conçois des expériences web qui font la différence.`}
              description={`Ingénieur en génie logiciel et développeur fullstack, 
                je transforme des idées en applications modernes, performantes et 
                centrées sur l’utilisateur. À travers ce portfolio, découvrez mon p
                arcours, mes projets et mes experiences.`}
            />

            {/* BUTTON */}
            <Button
              customVariant="contained"
              sx={styles.button}
              component={RouterLink}
              to="/about"
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
