import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { ProjectService } from '../services/project.service';
import { finalize } from 'rxjs';

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

  isLoading = signal(true);

  readonly project = toSignal(
    this.projectService.getProjectsBySlug(
      this.route.snapshot.paramMap.get('slug')!
    ).pipe(
      finalize(() => this.isLoading.set(false))
    ),
    {
      initialValue: null
    }
  );

  protected isArray(value: unknown): value is string[] {
    return Array.isArray(value);
  }

}