-- =====================================================
-- Ajout du projet Shopping Recipes
-- =====================================================

INSERT INTO projects
(
    slug,
    name,
    image,
    description,
    github,
    demo
)
VALUES
(
    'shopping-recipes',
    'Shopping Recipes',
    '/images/shopping-recipes.png',
    'Application Full Stack développée avec Angular et Spring Boot permettant de gérer des recettes, des ingrédients et de générer automatiquement des listes de courses adaptées au nombre de portions.',
    'https://github.com/CedricCampagne/shopping-recipes',
    NULL
);


-- =====================================================
-- Technologies utilisées
-- =====================================================

INSERT INTO project_techs (project_id, tech)
SELECT id, 'Angular'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'TypeScript'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'Spring Boot'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'Java'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'PostgreSQL'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'JWT'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'Flyway'
FROM projects
WHERE slug = 'shopping-recipes';

INSERT INTO project_techs (project_id, tech)
SELECT id, 'TailwindCSS'
FROM projects
WHERE slug = 'shopping-recipes';


-- =====================================================
-- Sections détaillées du projet Shopping Recipes
-- =====================================================

INSERT INTO project_sections(project_id, title, content)
SELECT
    id,
    'Présentation',
    $$"Shopping Recipes est une application Full Stack développée avec Angular et Spring Boot permettant de gérer des recettes, des ingrédients et de générer automatiquement des listes de courses personnalisées. Ce projet est né d'un besoin personnel : préparer facilement les courses pour plusieurs jours en fonction des repas prévus, tout en calculant automatiquement les quantités nécessaires selon le nombre de portions souhaitées."$$::jsonb
FROM projects
WHERE slug = 'shopping-recipes';


INSERT INTO project_sections(project_id, title, content)
SELECT
    id,
    'Objectif du projet',
    $$"L'objectif de ce projet était de développer ma première application Full Stack avec Angular et Spring Boot après une phase d'autoformation et de montée en compétences. Je souhaitais mettre en pratique les notions découvertes pendant ma formation ainsi qu'approfondir de nouveaux concepts tels que l'architecture Spring Boot, l'authentification JWT, les API REST et les fonctionnalités modernes d'Angular, tout en répondant à un besoin concret de gestion de listes de courses."$$::jsonb
FROM projects
WHERE slug = 'shopping-recipes';


INSERT INTO project_sections(project_id, title, content)
SELECT
    id,
    'Fonctionnalités principales',
    $$[
        "Authentification sécurisée avec JWT",
        "Gestion complète des recettes et des ingrédients (CRUD)",
        "Création de listes de courses à partir de plusieurs recettes",
        "Calcul automatique des quantités selon le nombre de portions",
        "Fusion automatique des ingrédients identiques dans une liste de courses",
        "Modification dynamique des portions avec recalcul instantané",
        "Sauvegarde des listes de courses et export au format PDF",
        "Création d'ingrédients directement depuis la création d'une recette",
        "Interface responsive avec gestion centralisée des messages et états de chargement"
    ]$$::jsonb
FROM projects
WHERE slug = 'shopping-recipes';


INSERT INTO project_sections(project_id, title, content)
SELECT
    id,
    'Points techniques & apprentissages',
    $$"Ce projet constitue mon premier projet personnel développé avec Angular et Spring Boot. Il m'a permis de consolider les bases acquises durant ma formation et d'approfondir de nombreuses notions en autonomie. J'y ai mis en place une architecture Spring Boot structurée autour des controllers, services, repositories, DTO, mappers et d'une gestion centralisée des exceptions, ainsi qu'une authentification JWT sécurisée. Côté frontend, j'ai développé une interface Angular moderne utilisant les composants standalone, les signaux, les Reactive Forms, les guards et la communication avec une API REST. La principale difficulté a été la conception de la logique métier permettant de générer automatiquement une liste de courses, de recalculer les quantités selon le nombre de portions et de fusionner les ingrédients identiques, tout en conservant une interface fluide et cohérente."$$::jsonb
FROM projects
WHERE slug = 'shopping-recipes';