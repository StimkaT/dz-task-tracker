import { Component } from '@angular/core';
import {TasksListComponent} from "../../../../../ui/src/lib/components/tasks-list/tasks-list.component";
import {getTaskList} from "../../+state/tasks/tasks.selectors";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'tasks-list-container',
  standalone: true,
  imports: [
    TasksListComponent,
    AsyncPipe,
  ],
  templateUrl: './tasks-list-container.component.html',
  styleUrl: './tasks-list-container.component.scss'
})
export class TasksListContainerComponent {
  constructor(
    private store$: Store,
    private router: Router,
  ) {}

  tasksList$ = this.store$.select(getTaskList);

  events($event: number) {
    this.router.navigate(['task', $event]);
  }


}
