import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {TaskCreateSampleComponent} from "./task-create-sample.component";
import { action } from '@storybook/addon-actions';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const meta: Meta<TaskCreateSampleComponent> = {
  title: 'UI Components/TaskCreateSampleComponent',
  component: TaskCreateSampleComponent,
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
        <task-create-sample ${argsToTemplate(args)} (emitter)="events($event)"></task-create-sample>
    `,
  }),
};

export default meta;
type Story = StoryObj<TaskCreateSampleComponent>;

export const Primary: Story = {
  args: {
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
