import { Component } from '@angular/core';
import {NavPanelContainerComponent} from "../../nav-panel-container/nav-panel-container.component";
import {SingleTaskContainerComponent} from "../../single-task-container/single-task-container.component";
import {PageSampleComponent} from "../../../../../../ui/src/lib/layouts/page-sample/page-sample.component";

@Component({
  selector: 'task-page-container',
  standalone: true,
  imports: [
    NavPanelContainerComponent,
    SingleTaskContainerComponent,
    PageSampleComponent,
  ],
  templateUrl: './task-page-container.component.html',
  styleUrl: './task-page-container.component.scss'
})
export class TaskPageContainerComponent {

}
