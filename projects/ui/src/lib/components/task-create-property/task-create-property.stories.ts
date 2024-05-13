import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TaskCreatePropertyComponent} from "./task-create-property.component";

const meta: Meta<TaskCreatePropertyComponent> = {
  title: 'UI Components/TaskCreatePropertyComponent',
  component: TaskCreatePropertyComponent,
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
        <task-create-property ${argsToTemplate(args)} (emitter)="events($event)"></task-create-property>
    `,
  }),
};

export default meta;
type Story = StoryObj<TaskCreatePropertyComponent>;

export const Primary: Story = {
  args: {
    propertyList: [
      {name: 'User1', active: false},
      {name: 'User2', active: false},
      {name: 'User3', active: false},
    ],
  }
}
