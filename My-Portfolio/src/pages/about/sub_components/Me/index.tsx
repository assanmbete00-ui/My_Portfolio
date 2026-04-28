import { Box, Typography, Chip } from "@mui/material"
import Reveal from "../../../../components/reveal"
import profil1 from "@assets/profils/profil1.jpeg"
import styles from "./styles"

const Me = () => {
  return (
    <Box id="about" sx={styles.root}>
      <Box sx={styles.grid}>

        {/* IMAGE */}
        <Box>
          <Reveal>
            <Box sx={styles.imageContainer}>
              <Box
                component="img"
                src={profil1}
                alt="Assan Mbete"
                sx={styles.image}
              />

              <Typography sx={styles.location}>
                Yaoundé, Cameroun
              </Typography>
            </Box>
          </Reveal>
        </Box>

        {/* TEXTE */}
        <Box>
          <Reveal>
            <Typography variant="overline" sx={styles.overline}>
              À propos
            </Typography>
          </Reveal>

          <Reveal delay={0.3}>
            <Typography variant="h2" sx={styles.title}>
              Un développeur qui transforme les idées en produits web{" "}
              <em>concrets</em>
            </Typography>
          </Reveal>

          <Reveal delay={0.4}>
            <Typography variant="body1" sx={styles.text}>
              Je conçois des applications web modernes, performantes et
              maintenables...
            </Typography>
          </Reveal>

          <Reveal delay={0.5}>
            <Typography variant="body1" sx={styles.text}>
              Mon parcours chez <strong>Lapnomba.org</strong>...
            </Typography>
          </Reveal>

          <Reveal delay={0.6}>
            <Typography variant="body1" sx={styles.textLast}>
              Curieux et en apprentissage continu, j'explore actuellement{" "}
              <strong>React avancé</strong>.
            </Typography>
          </Reveal>

          <Reveal delay={0.7}>
            <Box sx={styles.chipsContainer}>
              {[
                "Code propre",
                "API REST",
                "Open source",
                "Curiosité",
                "Rigueur",
              ].map((item, index) => (
                <Chip key={index} label={item} variant="outlined" sx={styles.chip} />
              ))}
            </Box>
          </Reveal>
        </Box>

      </Box>
    </Box>
  )
}

export default Me