import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  readonly project = toSignal(
    this.route.paramMap.pipe(
      switchMap(params =>
        this.projectService.getProjectsBySlug(params.get('slug')!)
      )
    ),
    {
      initialValue: null
    }
  );

  protected isArray(value: unknown): value is string[] {
    return Array.isArray(value);
  }

}