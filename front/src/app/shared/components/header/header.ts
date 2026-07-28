import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  open = signal(false);

  links = [
    {
      name: 'Accueil',
      href: '/'
    },
    {
      name: 'Projets',
      href: '/#projects'
    },
    {
      name: 'Contact',
      href: '/#contact'
    }
  ];


  toggleMenu() {
    this.open.update(value => !value);
  }


  closeMenu() {
    this.open.set(false);
  }

}