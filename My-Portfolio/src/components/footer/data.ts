import { ElementType } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
};

export const socials: SocialItem[] = [
  { id: 1, icon: GitHubIcon },
  { id: 2, icon: LinkedInIcon },
  { id: 3, icon: TwitterIcon },
  { id: 4, icon: MailOutlineIcon },
  { id: 5, icon: WhatsappIcon },
  { id: 6, icon: FacebookIcon },
];
