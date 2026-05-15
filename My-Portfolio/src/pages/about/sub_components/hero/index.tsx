import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
//import Container from "@components/container";
import profil from "@assets/profils/profil0.jpeg";
import styles from "./styles";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box sx={styles.section}>
        <Box sx={styles.container} >
          
          <MotionBox
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              component="img"
              src={profil}
              alt="Assan Mbete"
              sx={styles.image}
            />
          </MotionBox>

          <MotionBox
            sx={styles.content}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography sx={styles.subtitle}>
              À PROPOS DE MOI
            </Typography>

            <Typography sx={styles.title}>
               Ingénieur en Génie Logiciel    
              <br />
              Développeur Fullstack.
            </Typography>

            <Typography sx={styles.description}>
             Je m'appelle<strong> Assan Mbete</strong>, originaire de <strong> Foumban,</strong> 
             une ville située dans la région de l’Ouest du Cameroun.
            </Typography>

            <Typography sx={styles.description}>
             Après l’obtention de mon baccalauréat, je me suis inscrit dans 
             une institution de formation professionnelle où j’ai suivi un  cursus de deux ans, 
             sanctionné par l’obtention d’un <strong> Brevet de Technicien Supérieur (BTS) en Gestion des Systèmes d’Information (GSI)</strong>.
            </Typography>

            <Typography sx={styles.description}>
             Animé par une passion pour les technologies du numérique, j’ai poursuivi 
             ma formation en développement web fullstack à la <strong>Fondation Lapnomba</strong> pendant une durée d’un an.
            </Typography>

            <Typography sx={styles.description}>
             Aujourd’hui, je suis <strong>ingénieur en génie logiciel</strong> et j’exerce également en tant que 
             <strong>formateur au sein de la Fondation Lapnomba</strong>, où je transmets mes compétences et accompagne 
             de futurs développeurs dans leur parcours.
            </Typography>
          </MotionBox>
        </Box>
    </Box>
  );
}