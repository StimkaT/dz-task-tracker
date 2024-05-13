import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuItem} from "@angular/material/menu";
import {IProperty} from "../../../../../web/src/lib/+state/tasks/tasks.reducer";

@Component({
  selector: 'task-create-property',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatMenuItem,
  ],
  templateUrl: './task-create-property.component.html',
  styleUrl: './task-create-property.component.scss'
})
export class TaskCreatePropertyComponent {
 @Input() label: string = '';
 @Input() propertyList: IProperty[] | null = [];

 @Output() emitter = new EventEmitter<any>();

  buttonClick(event: any): void {
    this.emitter.emit(event)
  }

}
