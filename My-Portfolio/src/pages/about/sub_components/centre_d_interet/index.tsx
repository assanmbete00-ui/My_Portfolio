import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Container from "@components/container";
import SectionTitle from "@components/sectionTitle";
import styles from "./styles";

const interests = [
  "Technologies émergentes",
  "Design d’interfaces et expérience utilisateur",
  "Voyages et découvertes culturelles",
  "Football et sports en général",
  "Films et séries",
];

const MotionBox = motion(Box);

export default function Interests() {
  return (
    <Box sx={styles.section}>
      <Container>
        <SectionTitle
          subtitle="CENTRES D’INTÉRET"
          title="Ce qui nourrit ma curiosité."
        />

        <Box sx={styles.grid}>
          {interests.map((item, index) => (
            <MotionBox
              key={item}
              sx={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Typography sx={styles.text}>
                {item}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}