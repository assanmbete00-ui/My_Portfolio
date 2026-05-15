import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "@components/sectionTitle";
import styles from "./styles";

export default function Hero() {
  return (
    <Box component="section" sx={styles.section}>
        <Box sx={styles.container}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={styles.content}
          >
            <Box sx={styles.SectionTitle}>
            <SectionTitle 
              subtitle="Curriculum Vitæ"
              title={`La version longue, soigneusement organisée.`}
              titleColor="#fff"
              description={`Écoles fréquentées, équipes rejointes et projets livrés. 
                Chaque entrée se développe avec détails et liens.`}
            />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}
