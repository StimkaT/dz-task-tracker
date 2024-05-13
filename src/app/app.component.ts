import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavPanelComponent} from "../../projects/ui/src/lib/components/nav-panel/nav-panel.component";
import {SingleTaskComponent} from "../../projects/ui/src/lib/components/single-task/single-task.component";
import {Store} from "@ngrx/store";
import {loadState} from "../../projects/web/src/lib/+state/tasks/tasks.actions";
import {isPlatformBrowser} from "@angular/common";

export const TASK_LOCALSTORAGE_KEY = 'task'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavPanelComponent,
    SingleTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dz-task-page-tracker';

  constructor(
    private store$: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}


  private loadStorage: boolean = false;

  ngOnInit() {
    if (this.loadStorage) {
      return
    }

    this.loadStorage = true;

    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const storageState = localStorage.getItem(TASK_LOCALSTORAGE_KEY);
      if (storageState) {
        this.store$.dispatch(loadState({loadState: JSON.parse(storageState)}));
      }
    }
  }
}
