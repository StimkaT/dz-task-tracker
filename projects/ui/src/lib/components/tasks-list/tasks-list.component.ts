import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ITasksList} from "../../../../../web/src/lib/+state/tasks/tasks.reducer";

@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  @Output() emitter = new EventEmitter<any>();
  @Input() tasksList: ITasksList[] | null = [];

  buttonClick(event: number, note: string){
    if (note === 'openTask') {
      this.emitter.emit(event);
    }

  }
}
