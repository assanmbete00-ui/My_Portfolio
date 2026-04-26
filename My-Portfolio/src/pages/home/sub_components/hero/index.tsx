import { Box, Typography, Stack } from "@mui/material"
import { motion } from "framer-motion"
import CustumButton from "@components/button"

import styles from "./styles"

export default function Hero() {
  return (
    <Box sx={styles.container}>
      <Stack spacing={3} sx={styles.stack}>

        {/* Animation intro */}
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

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography variant="h5" sx={styles.role}>
            Développeur React • TypeScript • MUI
          </Typography>
        </motion.div>

        {/* Description */}
        <Typography sx={styles.description}>
          Je construis des applications web modernes, performantes et scalables
          avec une architecture propre et maintenable.
        </Typography>

        {/* Actions */}
        <Stack direction="row" spacing={2} sx={styles.actions}>
          <CustumButton>
            Voir mes projets
          </CustumButton>

          <CustumButton size="large" href="/cv.pdf">
            Télécharger CV
          </CustumButton>
        </Stack>

      </Stack>
    </Box>
  )
}