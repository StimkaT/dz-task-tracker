import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenu, MatMenuItem, MatMenuModule} from "@angular/material/menu";
import {MatDatepicker, MatDatepickerInput} from "@angular/material/datepicker";
import { IProperty } from "../../../../../web/src/lib/+state/tasks/tasks.reducer";

@Component({
  selector: 'task-create-sample',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatMenu,
    MatMenuItem,
    MatFormFieldModule,
    MatMenuModule,
    MatDatepicker,
    MatDatepickerInput,
  ],
  templateUrl: './task-create-sample.component.html',
  styleUrl: './task-create-sample.component.scss'
})
export class TaskCreateSampleComponent {
  @Output() emitter = new EventEmitter<any>();
  @Input() executorList: IProperty[] | null = [];
  @Input() priorityList: IProperty[] | null = [];
  @Input() statusList: IProperty[] | null = [];

  name = '';
  description = '';
  User = 'Executor';
  Priority = 'Priority';
  Status = 'Status';
  Deadline = 0;




  buttonClick(event: string, note: string) {
    if (note === 'setPriority') {
      this.Priority = event;
    }
    if (note === 'setStatus') {
      this.Status = event;
    }
    if (note === 'setExecutor') {
      this.User = event;
    }
}

  createTask(name: string, description: string) {
    if (this.name) {
      const message = {
        event: 'TaskCreateSampleComponent:buttonClick',
        name,
        description,
        executor: this.User,
        priority: this.Priority,
        status: this.Status,
        deadline: this.Deadline,
      };
      this.emitter.emit(message);

      this.name = '';
      this.description = '';
      this.User = 'Executor';
      this.Priority = 'Priority';
      this.Status = 'Status';
      this.Deadline = 0;
    }
  }

  goNext(event$: string){
    const message = {
      event: 'ToDoComponent:buttonClick',
      rout: event$
    };
    this.emitter.emit(message)
  }
}
