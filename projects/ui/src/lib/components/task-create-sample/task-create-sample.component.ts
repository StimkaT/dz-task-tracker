import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenu, MatMenuItem, MatMenuModule} from "@angular/material/menu";
import {MatDatepicker, MatDatepickerInput} from "@angular/material/datepicker";

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

  titleTask = '';
  descriptionTask = '';

  createTask(titleToDo: string, descriptionTask: string) {
    if (this.titleTask) {
      const message = {
        event: 'ToDoComponent:buttonClick',
        titleToDo,
        descriptionTask
      };
      this.emitter.emit(message);

      this.titleTask = '';
      this.descriptionTask = '';
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
