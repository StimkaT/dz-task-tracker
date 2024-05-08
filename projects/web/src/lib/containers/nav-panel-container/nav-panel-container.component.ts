import { Component } from '@angular/core';
import {NavPanelComponent} from "../../../../../ui/src/lib/components/nav-panel/nav-panel.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreateSampleContainerComponent} from "../task-create-sample-container/task-create-sample-container.component";
import {Router} from "@angular/router";

@Component({
  selector: 'nav-panel-container',
  standalone: true,
  imports: [
    NavPanelComponent,

  ],
  templateUrl: './nav-panel-container.component.html',
  styleUrl: './nav-panel-container.component.scss'
})
export class NavPanelContainerComponent {

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {
  }

  events($event: any): void {
    console.log($event);
    if ($event === 'popup') {
      const dialogRef = this.dialog.open(TaskCreateSampleContainerComponent, {
        data: {},
      });

      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      // });
    } else if ($event === 'tasksList') {
      this.router.navigate(['']);
    }
  }
}
