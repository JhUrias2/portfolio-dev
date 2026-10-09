import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Skill {
  name: string;
  iconClass: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about-skills',
  imports: [CommonModule, MatIconModule, MatChipsModule],
  templateUrl: './about-skills.html',
  styleUrl: './about-skills.scss',
})
export class AboutSkills {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'code',
      skills: [
        { name: 'Angular', iconClass: 'devicon-angular-plain colored' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
        { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
        { name: 'SCSS', iconClass: 'devicon-sass-original colored' },
        { name: 'Angular Material', iconClass: 'devicon-angularmaterial-plain colored' }
      ]
    },
    {
      title: 'Backend & Mobile',
      icon: 'terminal',
      skills: [
        { name: '.NET MAUI / C#', iconClass: 'devicon-dotnetcore-plain colored' },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'NestJS', iconClass: 'devicon-nestjs-original colored' },
        { name: 'REST APIs', iconClass: 'devicon-fastapi-plain colored' }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: 'storage',
      skills: [
        { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'MySQL', iconClass: 'devicon-mysql-original colored' },
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' }
      ]
    },
    {
      title: 'DevOps & Herramientas',
      icon: 'build',
      skills: [
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'Git', iconClass: 'devicon-git-plain colored' },
        { name: 'GitHub', iconClass: 'devicon-github-original' },
        { name: 'Postman', iconClass: 'devicon-postman-plain colored' }
      ]
    }
  ];
}
