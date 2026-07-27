import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  categories = [
    'Frontend',
    'Backend',
    'Database',
    'Outils'
  ];

  skills = [

    // Frontend
    {
      name: 'Angular',
      category: 'Frontend',
      icon: '/icons/angular.svg'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      icon: '/icons/typescript.svg'
    },
    {
      name: 'HTML / CSS',
      category: 'Frontend',
      icon: '/icons/html.svg'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: '/icons/tailwindcss.svg'
    },
    // Backend
    {
      name: 'Java',
      category: 'Backend',
      icon: '/icons/java.svg'
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      icon: '/icons/spring.svg'
    },
    {
      name: 'REST API',
      category: 'Backend',
      icon: '/icons/rest-api.svg'
    },
    // Database
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: '/icons/postgresql.svg'
    },
    // Outils
    {
      name: 'Git',
      category: 'Outils',
      icon: '/icons/git.svg'
    },
    {
      name: 'GitHub',
      category: 'Outils',
      icon: '/icons/github.svg'
    },
    {
      name: 'Postman',
      category: 'Outils',
      icon: '/icons/postman.svg'
    }

  ];

}