import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import {IProperty, ITasksList} from "../../../../../web/src/lib/+state/tasks/tasks.reducer";
import {ResetPropertyButtonComponent} from "../reset-property-button/reset-property-button.component";

@Component({
  selector: 'single-task-page',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    DatePipe,
    ResetPropertyButtonComponent,
  ],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {
  @Input() activeTask: ITasksList[] | null = [];
  @Input() executorList: IProperty[] | null = [];
  @Input() priorityList: IProperty[] | null = [];
  @Input() statusList: IProperty[] | null = [];

  @Output() emitter = new EventEmitter<any>();

  today = new Date();

  buttonClick(name: string, id: number, note: string) {
    const message = {
      name,
      id,
      note,
    }
    this.emitter.emit(message);

    console.log('устанавливаем значения',  message)
  }
}
