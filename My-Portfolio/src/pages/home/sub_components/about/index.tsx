import { Box, Typography, Stack } from "@mui/material";

import styles from "./styles";
import skills from "./skills";

export default function About() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
  
        <Typography variant="h4" sx={styles.title}>
          À propos de moi
        </Typography>

        <Typography sx={{ ...styles.text, mt: 2 }} textAlign="center">
          Je suis un développeur passionné spécialisé dans la création
          d’applications web modernes avec React, TypeScript et MUI. J’aime
          concevoir des interfaces propres, performantes et maintenables.
        </Typography>

        <Box sx={styles.grid}>

          <Box sx={styles.gridItem}>
            <Box sx={styles.card}>
              <Typography variant="h6" fontWeight="bold">
                🎯 Objectif
              </Typography>

              <Typography sx={{ ...styles.text, mt: 1 }}>
                Construire des applications performantes, évolutives et offrir
                une excellente expérience utilisateur.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.gridItem}>
            <Box sx={styles.card}>
              <Typography variant="h6" fontWeight="bold">
                🧠 Compétences
              </Typography>

              <Stack sx={styles.skillsContainer}>
                {skills.map((skill) => (
                  <Box key={skill} sx={styles.skillItem}>
                    {skill}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
