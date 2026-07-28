package fr.cedric.api.projects.controller;

import fr.cedric.api.projects.dto.project.ProjectResponse;
import fr.cedric.api.projects.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/projects")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<ProjectResponse> findAll(){
        return  projectService.findAll();
    }

    @GetMapping("/{slug}")
    public ProjectResponse findBySlug(@PathVariable String slug) {
        return projectService.findBySlug(slug);
    }
}
