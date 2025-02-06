import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true
})
export class ProjectsComponent {
  projects = [
    { title: 'Project One', image: 'assets/project-1.png', github: 'https://github.com/', liveDemo: 'https://github.com/' },
    { title: 'Project Two', image: 'assets/project-2.png', github: 'https://github.com/', liveDemo: 'https://github.com/' },
    { title: 'Project Three', image: 'assets/project-3.png', github: 'https://github.com/', liveDemo: 'https://github.com/' }
  ];
}
