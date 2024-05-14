import { createAction, props } from '@ngrx/store';
import {ITasksList, TasksState} from "./tasks.reducer";

export const addNewTask = createAction(
  `[tasks] addNewTask`,
  props<{ name: string, description: string, status: string, priority: string, executor: string, deadline: any }>()
);

export const sendActiveTask = createAction(
  `[tasks] sendActiveTask`,
  props<{ id: number }>()
);

export const setActiveTask = createAction(
  `[tasks] setActiveTask`,
  props<{ task: ITasksList[] }>()
);

export const setActiveTasksList = createAction(
  `[tasks] setActiveTasksList`,
  props<{ newActiveTasksList: ITasksList[] }>()
);

export const setFilterStatus = createAction(
  `[tasks] sendFilterStatus`,
  props<{ name: string }>()
);

export const setFilterExecutor = createAction(
  `[tasks] setFilterExecutor`,
  props<{ name: string }>()
);

export const setFilterPriority = createAction(
  `[tasks] setFilterPriority`,
  props<{ name: string }>()
);

export const clearFilter = createAction(
  `[tasks] clearFilter`,
);

export const deleteTask = createAction(
  `[tasks] deleteTask`,
  props<{ id: number }>()
);

export const editTask = createAction(
  `[tasks] editTask`,
  props<{ id: number, name: string }>()
);

export const resetExecutor = createAction(
  `[tasks] resetExecutor`,
  props<{ id: number, name: string }>()
);

export const resetPriority = createAction(
  `[tasks] resetPriority`,
  props<{ id: number, name: string }>()
);

export const resetStatus = createAction(
  `[tasks] resetStatus`,
  props<{ id: number, name: string }>()
);

export const loadState = createAction(
  `[tasks] loadState`,
  props<{ loadState: TasksState }>()
);


