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
  name: string;
  active: boolean;
}

export interface TasksState {
  executorList: IProperty[];
  priorityList: IProperty[];
  statusList: IProperty[];
  tasksList: ITasksList[];
  activeTasksList: ITasksList[];
  activeTask: ITasksList[];
  implementId: number;
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const initialState: TasksState = {
  activeTask: [],
  activeTasksList: [],
  tasksList: [],
  implementId: 0,

  executorList: [
    {name: 'User1', active: false},
    {name: 'User2', active: false},
    {name: 'User3', active: false},
  ],
  priorityList: [
    {name: 'High', active: false},
    {name: 'Medium', active: false},
    {name: 'Low', active: false},
  ],
  statusList: [
    {name: 'Done', active: false},
    {name: 'In progress', active: false},
    {name: 'Wait', active: false},
  ],
};

export const TasksReducer = createReducer(
  initialState,

  on(TasksActions.addNewTask, (state, { name, description, status, deadline, executor, priority }) => {
    const newTask = {
      properties: {
        executor,
        deadline,
        priority,
        status,
      },
      id: state.implementId + 1,
      name,
      description,
    };

    const updatedTasksList = [...state.tasksList, newTask];

    return {
      ...state,
      implementId: state.implementId + 1,
      tasksList: updatedTasksList,
      activeTasksList: updatedTasksList,
    };
  }),

  on(TasksActions.setActiveTasksList, (state, {newActiveTasksList}) => ({
    ...state,
    activeTasksList: newActiveTasksList,
  })),

  on(TasksActions.setFilterStatus, (state, { name }) => ({
    ...state,
    statusList: state.statusList.map(task => ({
      ...task,
      active: task.name === name
    })),
  })),

  on(TasksActions.setFilterPriority, (state, { name }) => ({
    ...state,
    priorityList: state.priorityList.map(task => ({
      ...task,
      active: task.name === name
    })),
  })),

  on(TasksActions.setFilterExecutor, (state, { name }) => ({
    ...state,
    executorList: state.executorList.map(task => ({
      ...task,
      active: task.name === name
    })),
  })),

  on(TasksActions.clearFilter, (state) => ({
    ...state,
    executorList: state.executorList.map(executor => ({ ...executor, active: false })),
    priorityList: state.priorityList.map(priority => ({ ...priority, active: false })),
    statusList: state.statusList.map(status => ({ ...status, active: false })),
  })),

  on(TasksActions.editTask, (state, { id, name }) => ({
    ...state,
    tasksList: state.tasksList.map(task => task.id === id ? { ...task, name: name } : task),
  })),

  on(TasksActions.deleteTask, (state, { id }) => ({
    ...state,
    tasksList: state.tasksList.filter((task) => task.id !== id),
  })),

  on(TasksActions.resetExecutor, (state, { id, name }) => ({
    ...state,
    tasksList: state.tasksList.map((task) => (task.id === id) ? { ...task, properties: { ...task.properties, executor: name } } : task),
  })),

  on(TasksActions.resetPriority, (state, { id, name }) => ({
    ...state,
    tasksList: state.tasksList.map((task) => (task.id === id) ? { ...task, properties: { ...task.properties, priority: name } } : task),
  })),

  on(TasksActions.resetStatus, (state, { id, name }) => ({
    ...state,
    tasksList: state.tasksList.map((task) => (task.id === id) ? { ...task, properties: { ...task.properties, status: name } } : task),
  })),








  on(TasksActions.loadState, (state, {loadState}) => ({...state, ...loadState})),
  on(TasksActions.setActiveTask, (state, {task}) => ({...state, activeTask: task})),
);

//
// import { createReducer, on } from '@ngrx/store';
// import * as TasksActions from './tasks.actions';
//
// export const TASKS_FEATURE_KEY = 'tasksList';
//
// export interface ITaskProperties {
//   executor: string;
//   deadline: any;
//   priority: string;
//   status: string;
// }
//
// export interface ITasksList {
//   name: string;
//   description: string;
//   id: number;
//   properties: ITaskProperties;
// }
//
// export interface IProperty {
//   label: string;
//   contentProperties: IContentProperties[];
// }
//
// export interface IContentProperties {
//   name: string;
//   active: boolean;
// }
//
// export interface TasksState {
//   executorList: IProperty;
//   priorityList: IProperty;
//   statusList: IProperty;
//   tasksList: ITasksList[];
//   activeTasksList: ITasksList[];
//   activeTask: ITasksList[];
//   implementId: number;
// }
//
// export interface TasksPartialState {
//   readonly [TASKS_FEATURE_KEY]: TasksState;
// }
//
// export const initialState: TasksState = {
//   activeTask: [],
//   activeTasksList: [],
//   tasksList: [],
//   implementId: 0,
//
//   executorList: {
//     label: 'Executor',
//     contentProperties: [
//       {name: 'User1', active: false},
//       {name: 'User2', active: false},
//       {name: 'User3', active: false},
//     ],
//   },
//
//   priorityList: {
//     label: 'Priority',
//     contentProperties: [
//       {name: 'High', active: false},
//       {name: 'Medium', active: false},
//       {name: 'Low', active: false},
//     ],
//   },
//
//   statusList: {
//     label: 'Status',
//     contentProperties: [
//       {name: 'Done', active: false},
//       {name: 'In progress', active: false},
//       {name: 'Wait', active: false},
//     ],
//   },
// };
//
// export const TasksReducer = createReducer(
//   initialState,
//
//   on(TasksActions.addNewTask, (state, { name, description, status, deadline, executor, priority }) => {
//     const newTask = {
//       properties: {
//         executor,
//         deadline,
//         priority,
//         status,
//       },
//       id: state.implementId + 1,
//       name,
//       description,
//     };
//
//     const updatedTasksList = [...state.tasksList, newTask];
//
//     return {
//       ...state,
//       implementId: state.implementId + 1,
//       tasksList: updatedTasksList,
//       activeTasksList: updatedTasksList,
//     };
//   }),
//
//   on(TasksActions.setActiveTasksList, (state, {newActiveTasksList}) => ({
//     ...state,
//     activeTasksList: newActiveTasksList,
//   })),
//
//   on(TasksActions.setFilterStatus, (state, { name }) => ({
//     ...state,
//     statusList: state.statusList.map(task => ({
//       ...task,
//       active: task.name === name
//     })),
//   })),
//
//   on(TasksActions.setFilterPriority, (state, { name }) => ({
//     ...state,
//     priorityList: state.priorityList.map(task => ({
//       ...task,
//       active: task.name === name
//     })),
//   })),
//
//   on(TasksActions.setFilterExecutor, (state, { name }) => ({
//     ...state,
//     executorList: state.executorList.map(task => ({
//       ...task,
//       active: task.name === name
//     })),
//   })),
//
//   on(TasksActions.clearFilter, (state) => ({
//     ...state,
//     executorList: state.executorList.map(executor => ({ ...executor, active: false })),
//     priorityList: state.priorityList.map(priority => ({ ...priority, active: false })),
//     statusList: state.statusList.map(status => ({ ...status, active: false })),
//   })),
//
//   on(TasksActions.editTask, (state, { id, name }) => ({
//     ...state,
//     tasksList: state.tasksList.map(task => task.id === id ? { ...task, name: name } : task),
//   })),
//
//   on(TasksActions.deleteTask, (state, { id }) => ({
//     ...state,
//     tasksList: state.tasksList.filter((task) => task.id !== id),
//   })),
//
//   on(TasksActions.resetExecutor, (state, { id, name }) => ({
//     ...state,
//     tasksList: state.tasksList.map((task) => (task.id === id) ? { ...task, properties: { ...task.properties, executor: name } } : task),
//   })),
//
//   on(TasksActions.resetPriority, (state, { id, name }) => ({
//     ...state,
//     tasksList: state.tasksList.map((task) => (task.id === id) ? { ...task, properties: { ...task.properties, priority: name } } : task),
//   })),
//
//   on(TasksActions.resetStatus, (state, { id, name }) => ({
//     ...state,
//     tasksList: state.tasksList.map((task) => (task.id === id) ? { ...task, properties: { ...task.properties, status: name } } : task),
//   })),
//
//
//
//
//
//
//
//
//   on(TasksActions.loadState, (state, {loadState}) => ({...state, ...loadState})),
//   on(TasksActions.setActiveTask, (state, {task}) => ({...state, activeTask: task})),
// );
//
//



