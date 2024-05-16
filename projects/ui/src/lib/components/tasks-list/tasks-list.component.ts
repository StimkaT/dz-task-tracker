import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {IProperty, ITasksList} from "../../../../../web/src/lib/+state/tasks/tasks.reducer";
import {MatMenu, MatMenuItem, MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import {ResetPropertyButtonComponent} from "../reset-property-button/reset-property-button.component";
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {
  clearFilter, deleteTask, editTask, resetExecutor, resetName, resetPriority, resetStatus,
  setFilterExecutor,
  setFilterPriority,
  setFilterStatus
} from "../../../../../web/src/lib/+state/tasks/tasks.actions";
import {MatDatepicker, MatDatepickerInput} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenuItem,
    MatFormFieldModule,
    MatMenu,
    MatMenuModule,
    FormsModule,
    ResetPropertyButtonComponent,
    EditTaskComponent,
    MatDatepicker,
    MatDatepickerInput,
    MatInput,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  @Input() tasksList: ITasksList[] | null = [];
  @Input() executorList: IProperty[] | null = [];
  @Input() priorityList: IProperty[] | null = [];
  @Input() statusList: IProperty[] | null = [];

  @Output() emitter = new EventEmitter<any>();

  editTaskId = -1;

  buttonClick(event: any, note: string) {
    const message = {
      event,
      note
    }
    this.emitter.emit(message);
  }

  events(name: string, id: number, note: string) {
    const message = {
      name,
      id,
      note
    }
    this.emitter.emit(message);

    if (note === 'resetNameTask') {
      this.editTaskId = -1;
    }
  }

  resetProperty(name: any, id: number, note: string) {
    const message = {
      name,
      id,
      note
    }
    this.emitter.emit(message);
}

}
