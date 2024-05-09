import { createReducer, on } from '@ngrx/store';
import * as TasksActions from './tasks.actions';

export const TASKS_FEATURE_KEY = 'tasksList';

export interface ITaskProperties {
  executor: string;
  deadline: any;
  priority: string;
  status: string;
}

export interface ITasksList {
  name: string;
  description: string;
  id: number;
  properties: ITaskProperties;
}

export interface IProperty {
  name:string
}

export interface TasksState {
  executorList: IProperty[];
  priorityList: IProperty[];
  statusList: IProperty[];
  tasksList: ITasksList[];
  implementId: number;
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const initialState: TasksState = {
  executorList: [
    {name: 'User1'},
    {name: 'User2'},
    {name: 'User3'},
  ],
  priorityList: [
    {name: 'High'},
    {name: 'Medium'},
    {name: 'Low'},
  ],
  statusList: [
    {name: 'Done'},
    {name: 'In progress'},
    {name: 'Wait'},
  ],
  tasksList: [],
  implementId: 0,
};

export const TasksReducer = createReducer(
  initialState,

  on(TasksActions.addNewTask, (state, { name, description, status, deadline, executor, priority }) => ({
    ...state,
    implementId: state.implementId + 1,
    tasksList: [...state.tasksList, {
      properties: {
        executor,
        deadline,
        priority,
        status,
      },
      id: state.implementId,
      name,
      description,
    }],
  })),

  on(TasksActions.deleteTask, (state, { id }) => ({
    ...state,
    tasksList: state.tasksList.filter((task) => task.id !== id),
  })),


  on(TasksActions.loadState, (state, {loadState}) => ({...state, ...loadState})),
);


