import { createAction, props } from '@ngrx/store';
import {TasksState} from "./tasks.reducer";

export const addNewTask = createAction(
  `[tasks] addNewTask`,
  props<{ name: string, description: string, status: string, priority: string, executor: string, deadline: any }>()
);

export const deleteTask = createAction(
  `[tasks] deleteTask`,
  props<{ id: number }>()
);

export const setStatus = createAction(
  `[tasks] setStatus`,
  props<{ id: number, status: string }>()
);

export const setPriority = createAction(
  `[tasks] setPriority`,
  props<{ id: number, priority: string }>()
);

export const setExecutor = createAction(
  `[tasks] setExecutor`,
  props<{ id: number, executor: string }>()
);

export const setDeadline = createAction(
  `[tasks] setDeadline`,
  props<{ id: number, deadline: string }>()
);

export const loadState = createAction(
  `[tasks] loadState`,
  props<{ loadState: TasksState }>()
);

export const markTask = createAction(
  `[tasks] markTask`,
  props<{ completed: boolean }>()
);
