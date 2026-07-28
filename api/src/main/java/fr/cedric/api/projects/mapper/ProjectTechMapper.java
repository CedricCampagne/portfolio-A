package fr.cedric.api.projects.mapper;

import fr.cedric.api.projects.dto.projectTech.ProjectTechResponse;
import fr.cedric.api.projects.entity.ProjectTech;
import org.springframework.stereotype.Component;

@Component
public class ProjectTechMapper {

    public static ProjectTechResponse toResponse(ProjectTech entity){
        return  new ProjectTechResponse(
                entity.getId(),
                entity.getTech()
        );
    }
}
