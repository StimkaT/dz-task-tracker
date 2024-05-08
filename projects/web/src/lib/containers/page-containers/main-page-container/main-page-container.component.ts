import { Component } from '@angular/core';
import {NavPanelContainerComponent} from "../../nav-panel-container/nav-panel-container.component";
import {PageSampleComponent} from "../../../../../../ui/src/lib/layouts/page-sample/page-sample.component";


@Component({
  selector: 'page-sample-container',
  standalone: true,
  imports: [
    NavPanelContainerComponent,
    PageSampleComponent

  ],
  templateUrl: './main-page-container.component.html',
  styleUrl: './main-page-container.component.scss'
})
export class MainPageContainerComponent {

}
