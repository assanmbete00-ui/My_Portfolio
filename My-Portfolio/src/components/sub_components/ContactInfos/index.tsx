import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import {
  EmailOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

import styles from "./styles";

export default function ContactInfo() {
  return (
    <Box sx={styles.card}>
      <Typography sx={styles.title}>
        Direct
      </Typography>

      <Stack spacing={3}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <EmailOutlined sx={styles.icon} />

          <Typography sx={styles.text}>
            assanmbete00@gmail.com
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <LocationOnOutlined sx={styles.icon} />

          <Typography sx={styles.location}>
            Yaoundé, Cameroun
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}