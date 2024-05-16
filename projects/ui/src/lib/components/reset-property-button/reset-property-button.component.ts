import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {IProperty} from "../../../../../web/src/lib/+state/tasks/tasks.reducer";

@Component({
  selector: 'reset-property-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './reset-property-button.component.html',
  styleUrl: './reset-property-button.component.scss'
})
export class ResetPropertyButtonComponent {
  @Input() propertiesList: IProperty[] | null = [];
  @Input() property: string = '';

  @Output() emitter = new EventEmitter();

  resetProperty(name: string) {
    this.emitter.emit(name);
  }
}
