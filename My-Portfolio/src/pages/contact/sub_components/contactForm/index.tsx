import { Box } from "@mui/material";
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

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await sendEmail(formData);

      setOpen(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
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
      </Container>
    </Box>
  );
}
