import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../projects/services/project.service';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

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

  isLoading = signal(true);

  projects = toSignal(
    this.projectService.getProjects().pipe(
      finalize(() => this.isLoading.set(false))
    ),
    {
      initialValue: []
    }
  );

  projectsSorted = computed (()=>
    [...this.projects()].sort((a,b) => b.id - a.id)
  );

}
