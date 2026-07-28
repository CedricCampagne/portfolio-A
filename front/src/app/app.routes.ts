import { Routes } from '@angular/router';

import { Home } from './home/home';
import { ProjectDetails } from './projects/project-details/project-details';

export const routes: Routes = [
    {
    path: '',
    component: Home,
  },
  {
    path: 'projects/:slug',
    component: ProjectDetails,
  },
];
