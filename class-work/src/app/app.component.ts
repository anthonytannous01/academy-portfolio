import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProfileComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'test-ang';
}
