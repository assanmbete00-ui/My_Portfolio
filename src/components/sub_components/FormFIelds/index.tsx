import { Box, Stack, TextField, Typography } from "@mui/material";
import CustomButton from "@components/button";
import { SendOutlined } from "@mui/icons-material";
import type { ContactFormData } from "@pages/contact/sub_components/contactForm/types";
import styles from "./styles";

type Props = {
  formData: ContactFormData;

  loading: boolean;

  disabled: boolean;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onSubmit: () => void;
};

export default function FormFields({
  formData,
  loading,
  disabled,
  onChange,
  onSubmit,
}: Props) {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Typography sx={styles.title}>Envoyer un message</Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={styles.label}>Nom</Typography>

          <TextField
            fullWidth
            name="name"
            value={formData.name}
            onChange={onChange}
            sx={styles.input}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={styles.label}>Email</Typography>

          <TextField
            fullWidth
            name="email"
            value={formData.email}
            onChange={onChange}
            sx={styles.input}
          />
        </Box>
      </Stack>

      <Box>
        <Typography sx={styles.label}>Sujet</Typography>

        <TextField
          fullWidth
          name="subject"
          value={formData.subject}
          onChange={onChange}
          sx={styles.input}
        />
      </Box>

      <Box>
        <Typography sx={styles.label}>Message</Typography>

        <TextField
          fullWidth
          multiline
          rows={6}
          name="message"
          value={formData.message}
          onChange={onChange}
          sx={styles.input}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <CustomButton
          type="submit"
          customVariant="contained"
          disabled={disabled}
          endIcon={<SendOutlined />}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          {loading ? "Envoi..." : "Envoyer le message"}
        </CustomButton>
      </Box>
    </Box>
  );
}
