import { Card as MuiCard, CardContent, CardMedia, Typography } from "@mui/material"

import styles from "./styles"

interface CardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function CustumCard({ title, description, image, link }: CardProps) {
  return (
    <MuiCard sx={styles.card} onClick={() => window.open(link, "_blank")}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  )
}