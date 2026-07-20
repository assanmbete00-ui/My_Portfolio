import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "@components/sectionTitle";
import Button from "@components/button";
import ResumeCard from "@components/resumCard";
import { educationData, experienceData, projectData } from "./data";
import { Link as RouterLink } from "react-router-dom";
import styles from "./styles";

export default function Cv() {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.content}>
        <SectionTitle
          subtitle="TRAVAUX CHOISIS"
          title="Un aperçu du parcours."
          description="Quelques moments forts : études, studios où j'ai travaillé et projets que j'ai construits."
        />

        <Box sx={styles.block}>
          <Box sx={styles.blockHeader}>
            <Typography sx={styles.blockTitle}>Parcours</Typography>

            <Button
              customVariant="text"
              sx={styles.viewAll}
              component={RouterLink}
              to="/cv"
            >
              Tout voir
            </Button>
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
                  duration: 0.5,
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

        <Box sx={styles.block}>
          <Box sx={styles.blockHeader}>
            <Typography sx={styles.blockTitle}>Expérience</Typography>
            <Button
              customVariant="text"
              sx={styles.viewAll}
              component={RouterLink}
              to="/cv"
            >
              Tout voir
            </Button>
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
                  duration: 0.5,
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

        <Box sx={styles.block}>
          <Box sx={styles.blockHeader}>
            <Typography sx={styles.blockTitle}>Projets</Typography>

            <Button
              customVariant="text"
              sx={styles.viewAll}
              component={RouterLink}
              to="/cv"
            >
              Tout voir
            </Button>
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
                  duration: 0.5,
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
