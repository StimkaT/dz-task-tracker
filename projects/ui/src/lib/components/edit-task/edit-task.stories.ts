import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EditTaskComponent} from "./edit-task.component";

const meta: Meta<EditTaskComponent> = {
  title: 'UI Components/EditTaskComponent',
  component: EditTaskComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: any) => ({
    props: {
      ...args,
      events: action('emitter'),
    },
    template: `
        <edit-task ${argsToTemplate(args)} (emitter)="events($event)"></edit-task>
    `,
  }),
};

export default meta;
type Story = StoryObj<EditTaskComponent>;

export const Primary: Story = {
  args: {
    task: 'Test name',
  }
}
