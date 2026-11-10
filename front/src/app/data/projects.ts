
import { Project } from "../projects/models/project.model";

export const projects: Project[] = [
    {
        id: 1,
        name: "Site auteur",
        slug: "site-auteur",
        image: "/images/site-auteur.png",
        description:
            "Application Full Stack de gestion d’un site d’auteur développée avec Angular et Spring Boot. Elle permet de consulter des livres, des chroniques et des commentaires, avec un espace d’administration sécurisé pour gérer les contenus et les utilisateurs.",
        github: "https://github.com/CedricCampagne/site-auteur-A",
        demo: "https://site-auteur-a.vercel.app/",
        createdAt: "2026-11-09",
        techs: [
            { id: 1, tech: "Angular" },
            { id: 2, tech: "TypeScript" },
            { id: 3, tech: "Spring Boot" },
            { id: 4, tech: "Java" },
            { id: 5, tech: "Spring Security" },
            { id: 6, tech: "JWT" },
            { id: 7, tech: "PostgreSQL" },
            { id: 8, tech: "Flyway" },
            { id: 9, tech: "TailwindCSS" },
        ],
        sections: [
            {
                id: 1,
                title: "Présentation",
                content:
                    "Site auteur est une application Full Stack développée avec Angular et Spring Boot pour présenter l’univers d’un auteur et permettre la gestion de ses contenus. Le site propose une partie publique consacrée aux livres, aux chroniques et aux commentaires, ainsi qu’un espace d’administration sécurisé pour gérer les livres, les publications, les commentaires et les utilisateurs.",
            },
            {
                id: 2,
                title: "Objectif du projet",
                content:
                    "Ce projet est une refonte complète de mon application personnelle avec une nouvelle architecture basée sur Angular et Spring Boot. L’objectif était de consolider mes compétences Full Stack, de mettre en pratique une architecture backend structurée et de développer une interface frontend moderne, tout en approfondissant les mécanismes d’authentification et de sécurisation des applications web.",
            },
            {
                id: 3,
                title: "Fonctionnalités principales",
                content: [
                    "Consultation publique des livres et des chroniques",
                    "Gestion des commentaires",
                    "Inscription et authentification des utilisateurs",
                    "Authentification sécurisée avec JWT et cookie HttpOnly",
                    "Gestion des rôles utilisateur et administrateur",
                    "Espace d’administration protégé",
                    "Gestion des livres, chroniques, commentaires et utilisateurs",
                    "API REST pour la communication entre Angular et Spring Boot",
                ],
            },
            {
                id: 4,
                title: "Architecture et apprentissages",
                content:
                    "Le backend repose sur Spring Boot et une architecture organisée en couches : controllers, services, repositories, DTO et gestion centralisée des exceptions. La sécurité est assurée par Spring Security avec une authentification JWT stockée dans un cookie HttpOnly et une gestion des rôles pour protéger les fonctionnalités d’administration. Le frontend utilise Angular avec des composants standalone, des services, des formulaires réactifs, des guards et des interceptors HTTP. La base de données PostgreSQL est gérée avec Flyway pour le versionnement du schéma et des migrations. Ce projet m’a permis d’approfondir la conception d’une application Full Stack moderne, la communication entre frontend et backend et la sécurisation des échanges.",
            },
        ],
    },

    {
        id: 2,
        name: "Shopping Recipes",
        slug: "shopping-recipes",
        image: "/images/shopping-recipes.png",
        description:
            "Application Full Stack développée avec Angular et Spring Boot permettant de gérer des recettes, des ingrédients et de générer automatiquement des listes de courses adaptées au nombre de portions.",
        github: "https://github.com/CedricCampagne/shopping-recipes",
        demo: null,
        createdAt: "2026-11-09",
        techs: [
            { id: 1, tech: "Angular" },
            { id: 2, tech: "TypeScript" },
            { id: 3, tech: "Spring Boot" },
            { id: 4, tech: "Java" },
            { id: 5, tech: "PostgreSQL" },
            { id: 6, tech: "JWT" },
            { id: 7, tech: "Flyway" },
            { id: 8, tech: "TailwindCSS" },
        ],
        sections: [
            {
                id: 1,
                title: "Présentation",
                content:
                    "Shopping Recipes est une application Full Stack développée avec Angular et Spring Boot permettant de gérer des recettes, des ingrédients et de générer automatiquement des listes de courses personnalisées. Ce projet est né d'un besoin personnel : préparer facilement les courses pour plusieurs jours en fonction des repas prévus, tout en calculant automatiquement les quantités nécessaires selon le nombre de portions souhaitées.",
            },
            {
                id: 2,
                title: "Objectif du projet",
                content:
                    "L'objectif de ce projet était de développer ma première application Full Stack avec Angular et Spring Boot après une phase d'autoformation et de montée en compétences. Je souhaitais mettre en pratique les notions découvertes pendant ma formation ainsi qu'approfondir de nouveaux concepts tels que l'architecture Spring Boot, l'authentification JWT, les API REST et les fonctionnalités modernes d'Angular, tout en répondant à un besoin concret de gestion de listes de courses.",
            },
            {
                id: 3,
                title: "Fonctionnalités principales",
                content: [
                    "Authentification sécurisée avec JWT",
                    "Gestion complète des recettes et des ingrédients (CRUD)",
                    "Création de listes de courses à partir de plusieurs recettes",
                    "Calcul automatique des quantités selon le nombre de portions",
                    "Fusion automatique des ingrédients identiques dans une liste de courses",
                    "Modification dynamique des portions avec recalcul instantané",
                    "Sauvegarde des listes de courses et export au format PDF",
                    "Création d'ingrédients directement depuis la création d'une recette",
                    "Interface responsive avec gestion centralisée des messages et états de chargement",
                ],
            },
            {
                id: 4,
                title: "Points techniques & apprentissages",
                content:
                    "Ce projet constitue mon premier projet personnel développé avec Angular et Spring Boot. Il m'a permis de consolider les bases acquises durant ma formation et d'approfondir de nombreuses notions en autonomie. J'y ai mis en place une architecture Spring Boot structurée autour des controllers, services, repositories, DTO, mappers et d'une gestion centralisée des exceptions, ainsi qu'une authentification JWT sécurisée. Côté frontend, j'ai développé une interface Angular moderne utilisant les composants standalone, les signaux, les Reactive Forms, les guards et la communication avec une API REST. La principale difficulté a été la conception de la logique métier permettant de générer automatiquement une liste de courses, de recalculer les quantités selon le nombre de portions et de fusionner les ingrédients identiques, tout en conservant une interface fluide et cohérente.",
            },
        ],
    },

    
    {
        id: 3,
        name: "Portfolio",
        slug: "portfolio",
        image: "/images/portfolio.png",
        description:
            "Portfolio personnel développé avec Angular et Tailwind CSS afin de présenter mes projets, mes compétences techniques et mon parcours de développeur Full Stack junior.",
        github: "https://github.com/CedricCampagne/portfolio-A",
        demo: "https://portfolio-a-wine.vercel.app/",
        createdAt: "2026-11-09",
        techs: [
            { id: 1, tech: "Angular" },
            { id: 2, tech: "TypeScript" },
            { id: 3, tech: "TailwindCSS" },
        ],
        sections: [
            {
                id: 1,
                title: "Présentation",
                content:
                    "Ce portfolio personnel a été développé avec Angular et Tailwind CSS afin de présenter mon profil de développeur Full Stack junior, mes projets et mes compétences.",
            },
            {
                id: 2,
                title: "Objectif du projet",
                content:
                    "Créer une interface moderne, responsive et structurée pour présenter mon parcours, mes compétences et mes réalisations, tout en mettant en pratique les fonctionnalités modernes d'Angular.",
            },
            {
                id: 3,
                title: "Fonctionnalités principales",
                content: [
                    "Présentation du profil développeur",
                    "Section compétences avec technologies utilisées",
                    "Présentation des projets avec leurs technologies",
                    "Pages projets détaillées accessibles via slug",
                    "Données des projets gérées localement dans Angular",
                    "Interface responsive avec Tailwind CSS",
                    "Navigation fluide et design adapté mobile, tablette et desktop",
                ],
            },
        ],
    }
];
