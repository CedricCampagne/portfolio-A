package fr.cedric.api.projects.service;

import fr.cedric.api.projects.dto.project.ProjectResponse;
import fr.cedric.api.projects.entity.Project;
import fr.cedric.api.projects.exception.ProjectNotFoundException;
import fr.cedric.api.projects.mapper.ProjectMapper;
import fr.cedric.api.projects.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public List<ProjectResponse> findAll(){
        return projectRepository.findAll()
                .stream()
                .map(projectMapper::toResponse)
                .toList();
    }

    public ProjectResponse findBySlug(String slug){
        Project project = projectRepository.findBySlug(slug)
                .orElseThrow(()-> new ProjectNotFoundException(slug));

        return projectMapper.toResponse(project);
    }

}
