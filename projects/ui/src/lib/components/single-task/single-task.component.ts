import { Component } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";

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
  ],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {

}
