-- =====================================================
-- Mise à jour du projet Site auteur
-- Migration vers Angular / Spring Boot
-- =====================================================

BEGIN;

UPDATE projects
SET
    name = 'Site auteur',
    image = '/images/site-auteur.png',
    description = 'Application Full Stack de gestion d’un site d’auteur développée avec Angular et Spring Boot. Elle permet de consulter des livres, des chroniques et des commentaires, avec un espace d’administration sécurisé pour gérer les contenus et les utilisateurs.',
    github = 'https://github.com/CedricCampagne/site-auteur-A',
    demo = 'https://site-auteur-a.vercel.app/'
WHERE slug = 'site-auteur';


-- =====================================================
-- Mise à jour des technologies
-- =====================================================

DELETE FROM project_techs
WHERE project_id = (
    SELECT id FROM projects WHERE slug = 'site-auteur'
);

INSERT INTO project_techs (project_id, tech)
SELECT id, tech
FROM projects
CROSS JOIN (
    VALUES
        ('Angular'),
        ('TypeScript'),
        ('Spring Boot'),
        ('Java'),
        ('Spring Security'),
        ('JWT'),
        ('PostgreSQL'),
        ('Flyway'),
        ('TailwindCSS')
) AS technologies(tech)
WHERE slug = 'site-auteur';


-- =====================================================
-- Mise à jour des sections détaillées
-- =====================================================

DELETE FROM project_sections
WHERE project_id = (
    SELECT id FROM projects WHERE slug = 'site-auteur'
);


-- Présentation

INSERT INTO project_sections (project_id, title, content)
SELECT
    id,
    'Présentation',
    $$"Site auteur est une application Full Stack développée avec Angular et Spring Boot pour présenter l’univers d’un auteur et permettre la gestion de ses contenus. Le site propose une partie publique consacrée aux livres, aux chroniques et aux commentaires, ainsi qu’un espace d’administration sécurisé pour gérer les livres, les publications, les commentaires et les utilisateurs."$$::jsonb
FROM projects
WHERE slug = 'site-auteur';


-- Objectif du projet

INSERT INTO project_sections (project_id, title, content)
SELECT
    id,
    'Objectif du projet',
    $$"Ce projet est une refonte complète de mon application personnelle avec une nouvelle architecture basée sur Angular et Spring Boot. L’objectif était de consolider mes compétences Full Stack, de mettre en pratique une architecture backend structurée et de développer une interface frontend moderne, tout en approfondissant les mécanismes d’authentification et de sécurisation des applications web."$$::jsonb
FROM projects
WHERE slug = 'site-auteur';


-- Fonctionnalités principales

INSERT INTO project_sections (project_id, title, content)
SELECT
    id,
    'Fonctionnalités principales',
    $$[
        "Consultation publique des livres et des chroniques",
        "Gestion des commentaires",
        "Inscription et authentification des utilisateurs",
        "Authentification sécurisée avec JWT et cookie HttpOnly",
        "Gestion des rôles utilisateur et administrateur",
        "Espace d’administration protégé",
        "Gestion des livres, chroniques, commentaires et utilisateurs",
        "API REST pour la communication entre Angular et Spring Boot"
    ]$$::jsonb
FROM projects
WHERE slug = 'site-auteur';


-- Architecture et apprentissages

INSERT INTO project_sections (project_id, title, content)
SELECT
    id,
    'Architecture et apprentissages',
    $$"Le backend repose sur Spring Boot et une architecture organisée en couches : controllers, services, repositories, DTO et gestion centralisée des exceptions. La sécurité est assurée par Spring Security avec une authentification JWT stockée dans un cookie HttpOnly et une gestion des rôles pour protéger les fonctionnalités d’administration. Le frontend utilise Angular avec des composants standalone, des services, des formulaires réactifs, des guards et des interceptors HTTP. La base de données PostgreSQL est gérée avec Flyway pour le versionnement du schéma et des migrations. Ce projet m’a permis d’approfondir la conception d’une application Full Stack moderne, la communication entre frontend et backend et la sécurisation des échanges."$$::jsonb
FROM projects
WHERE slug = 'site-auteur';


COMMIT;