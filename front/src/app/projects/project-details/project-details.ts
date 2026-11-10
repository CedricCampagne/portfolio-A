import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  private route = inject(ActivatedRoute);

   readonly project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');

    return projects.find(project => project.slug === slug) ?? null;
  });

  protected isArray(value: unknown): value is string[] {
    return Array.isArray(value);
  }

}