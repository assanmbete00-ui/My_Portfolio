import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Container from "@components/container";
import SectionTitle from "@components/sectionTitle";
import styles from "./styles";
import { images } from "./data";

const MotionBox = motion(Box);

export default function Gallery() {
  return (
    <Box sx={styles.section}>
      <Container>
        <SectionTitle
          subtitle="GALERIE"
          title="Conférences, meetups et nuits blanches."
          description="Une petite archive des événements, hackathons et rencontres auxquels j'ai pris part."
        />

        <Box sx={styles.grid}>
          {images.map((image, index) => (
            <MotionBox
              key={index}
              sx={{
                ...styles.imageWrapper,
                ...(index === 0 && styles.largeImage),
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src={image}
                alt="gallery"
                sx={styles.image}
              />
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}