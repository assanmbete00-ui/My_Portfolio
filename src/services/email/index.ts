import emailjs from "@emailjs/browser";

type SendEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: SendEmailProps) {
  return emailjs.send(
    "service_wj6z599",
    "template_ia7oo17",
    {
      from_name: name,
      from_email: email,
      subject,
      message,
      to_email: "Assanmbete00@gmail.com",
    },
    "7rdbSWGc4X8j6YNHH"
  );
}