package fr.cedric.api.projects.mapper;

import fr.cedric.api.projects.dto.projectSection.ProjectSectionResponse;
import fr.cedric.api.projects.entity.ProjectSection;
import org.springframework.stereotype.Component;

@Component
public class ProjectSectionMapper {
    public static ProjectSectionResponse toResponse(ProjectSection entity) {
        return new ProjectSectionResponse(
                entity.getId(),
                entity.getTitle(),
                entity.getContent()
        );
    }
}
