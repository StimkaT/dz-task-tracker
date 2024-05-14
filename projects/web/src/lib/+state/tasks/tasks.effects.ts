import { tap } from "rxjs";
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { getTaskList, selectFeature } from "./tasks.selectors";
import {
  addNewTask, clearFilter, deleteTask, editTask, resetExecutor, resetPriority, resetStatus,
  sendActiveTask,
  setActiveTask,
  setFilterExecutor,
  setFilterPriority,
  setFilterStatus
} from "./tasks.actions";
import {createEffect, Actions, ofType, concatLatestFrom,} from '@ngrx/effects';
import {TASK_LOCALSTORAGE_KEY} from "../../../../../../src/app/app.component";


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

  loadState1$ = createEffect(() =>
      this.actions$.pipe(
        ofType(
          addNewTask,
          setFilterStatus,
          setFilterExecutor,
          setFilterPriority,
          clearFilter,
          deleteTask,
          editTask,
          resetExecutor,
          resetPriority,
          resetStatus,
        ),
        concatLatestFrom(() => this.store.select(selectFeature)),
        tap(([{}, state]) => {
          localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(state));
        })
      ),
    {
      dispatch: false,
    }
  );

  // loadState$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(addNewTask, setFilterStatus),
  //     mergeMap(action => {
  //
  //         localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(state));
  //
  //
  //   ),
  //   {
  //     dispatch: false,
  //   }
  // );

  constructor(
    private store: Store,
    private actions$: Actions,
  ) {}

}
