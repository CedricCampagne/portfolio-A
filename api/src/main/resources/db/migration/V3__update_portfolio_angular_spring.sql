-- =====================================================
-- Mise à jour des informations générales du portfolio
-- Passage de la version SvelteKit vers Angular / Spring Boot
-- =====================================================
UPDATE projects
SET
    image = '/images/portfolio.png',
    description = 'Portfolio personnel développé avec Angular et Spring Boot afin de présenter mes projets, mes compétences techniques et mon parcours de développeur full stack junior.',
    github = 'https://github.com/CedricCampagne/portfolio-A'
WHERE slug = 'portfolio';


-- =====================================================
-- Mise à jour des technologies utilisées
-- Suppression des anciennes technologies SvelteKit
-- Ajout de la stack Angular / Spring Boot
-- =====================================================
DELETE FROM project_techs
WHERE project_id = 2;

INSERT INTO project_techs(project_id, tech)
VALUES
(2, 'Angular'),
(2, 'TypeScript'),
(2, 'Spring Boot'),
(2, 'Java'),
(2, 'PostgreSQL'),
(2, 'TailwindCSS');


-- =====================================================
-- Mise à jour des sections détaillées du projet
-- Remplacement du contenu lié à l'ancien portfolio SvelteKit
-- =====================================================
DELETE FROM project_sections
WHERE project_id = 2;

INSERT INTO project_sections(project_id, title, content)
VALUES
(
2,
'Présentation',
'"Ce portfolio personnel a été développé avec Angular et Spring Boot afin de présenter mon profil de développeur full stack junior, mes projets et mes compétences."'
),
(
2,
'Objectif du projet',
'"Mettre en place une application moderne avec une architecture frontend/backend séparée, une API REST Spring Boot et une interface Angular basée sur les composants standalone et les signaux."'
),
(
2,
'Fonctionnalités principales',
'[
"Présentation du profil développeur",
"Section compétences avec technologies utilisées",
"Gestion dynamique des projets depuis une API Spring Boot",
"Pages projets détaillées accessibles via slug",
"Interface responsive avec Tailwind CSS",
"Navigation fluide et design adapté mobile, tablette et desktop"
]'
);