import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TASKS_FEATURE_KEY, TasksState} from './tasks.reducer';


export const selectFeature = createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

export const getTaskList = createSelector(
  selectFeature,
  (state: TasksState) => state.tasksList
);

export const getActiveTaskList = createSelector(
  selectFeature,
  (state: TasksState) => {
    const statusFilter = state.statusList.find(status => status.active)?.name;
    const executorFilter = state.executorList.find(executor => executor.active)?.name;
    const priorityFilter = state.priorityList.find(priority => priority.active)?.name;

    return state.tasksList.filter(task =>
      (!statusFilter || task.properties.status === statusFilter) &&
      (!executorFilter || task.properties.executor === executorFilter) &&
      (!priorityFilter || task.properties.priority === priorityFilter)
    );
  }
);

export const getPriorityList = createSelector(
  selectFeature,
  (state: TasksState) => state.priorityList
);

export const getExecutorList = createSelector(
  selectFeature,
  (state: TasksState) => state.executorList
);

export const getStatusList = createSelector(
  selectFeature,
  (state: TasksState) => state.statusList
);

export const getActiveTask = createSelector(
  selectFeature,
  (state: TasksState) => state.activeTask
);

