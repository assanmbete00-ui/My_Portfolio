import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Button from "@components/button";
import styles from "./styles";

type CardContentProps = {
  period: string;
  title: string;
  description: string;
};

export default function CardContent({ period, title, description }: CardContentProps) {
  return (
    <Box sx={styles.content}>
      <Typography sx={styles.period}>
        {period}
      </Typography>
      <Typography sx={styles.title}>
        {title}
      </Typography>
      <Typography sx={styles.description}>
        {description}
      </Typography>
      <Button
        customVariant="text"
        sx={styles.button}
      >
        Learn more
        <NorthEastIcon sx={styles.icon} />
      </Button>
    </Box>
  );
}