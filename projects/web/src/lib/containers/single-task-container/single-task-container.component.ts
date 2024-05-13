import { Component } from '@angular/core';
import {SingleTaskComponent} from "../../../../../ui/src/lib/components/single-task/single-task.component";
import {ActivatedRoute} from "@angular/router";
import {resetExecutor, resetPriority, resetStatus, sendActiveTask} from "../../+state/tasks/tasks.actions";
import {Store} from "@ngrx/store";
import {getActiveTask, getExecutorList, getPriorityList, getStatusList} from "../../+state/tasks/tasks.selectors";
import {AsyncPipe} from "@angular/common";
import {TasksListComponent} from "../../../../../ui/src/lib/components/tasks-list/tasks-list.component";

@Component({
  selector: 'single-task-container',
  standalone: true,
  imports: [
    SingleTaskComponent,
    AsyncPipe,
    TasksListComponent,
  ],
  templateUrl: './single-task-container.component.html',
  styleUrl: './single-task-container.component.scss'
})
export class SingleTaskContainerComponent {

  activeTask$ = this.store$.select(getActiveTask);
  priorityList$ = this.store$.select(getPriorityList);
  executorList$ = this.store$.select(getExecutorList);
  statusList$ = this.store$.select(getStatusList);

  constructor(
    private route: ActivatedRoute,
    private store$: Store,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id')!;
      console.log('id = ', id)
      this.store$.dispatch(sendActiveTask({id}));
    });
  }

  events($event: any) {

    if ($event.note === 'setExecutor') {
      this.store$.dispatch(resetExecutor({id: $event.id, name: $event.name}));
    }

    if ($event.note === 'setPriority') {
      this.store$.dispatch(resetPriority({id: $event.id, name: $event.name}));
    }

    if ($event.note === 'setStatus') {
      this.store$.dispatch(resetStatus({id: $event.id, name: $event.name}));
    }

  }
}
