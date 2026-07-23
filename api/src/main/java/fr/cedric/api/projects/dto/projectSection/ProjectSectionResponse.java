package fr.cedric.api.projects.dto.projectSection;

import fr.cedric.api.projects.entity.Project;
import tools.jackson.databind.JsonNode;

public record ProjectSectionResponse(
        Integer id,
        String title,
        JsonNode content
) {
}
