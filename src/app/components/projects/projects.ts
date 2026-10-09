import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  title: string;
  category: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: {name: string, iconClass: string}[];
  featuredIcon: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsList: Project[] = [
    {
      title: 'Sistema Móvil de Control y Gestión de Estaciones',
      category: 'Desarrollo Móvil Empresarial',
      type: 'Proyecto Profesional',
      featuredIcon: 'smartphone',
      description: 'Aplicación móvil empresarial orientada a la gestión remota e interrupción en tiempo real del flujo operativo de estaciones centralizadas. Permite a los supervisores suspender o activar operaciones (ventas, entradas y salidas) de forma inmediata ante incidencias críticas.',
      highlights: [
        'Interrupción en tiempo real de transacciones críticas en estaciones centralizadas.',
        'Autenticación y autorización segura con JWT Bearer Tokens.',
        'Arquitectura desacoplada mediante consumo optimizado de APIs RESTful.'
      ],
      technologies: [
        { name: '.NET MAUI', iconClass: 'devicon-dotnetcore-plain colored' },
        { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
        { name: 'REST APIs', iconClass: 'devicon-fastapi-plain colored' }
      ]
    },
    {
      title: 'Herramienta de Migración Visual de Clientes y Datos Legados',
      category: 'Frontend & Modernización Backend',
      type: 'Proyecto Profesional',
      featuredIcon: 'terminal',
      description: 'Plataforma web desarrollada para automatizar la extracción y migración de datos desde sistemas legados hacia bases de datos modernas. Sustituyó un proceso manual y dependiente del equipo técnico por una interfaz gráfica accesible para personal operativo.',
      highlights: [
        'Reducción drástica de dependencia técnica en tareas operativas repetitivas.',
        'Desarrollo de endpoints backend optimizados en NestJS para transferencia de datos.',
        'Gestión de infraestructura del backend mediante contenedores Docker y análisis de logs.'
      ],
      technologies: [
        { name: 'Angular', iconClass: 'devicon-angular-plain colored' },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'NestJS', iconClass: 'devicon-nestjs-original colored' },
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' }
      ]
    },
    {
      title: 'Rediseño Total del Portal Web de Facturación Empresarial',
      category: 'Frontend Avanzado & Integración',
      type: 'Proyecto Profesional',
      featuredIcon: 'space_dashboard',
      description: 'Modernización integral del portal de facturación electrónica. Ofrece flujos de facturación exprés (sin cuenta) y administración completa de perfiles fiscales, con capacidad de consulta masiva o individual de tickets de consumo.',
      highlights: [
        'Protección de rutas con Guards de Angular y modelos de datos fuertemente tipados.',
        'Validación estricta de entradas de datos con FluentValidator en integración backend.',
        'Paginación dinámica de registros y experiencia de usuario fluida con Angular Material y Tailwind.'
      ],
      technologies: [
        { name: 'Angular', iconClass: 'devicon-angular-plain colored' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
        { name: 'Angular Material', iconClass: 'devicon-angularmaterial-plain colored' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' }
      ]
    }
  ];
}
