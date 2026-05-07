import assan from "@assets/autres/assan.jpeg";
import profil1 from "@assets/profils/profil1.jpeg";
import profil0 from "@assets/profils/profil0.jpeg";
import ev from "@assets/autres/ev.jpeg";
import friday from "@assets/autres/friday.jpeg";
import lookgoog from "@assets/autres/lookgoog.jpeg";
import sensibli from "@assets/autres/sensibli.jpeg";

export const educationData = [
  {
    id: 1,
    image: assan,
    period: "ADANA-YAOUNDE · 2021 — 2022",
    title: "Baccalauréat scientifique",
    description: "Mention très bien avec spécialité en informatique, obtenue au collège la fraternité Adana.",
  },

  {
    id: 2,
    image: ev,
    period: "ISMTA · 2023 — 2025",
    title: "BTS en GSI",
    description: "Specialiation en développement web et mobile.",
  },

  {
    id: 3,
    image: profil0,
    period: "AUTODIDACTE · EN COURS",
    title: "Apprentissage continu",
    description: "Explorations annuelles des outils émergents — actuellement les IA.",
  },
];

export const experienceData = [
  {
    id: 1,
    image: ev,
    period: "2022 — AUJOURD’HUI",
    title: "Lead Engineer · Northwind",
    description: "Encadrement d’une équipe de 6 personnes sur le design system et la plateforme.",
  },

  {
    id: 2,
    image: friday,
    period: "2019 — 2022",
    title: "Développeur Senior · Maple Studio",
    description: "Livraison de produits clients de bout en bout, de l’architecture au lancement.",
  },

  {
    id: 3,
    image: lookgoog,
    period: "2018 — 2019",
    title: "Développeur Full-Stack · Helio",
    description: "Création de tableaux de bord data utilisés par des milliers d’analystes.",
  },
];

export const projectData = [
  {
    id: 1,
    image: sensibli,
    period: "OPEN SOURCE",
    title: "Atlas — Éditeur",
    description: "Un outil d’écriture minimaliste avec curseurs collaboratifs.",
  },

  {
    id: 2,
    image: profil0,
    period: "PLATEFORME INTERNE",
    title: "Prism Design System",
    description: "Composants à base de tokens utilisés par 14 applications en production.",
  },

  {
    id: 3,
    image: profil1,
    period: "IOS · ANDROID",
    title: "Helio Mobile",
    description: "Application analytique fluide avec synchronisation hors-ligne.",
  },
];
