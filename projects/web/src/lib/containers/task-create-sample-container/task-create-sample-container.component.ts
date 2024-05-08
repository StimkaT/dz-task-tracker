import {Component, Inject} from '@angular/core';
import {
  TaskCreateSampleComponent
} from "../../../../../ui/src/lib/components/task-create-sample/task-create-sample.component";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'lib-task-create-sample-container',
  standalone: true,
  imports: [
    TaskCreateSampleComponent,
  ],
  templateUrl: './task-create-sample-container.component.html',
  styleUrl: './task-create-sample-container.component.scss'
})
export class TaskCreateSampleContainerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
  }
}
