import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../../data/projects';

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

  projects = signal(projects);

  projectsSorted = computed (()=>
    [...this.projects()].sort((a,b) => a.id - b.id)
  );

}
