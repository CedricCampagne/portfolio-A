package fr.cedric.api.projects.repository;

import fr.cedric.api.projects.entity.ProjectTech;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectTechRepository extends JpaRepository<ProjectTech, Integer> {

}
