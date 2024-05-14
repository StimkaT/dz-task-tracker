import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Component, Inject} from '@angular/core';
import {addNewTask} from "../../+state/tasks/tasks.actions";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {getExecutorList, getPriorityList, getStatusList} from "../../+state/tasks/tasks.selectors";
import {TaskCreateSampleComponent} from "../../../../../ui/src/lib/components/task-create-sample/task-create-sample.component";

@Component({
  selector: 'lib-task-create-sample-container',
  standalone: true,
  imports: [
    TaskCreateSampleComponent,
    AsyncPipe,
  ],
  templateUrl: './task-create-sample-container.component.html',
  styleUrl: './task-create-sample-container.component.scss'
})
export class TaskCreateSampleContainerComponent {

  priorityList$ = this.store$.select(getPriorityList);
  executorList$ = this.store$.select(getExecutorList);
  statusList$ = this.store$.select(getStatusList);

  constructor(
    public dialogRef: MatDialogRef<TaskCreateSampleContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store$: Store
  ) {}

  events($event: any) {
    if ($event === 'close') {
      this.dialogRef.close();
    } else {
      this.store$.dispatch(addNewTask({
        name: $event.name,
        description: $event.description,
        status: $event.status,
        priority: $event.priority,
        executor: $event.executor,
        deadline: $event.deadline
      }));
      this.dialogRef.close();
    }
  }
}
