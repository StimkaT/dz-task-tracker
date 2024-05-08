import { createAction, props } from '@ngrx/store';
import {TasksState} from "./tasks.reducer";

export const addNewTask = createAction(
  `[todoList] addNewTask`,
  props<{ name: string, description: string }>()
);

export const deleteTask = createAction(
  `[todoList] deleteTask`,
  props<{ id: number }>()
);

export const setComplete = createAction(
  `[todoList] setComplete`,
  props<{ id: number }>()
);

export const loadState = createAction(
  `[todoList] loadState`,
  props<{ loadState: TasksState }>()
);

export const markTask = createAction(
  `[todoList] markTask`,
  props<{ completed: boolean }>()
);
