import { Box } from "@mui/material";
import styles from "./styles";
import CardContent from "@components/resumCard/cardContent";

type ResumeCardProps = {
  image: string;
  period: string;
  title: string;
  description: string;
};

export default function ResumeCard({image, period, title, description }: ResumeCardProps) {

  return (
    <Box sx={styles.card}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={styles.image}
      />
      <CardContent
        period={period}
        title={title}
        description={description}
      />
    </Box>
  );
}