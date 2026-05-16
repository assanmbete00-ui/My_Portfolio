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
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      from_name: name,
      from_email: email,
      subject,
      message,
      to_email: "Assanmbete00@gmail.com",
    },
    "YOUR_PUBLIC_KEY"
  );
}