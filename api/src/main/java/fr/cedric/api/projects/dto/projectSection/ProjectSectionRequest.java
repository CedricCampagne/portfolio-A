package fr.cedric.api.projects.dto.projectSection;

import tools.jackson.databind.JsonNode;

public record ProjectSectionRequest(
        String title,
        JsonNode content
) {
}
