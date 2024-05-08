import { Component } from '@angular/core';
import {TasksListComponent} from "../../../../../ui/src/lib/components/tasks-list/tasks-list.component";

@Component({
  selector: 'tasks-list-container',
  standalone: true,
  imports: [
    TasksListComponent,
  ],
  templateUrl: './tasks-list-container.component.html',
  styleUrl: './tasks-list-container.component.scss'
})
export class TasksListContainerComponent {

}
