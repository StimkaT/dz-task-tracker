import { Component } from '@angular/core';
import {SingleTaskComponent} from "../../../../../ui/src/lib/components/single-task/single-task.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'single-task-container',
  standalone: true,
  imports: [
    SingleTaskComponent,
  ],
  templateUrl: './single-task-container.component.html',
  styleUrl: './single-task-container.component.scss'
})
export class SingleTaskContainerComponent {
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id')!;
      if (id === 0) {
        console.log('это ноль') // СЮДА ДОПИСАТЬ ЛОГИКУ ПО ВЫЗОВУ ЗАДАЧИ ПОД id
      }
    });
  }
}
