import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = [
    "Angular CLI",
    "Angular (latest versions)",
    "Angular Material",
    "RxJS",
    "Reactive and Template-driven Forms",
    "Lazy Loading and Modularization",
    "TypeScript",
    "HTML5 & CSS3",
    "Bootstrap, Tailwind CSS, or Material Design",
    "Service Workers and Caching",
    "Figma",
    "UI/UX",
    "Responsive Design and Mobile-First",
    "Angular Animations",
    "HTTPClient and Interceptors",
    "JWT and OAuth (authentication)",
    "Git and GitHub/GitLab",
    "CI/CD",
    "Agile methodologies",
    "Communication with designers and back-end developers",
    "Documentation"
  ];
}
