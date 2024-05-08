import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavPanelComponent} from "../../projects/ui/src/lib/components/nav-panel/nav-panel.component";
import {SingleTaskComponent} from "../../projects/ui/src/lib/components/single-task/single-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavPanelComponent,
    SingleTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dz-task-page-tracker';
}
