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
      icon: 'logos:angular-icon'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      icon: 'logos:typescript-icon'
    },
    {
      name: 'HTML / CSS',
      category: 'Frontend',
      icon: 'logos:html-5'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: 'logos:tailwindcss-icon'
    },
    // Backend
    {
      name: 'Java',
      category: 'Backend',
      icon: 'logos:java'
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      icon: 'logos:spring-icon'
    },
    {
      name: 'REST API',
      category: 'Backend',
      icon: 'mdi:api'
    },
    // Database
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: 'logos:postgresql'
    },
    // Outils
    {
      name: 'Git',
      category: 'Outils',
      icon: 'logos:git-icon'
    },
    {
      name: 'GitHub',
      category: 'Outils',
      icon: 'mdi:github'
    },
    {
      name: 'Postman',
      category: 'Outils',
      icon: 'logos:postman-icon'
    }

  ];

}