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
import {MatDatepicker, MatDatepickerInput, MatDatepickerModule} from "@angular/material/datepicker";
import { IProperty } from "../../../../../web/src/lib/+state/tasks/tasks.reducer";
import {provideNativeDateAdapter} from "@angular/material/core";
import {AsyncPipe} from "@angular/common";
import {TaskCreatePropertyComponent} from "../task-create-property/task-create-property.component";
import {SingleTaskComponent} from "../single-task/single-task.component";

@Component({
  selector: 'task-create-sample',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatMenu,
    MatMenuItem,
    MatMenuModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule,
    AsyncPipe,
    TaskCreatePropertyComponent,
    SingleTaskComponent,
  ],
  templateUrl: './task-create-sample.component.html',
  styleUrl: './task-create-sample.component.scss'
})
export class TaskCreateSampleComponent {
  @Input() executorList: IProperty[] | null = [];
  @Input() priorityList: IProperty[] | null = [];
  @Input() statusList: IProperty[] | null = [];

  @Output() emitter = new EventEmitter<any>();

  name = '';
  description = '';
  User = 'Executor';
  Priority = 'Priority';
  Status = 'Status';
  Deadline = '';

  events(event: any, note:string) {
    if (note === 'setPriority') {
      this.Priority = event;
    } else if (note === 'setStatus') {
      this.Status = event;
    } else if (note === 'setExecutor') {
      this.User = event;
    } else if (note === 'setDeadline') {
      const date = event.value;
      const day = date.getDate();
      const month = date.getMonth() + 1; // Месяцы начинаются с 0
      const year = date.getFullYear();

      const formattedDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
      console.log('proverka', formattedDate, note);
      this.Deadline = formattedDate;
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
    }
  }

  closePop() {
    this.emitter.emit('close');
  }
}
