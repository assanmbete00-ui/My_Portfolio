import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Container from "@components/container";
import Button from "@components/button";
import styles from "./styles";

export default function Contact() {
  return (
    <Box
      component="section"
      sx={styles.section}
    >
      <Container>
        <Box sx={styles.container}>
          <Typography sx={styles.subtitle}>
            DISCUTONS
          </Typography>
          <Typography sx={styles.title}>
            Une idée à construire
            <br />
            ensemble ?
          </Typography>

          <Typography sx={styles.description}>
            Je suis ravi d'échanger sur de nouveaux projets,
            des collaborations, ou autour d'un café.
          </Typography>

          <Button customVariant="contained" >
            Me contacter
            <ArrowOutwardIcon
              sx={{ ml: 1 }}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}