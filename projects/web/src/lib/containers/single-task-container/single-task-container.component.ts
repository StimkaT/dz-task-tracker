import { Component } from '@angular/core';
import {SingleTaskComponent} from "../../../../../ui/src/lib/components/single-task/single-task.component";

@Component({
  selector: 'single-task-container',
  standalone: true,
  imports: [
    SingleTaskComponent,
  ],
  templateUrl: './single-task-container.component.html',
  styleUrl: './single-task-container.component.scss'
})
export class SingleTaskContainerComponent {

}
