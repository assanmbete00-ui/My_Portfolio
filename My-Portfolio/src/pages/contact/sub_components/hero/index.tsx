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
              subtitle="Contact"
              title={`Construisons quelque chose qui mérite d'exister.`}
              titleColor= "#fff"
              description={`Écrivez un mot sur votre projet, posez une question, 
                ou venez simplement dire bonjour.`}
            />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}
