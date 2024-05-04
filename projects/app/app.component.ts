import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavPanelComponent} from "../ui/src/lib/components/nav-panel/nav-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dz-task-tracker';
}
