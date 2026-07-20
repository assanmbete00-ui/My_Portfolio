import { Alert, Box, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import { useState, type ChangeEvent } from "react";
import Container from "@components/container";
import { sendEmail } from "../../../../services/email";
import type { ContactFormData } from "./types";
import FormFields from "@components/sub_components/FormFIelds";
import ContactInfo from "@components/sub_components/ContactInfos";
import ContactMap from "@components/sub_components/ContactMap";
import SuccessMessage from "@components/sub_components/SuccesMessage";
import styles from "./styles";

const MotionBox = motion(Box);

const emptyFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(emptyFormData);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = Boolean(
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim(),
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }

    if (typeof error === "string") {
      return error;
    }

    if (
      error &&
      typeof error === "object" &&
      "text" in error &&
      typeof (error as { text?: unknown }).text === "string"
    ) {
      return (error as { text: string }).text;
    }

    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string"
    ) {
      return (error as { message: string }).message;
    }

    return "Une erreur est survenue lors de l'envoi du message.";
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      await sendEmail(formData);

      setOpen(true);
      setFormData(emptyFormData);
    } catch (error) {
      console.error(error);
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={styles.section}>
      <Container>
        <Box sx={styles.container}>
          <MotionBox
            sx={styles.formCard}
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <FormFields
              formData={formData}
              loading={loading}
              disabled={!isFormValid || loading}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </MotionBox>

          <MotionBox
            sx={styles.rightContent}
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <ContactInfo />

            <ContactMap />
          </MotionBox>
        </Box>

        <SuccessMessage open={open} onClose={() => setOpen(false)} />

        <Snackbar
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={() => setError(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            severity="error"
            variant="filled"
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
