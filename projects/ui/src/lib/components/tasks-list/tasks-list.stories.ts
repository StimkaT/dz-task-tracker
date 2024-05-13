import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {TasksListComponent} from "./tasks-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const meta: Meta<TasksListComponent> = {
  title: 'UI Components/TasksListComponent',
  component: TasksListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 100%">${story}</div>`
    ),
  ],
  render: (args: any) => ({
    props: {
      ...args,
      events: action('emitter'),
    },
    template: `
        <tasks-list ${argsToTemplate(args)} (emitter)="events($event)" [executorList]="executorList"></tasks-list>
    `,
  }),
};

export default meta;
type Story = StoryObj<TasksListComponent>;

export const Primary: Story = {
  args: {
    tasksList: [{
      id: 1,
      name: 'Task1',
      description: 'Work Task1',
      properties: {
        executor: 'User1',
        deadline: 1,
        priority: 'High',
        status: 'In progress',
      },
    }],

    executorList: [
      {name: 'User1', active: false},
      {name: 'User2', active: false},
      {name: 'User3', active: false},
    ],

    priorityList: [
      {name: 'High', active: false},
      {name: 'Medium', active: false},
      {name: 'Low', active: false},
    ],

    statusList: [
      {name: 'Done', active: false},
      {name: 'In progress', active: false},
      {name: 'Wait', active: false},
    ]
  }
}
