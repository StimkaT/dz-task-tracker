import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {NavPanelComponent} from "./nav-panel.component";

const meta: Meta<NavPanelComponent> = {
  title: 'UI Components/NavPanelComponent',
  component: NavPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
        <nav-panel ${argsToTemplate(args)} (emitter)="events($event)"></nav-panel>
    `,
  }),
};

export default meta;
type Story = StoryObj<NavPanelComponent>;

export const Primary: Story = {
  args: {
  }
}
