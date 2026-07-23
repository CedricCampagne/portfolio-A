package fr.cedric.api.projects.dto.projectTech;

import fr.cedric.api.projects.entity.Project;

public record ProjectTechResponse(
        Integer id,
        String tech
) {
}
