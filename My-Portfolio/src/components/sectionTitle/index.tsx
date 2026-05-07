import { Box, Typography } from "@mui/material";
import styles from "./styles";

type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <Box sx={styles.container}>
      {subtitle && (
        <Typography sx={styles.subtitle}>
          {subtitle}
        </Typography>
      )}

      <Typography sx={styles.title}>
        {title}
      </Typography>

      {description && (
        <Typography sx={styles.description}>
          {description}
        </Typography>
      )}
    </Box>
  );
}