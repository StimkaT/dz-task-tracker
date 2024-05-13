import {Component, EventEmitter, Output} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'nav-panel',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss'
})
export class NavPanelComponent {
  @Output() emitter = new EventEmitter();

  buttonClick(event: string) {
    this.emitter.emit(event);
  }
}
