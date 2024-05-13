import { Component } from '@angular/core';
import {TasksListComponent} from "../../../../../ui/src/lib/components/tasks-list/tasks-list.component";
import {
  getActiveTaskList,
  getExecutorList,
  getPriorityList,
  getStatusList, selectFeature,
} from "../../+state/tasks/tasks.selectors";
import {select, Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
import {
  TaskCreateSampleComponent
} from "../../../../../ui/src/lib/components/task-create-sample/task-create-sample.component";
import {
  clearFilter,
  deleteTask, editTask, loadState, resetExecutor, resetPriority, resetStatus,
  setFilterExecutor,
  setFilterPriority,
  setFilterStatus
} from "../../+state/tasks/tasks.actions";
import {filter} from "rxjs";

export const TASK_LOCALSTORAGE_KEY = 'task'

@Component({
  selector: 'tasks-list-container',
  standalone: true,
  imports: [
    TasksListComponent,
    AsyncPipe,
    TaskCreateSampleComponent,
  ],
  templateUrl: './tasks-list-container.component.html',
  styleUrl: './tasks-list-container.component.scss'
})
export class TasksListContainerComponent {
  constructor(
    private store$: Store,
    private router: Router,
  ) {}

  private loadStorage: boolean = false;

  ngOnInit() {
    if (this.loadStorage) {
      return
    }

    this.loadStorage = true;

    this.loadFromStorage();
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(TASK_LOCALSTORAGE_KEY);
    console.log('из локала получили', storageState);
    if (storageState) {
      this.store$.dispatch(loadState({loadState: JSON.parse(storageState)}));
    }
  }

  tasksList$ = this.store$.select(getActiveTaskList);
  priorityList$ = this.store$.select(getPriorityList);
  executorList$ = this.store$.select(getExecutorList);
  statusList$ = this.store$.select(getStatusList);

  events($event: any) {
    if ($event.note === 'openTask') {
    this.router.navigate(['task', $event.event]);
    } else if ($event.note === 'setStatus'){
        this.store$.dispatch(setFilterStatus({name: $event.event}))
    } else if ($event.note === 'setPriority'){
        this.store$.dispatch(setFilterPriority({name: $event.event}))
    } else if ($event.note === 'setExecutor'){
        this.store$.dispatch(setFilterExecutor({name: $event.event}))
    } else if ($event.note === 'clearFilter'){
        this.store$.dispatch(clearFilter())
    }
      if ($event.note === 'deleteTask') {
      this.store$.dispatch(deleteTask({id: $event.event}));
    }
      if ($event.note === 'editTask') {
      this.store$.dispatch(editTask({id: $event.event.id, name: $event.event.name}));
    }

    if ($event.note === 'setExecutor') {
      this.store$.dispatch(resetExecutor({id: $event.id, name: $event.name}));
    }

    if ($event.note === 'setPriority') {
      this.store$.dispatch(resetPriority({id: $event.id, name: $event.name}));
    }

    if ($event.note === 'setStatus') {
      this.store$.dispatch(resetStatus({id: $event.id, name: $event.name}));
    }

    this.store$.pipe(
      select(selectFeature),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(state));
    })
  }


}
