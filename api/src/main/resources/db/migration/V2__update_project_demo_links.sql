UPDATE projects
SET demo = 'https://site-auteur-ashen.vercel.app'
WHERE slug = 'site-auteur';

UPDATE projects
SET demo = NULL
WHERE slug = 'portfolio';