import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import styles from "./styles";

type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
  titleColor?: string;
  sx?: SxProps<Theme>;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
  titleColor,
  sx,
}: SectionTitleProps) {
  const mergedSx = (
    sx
      ? [styles.container, ...(Array.isArray(sx) ? sx : [sx])]
      : styles.container
  ) as SxProps<Theme>;

  return (
    <Box sx={mergedSx}>
      {subtitle && <Typography sx={styles.subtitle}>{subtitle}</Typography>}

      <Typography
        sx={titleColor ? [styles.title, { color: titleColor }] : styles.title}
      >
        {title}
      </Typography>

      {description && (
        <Typography sx={styles.description}>{description}</Typography>
      )}
    </Box>
  );
}
