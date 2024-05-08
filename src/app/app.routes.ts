import { Routes } from '@angular/router';
import { MainPageContainerComponent } from "../../projects/web/src/lib/containers/page-containers/main-page-container/main-page-container.component";
import { TaskPageContainerComponent } from "../../projects/web/src/lib/containers/page-containers/task-page-container/task-page-container.component";
import { TasksListPageContainerComponent } from "../../projects/web/src/lib/containers/page-containers/tasks-list-page-container/tasks-list-page-container.component";

export const routes: Routes = [
  {
    path: '',
    component: TasksListPageContainerComponent,
  },

  {
    path: 'task/:id',
    component: TaskPageContainerComponent,
  },
];
