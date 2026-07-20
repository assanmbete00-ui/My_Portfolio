import adana from "@assets/parcours/adana.png";
import profil0 from "@assets/profils/profil0.jpeg";
import IA from "@assets/parcours/IA.jpg";
import chefferie from "@assets/projets/chefferie.png";
import lapnombapay from "@assets/projets/lapnombapay.png";
import me from "@assets/projets/me.png";
import formation from "@assets/experience/formation.jpg";
import artisant from "@assets/experience/artisant.jpg";

export const educationData = [
  {
    id: 1,
    image: adana,
    period: "ADANA-YAOUNDE · 2021 — 2022",
    title: "Baccalauréat scientifique",
    description: "Mention très bien avec spécialité en informatique, obtenue au collège la fraternité Adana.",
  },

  {
    id: 2,
    image:profil0,
    period: "ISMTA · 2023 — 2025",
    title: "BTS en GSI",
    description: "Formation en alternance axée sur les systèmes informatiques, avec une expérience pratique chez Lapnomba.",
  },

  {
    id: 3,
    image: IA,
    period: "AUTODIDACTE · EN COURS",
    title: "Apprentissage continu",
    description: "Explorations annuelles des outils émergents — actuellement les IA.",
  },
];

export const experienceData = [
  {
    id: 1,
    image: formation,
    period: "2026 — AUJOURD’HUI",
    title: " Formateur · Lapnomba",
    description: "Encadrement de 20 étudiants en développement web, avec un taux de réussite de 95% aux examens.",
  },

  {
    id: 2,
    image: lapnombapay,
    period: "2024 — 2026",
    title: "Membre de l’équipe de développement · Lapnomba",
    description: "Conception et développement de fonctionnalités clés pour la plateforme de paiement, contribuant à une augmentation de 25% des utilisateurs actifs.",
  },

  {
    id: 3,
    image: artisant,
    period: "2022 — 2024",
    title: "stage · Agence de l'Afrique Numérique",
    description: "Participation à la création d’une plateforme de e-commerce pour les artisans locaux, augmentant les ventes de 30%.",
  },
];

export const projectData = [
  {
    id: 1,
    image: me,
    period: "PROJET PERSONNEL · 2023",
    title: "Portfolio personnel",
    description: "Site web réactif et moderne pour présenter mes projets et expériences, construit avec React, TypeScript et Mui.",
  },

  {
    id: 2,
    image: chefferie,
    period: "PLATEFORME DE TOURISME · 2024",
    title: "Chefferie Traditionnelle de Malentouen",
    description: "Site web de tourisme culturel mettant en valeur les traditions et l’histoire de la région, développé avec Next.js et Tailwind CSS.",
  },

  {
    id: 3,
    image: lapnombapay,
    period: "PLATEFORME DE LAPNOMBA PAY · 2025",
    title: "Lapnomba Pay",
    description: "Application de paiement mobile sécurisée pour les petites entreprises, intégrant des fonctionnalités de gestion financière, développée avec React Native et Node.js.",
  },
];
