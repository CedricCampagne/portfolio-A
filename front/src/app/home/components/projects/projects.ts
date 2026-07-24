import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../projects/services/project.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  private projectService = inject(ProjectService);


  projects = toSignal(
    this.projectService.getProjects(),
    {
      initialValue: []
    }
  );

}
