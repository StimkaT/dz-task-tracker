import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {SingleTaskComponent} from "./single-task.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const meta: Meta<SingleTaskComponent> = {
  title: 'UI Components/SingleTaskComponent',
  component: SingleTaskComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 400px">${story}</div>`
    ),
  ],
  render: (args: any) => ({
    props: {
      ...args,
      events: action('emitter'),
    },
    template: `
        <single-task-page ${argsToTemplate(args)} (emitter)="events($event)"></single-task-page>
    `,
  }),
};

export default meta;
type Story = StoryObj<SingleTaskComponent>;

export const Primary: Story = {
  args: {
    activeTask: [{
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
