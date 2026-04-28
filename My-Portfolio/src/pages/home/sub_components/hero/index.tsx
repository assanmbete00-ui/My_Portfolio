import { Box, Typography, Stack } from "@mui/material"
import { motion } from "framer-motion"
import CustumButton from "@components/button"

import styles from "./styles"
import SectionTitle from "@components/sectionTitle"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <Box sx={styles.container}>
      <Stack spacing={3} sx={styles.stack}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={styles.title}>
            Salut 👋, je suis{" "}
            <Box component="span" sx={styles.name}>
              Assan
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SectionTitle >
            Développeur React • TypeScript • MUI
          </SectionTitle>
        </motion.div>

        <Typography sx={styles.description}>
          Je construis des applications web modernes, performantes et scalables
          avec une architecture propre et maintenable.
        </Typography>

        <Stack direction="row" spacing={2} sx={styles.actions}>
          <CustumButton  
          onClick={() => handleNavigate("/projects")}
          >
            Voir mes projets
          </CustumButton>

          <CustumButton  
          onClick={() => handleNavigate("/contact")}
          >
            Contactez-moi
          </CustumButton>
        </Stack>

      </Stack>
    </Box>
  )
}