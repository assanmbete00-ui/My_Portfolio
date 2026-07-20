import { Box } from "@mui/material";

import styles from "./styles";

export default function ContactMap() {
  return (
    <Box sx={styles.map}>
      <iframe
        title="map"
        width="100%"
        height="100%"
        loading="lazy"
        style={{
          border: 0,
        }}
        src="https://maps.google.com/maps?q=Yaoundé&t=&z=11&ie=UTF8&iwloc=&output=embed"
      />
    </Box>
  );
}