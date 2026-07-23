package fr.cedric.api.projects.dto.project;

import fr.cedric.api.projects.dto.projectSection.ProjectSectionRequest;
import fr.cedric.api.projects.dto.projectSection.ProjectSectionResponse;
import fr.cedric.api.projects.dto.projectTech.ProjectTechRequest;
import fr.cedric.api.projects.dto.projectTech.ProjectTechResponse;

import java.time.LocalDateTime;
import java.util.List;

public record ProjectResponse(
        Integer id,
        String name,
        String slug,
        String image,
        String description,
        String github,
        String demo,
        LocalDateTime createdAt,
        List<ProjectTechResponse> techs,
        List<ProjectSectionResponse> sections
) {
}
