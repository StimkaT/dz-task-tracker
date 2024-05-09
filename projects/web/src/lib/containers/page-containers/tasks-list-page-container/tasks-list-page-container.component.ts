import { Component } from '@angular/core';
import {NavPanelContainerComponent} from "../../nav-panel-container/nav-panel-container.component";
import {TasksListContainerComponent} from "../../tasks-list-container/tasks-list-container.component";
import {PageSampleComponent} from "../../../../../../ui/src/lib/layouts/page-sample/page-sample.component";

@Component({
  selector: 'tasks-list-page-container',
  standalone: true,
  imports: [
    NavPanelContainerComponent,
    TasksListContainerComponent,
    PageSampleComponent,
  ],
  templateUrl: './tasks-list-page-container.component.html',
  styleUrl: './tasks-list-page-container.component.scss'
})
export class TasksListPageContainerComponent {


}
