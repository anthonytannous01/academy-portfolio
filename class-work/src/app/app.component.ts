import { RouterOutlet } from "@angular/router";
import { Component } from "@angular/core";
import { NavbarComponent } from "./components/core/navbar/navbar.component";
import { ProfileIntroComponent } from "./components/features/profile/profile-intro/profile-intro.component";
import { AboutMeComponent } from "./components/features/about/about-me/about-me.component";
import { ProjectsComponent } from "./components/features/all-projects/projects/projects.component";





@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    ProfileIntroComponent,
    AboutMeComponent,
    ProjectsComponent,
    RouterOutlet,
  ],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "test-ang";
}
