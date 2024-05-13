import { Injectable } from '@angular/core';
import {createEffect, Actions, ofType, concatLatestFrom,} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {sendActiveTask, setActiveTask} from "./tasks.actions";
import {getTaskList} from "./tasks.selectors";
import {tap} from "rxjs";


@Injectable()
export class TasksEffects {

  getActiveTask$ = createEffect(() =>
      this.actions$.pipe(
        ofType(sendActiveTask),
        concatLatestFrom(() => this.store.select(getTaskList)),
        tap(([{id}, tasksList]) => {
          const activeTask = tasksList.filter((task) => task.id === id);
          console.log('Активный', activeTask);
          this.store.dispatch(setActiveTask({task: activeTask}));
        })
      ),
    {
      dispatch: false,
    }
  );

  // setFilterStatus$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(sendFilterStatus),
  //       concatLatestFrom(() => this.store.select(getTaskList)),
  //       tap(([{status}, activeTasksList]) => {
  //         const newActiveTasksList = activeTasksList.filter((task) => task.properties.status === status);
  //         console.log('Активный', newActiveTasksList);
  //         this.store.dispatch(setActiveTasksList({newActiveTasksList: newActiveTasksList}));
  //       })
  //     ),
  //   {
  //     dispatch: false,
  //   }
  // );

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

}
