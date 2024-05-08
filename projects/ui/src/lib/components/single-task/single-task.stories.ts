import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {SingleTaskComponent} from "./single-task.component";

const meta: Meta<SingleTaskComponent> = {
  title: 'UI Components/SingleTaskComponent',
  component: SingleTaskComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: SingleTaskComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SingleTaskComponent>;

export const Primary: Story = {
  args: {
  }
}
