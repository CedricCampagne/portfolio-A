package fr.cedric.api.projects.dto.project;

import fr.cedric.api.projects.dto.projectSection.ProjectSectionRequest;
import fr.cedric.api.projects.dto.projectTech.ProjectTechRequest;

import java.util.List;

public record ProjectRequest(
        String name,
        String slug,
        String image,
        String description,
        String github,
        String demo,
        List<ProjectTechRequest> techs,
        List<ProjectSectionRequest> sections
) {
}
