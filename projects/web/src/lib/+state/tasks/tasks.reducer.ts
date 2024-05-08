import { createReducer, on } from '@ngrx/store';
import * as TasksActions from './tasksList.actions';

export const TASKS_FEATURE_KEY = 'tasksList';

export interface ITaskProperties {
  id: number;
  executor: string;
  deadline: any;
  priority: string;
  status: string;
}

export interface ITasksList {
  name: string;
  description: string;
  properties: ITaskProperties;
}

export interface TasksState {
  tasksList: ITasksList[];
  filterList: ITasksList[];
  implementId: number;
}

export interface TripodMessagesPartialState {
    readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const initialState: TasksState = {
  filterList: [],
  tasksList: [],
  implementId: 0,
};

export const TasksReducer = createReducer(
    initialState,

  on(TasksActions.addNewTask, (state, { titleToDo, descriptionToDo }) => ({
    ...state,
    implementId: state.implementId + 1,
    tasksList: [...state.tasksList, {
      properties: {
        id: state.implementId,
        executor: 'string',
        deadline: 'any',
        priority: 'string',
        status: 'string',
      },
      name: titleToDo,
      description: descriptionToDo,
      completed: false }],

  })),

  on(TasksActions.deleteTask, (state, { id }) => ({
    ...state,
    tasksList: state.tasksList.filter((task) => task.id !== id),
  })),

  on(TasksActions.setComplete, (state, { id }) => ({
    ...state,
    tasksList: state.tasksList.map((task) => task.id === id ? {
      ...task,
      completed: !task.completed,
    } : task ),
  })),
  on(TasksActions.loadState, (state, {loadState}) => ({...state, ...loadState})),
);


