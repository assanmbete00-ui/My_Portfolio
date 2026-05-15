import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "@components/sectionTitle";
//import Button from "@components/button";
import ResumeCard from "@components/resumCard";
import { projectData } from "./data";
//import { Link as RouterLink } from "react-router-dom";
import styles from "./styles";

export default function Project() {
    return (
        <Box component="section" sx={styles.section}>
      <Box sx={styles.content}>
        <SectionTitle
          subtitle="3- PROJETS"
          title="Projets personnels et contributions."
        />
         <Box sx={styles.block}>

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
