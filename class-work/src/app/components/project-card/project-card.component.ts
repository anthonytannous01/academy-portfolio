import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.css'],
  standalone: true
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() github!: string;
  @Input() liveDemo!: string;

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
