import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIcon,
  ],
  selector: 'edit-task',
  standalone: true,
  styleUrl: './edit-task.component.scss',
  templateUrl: './edit-task.component.html'
})
export class EditTaskComponent {
  @Input() task: string = '';

  @Output() emitter = new EventEmitter();

  onButtonClick(value: string) {
    this.emitter.emit(value);
  }

  onCancelButtonClick(inputField: any) {
    inputField.value = this.task;
  }
}
