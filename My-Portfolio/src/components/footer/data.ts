import { ElementType } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
//import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

export const navigationLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "CV", path: "/cv" },
  { label: "Contact", path: "/contact" },
];

export type SocialItem = {
  id: number;
  icon: ElementType;
  label: string;
  href: string;
};

export const socials: SocialItem[] = [
  {
    id: 1,
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://GitHub.com/assanmbete00-ui",
  },

  {
    id: 2,
    icon: TwitterIcon,
    label: "X",
    href: "https://x.com/",
  },

  {
    id: 3,
    icon: MailOutlineIcon,
    label: "Email",
    href: "mailto:Assanmbete00@gmail.com",
  },

  {
    id: 4,
    icon: WhatsappIcon,
    label: "WhatsApp",
    href: "https://wa.me/237657534392",
  },

  {
    id: 5,
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://facebook.com/",
  },
];