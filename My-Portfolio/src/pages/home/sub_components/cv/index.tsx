import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
//import Container from "@components/container";
import SectionTitle from "@components/sectionTitle";
import ResumeCard from "@components/resumCard";
import { educationData, experienceData, projectData } from "./data";
import styles from "./styles";

export default function Cv() {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.content}>
        {/* SECTION TITLE */}
        <SectionTitle
          subtitle="TRAVAUX CHOISIS"
          title="Un aperçu du parcours."
          description="Quelques moments forts : études, studios où j'ai travaillé et projets que j'ai construits."
        />

        {/* EDUCATION */}
        <Box sx={styles.block}>
          <Box sx={styles.blockHeader}>
            <Typography sx={styles.blockTitle}>Parcours</Typography>

            <Typography sx={styles.viewAll}>Tout voir</Typography>
          </Box>

          <Box sx={styles.grid}>
            {educationData.map((item, index) => (
              <Box
                key={item.id}
                component={motion.div}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <ResumeCard
                  image={item.image}
                  period={item.period}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* EXPERIENCE */}
        <Box sx={styles.block}>
          <Box sx={styles.blockHeader}>
            <Typography sx={styles.blockTitle}>Expérience</Typography>

            <Typography sx={styles.viewAll}>Tout voir</Typography>
          </Box>

          <Box sx={styles.grid}>
            {experienceData.map((item, index) => (
              <Box
                key={item.id}
                component={motion.div}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <ResumeCard
                  image={item.image}
                  period={item.period}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* PROJECTS */}
        <Box sx={styles.block}>
          <Box sx={styles.blockHeader}>
            <Typography sx={styles.blockTitle}>Projets</Typography>

            <Typography sx={styles.viewAll}>Tout voir</Typography>
          </Box>

          <Box sx={styles.grid}>
            {projectData.map((item, index) => (
              <Box
                key={item.id}
                component={motion.div}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <ResumeCard
                  image={item.image}
                  period={item.period}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
