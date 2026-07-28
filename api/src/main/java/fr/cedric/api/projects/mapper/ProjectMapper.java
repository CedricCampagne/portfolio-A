package fr.cedric.api.projects.mapper;

import fr.cedric.api.projects.dto.project.ProjectResponse;
import fr.cedric.api.projects.entity.Project;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    public ProjectResponse toResponse(Project project){
        return new ProjectResponse(
                project.getId(),
                project.getName(),
                project.getSlug(),
                project.getImage(),
                project.getDescription(),
                project.getGithub(),
                project.getDemo(),
                project.getCreatedAt(),
                project.getTechs()
                        .stream()
                        .map(ProjectTechMapper::toResponse)
                        .toList(),
                project.getSections()
                        .stream()
                        .map(ProjectSectionMapper::toResponse)
                        .toList()
        );
    }

}
