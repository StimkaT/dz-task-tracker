import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FilterPropertyButtonComponent} from "./filter-property-button.component";

const meta: Meta<FilterPropertyButtonComponent> = {
  title: 'UI Components/FilterPropertyButtonComponent',
  component: FilterPropertyButtonComponent,
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
        <reset-property-button ${argsToTemplate(args)} (emitter)="events($event)"></reset-property-button>
    `,
  }),
};

export default meta;
type Story = StoryObj<FilterPropertyButtonComponent>;

export const Primary: Story = {
  args: {
    property: 'User1',

    propertiesList: [
      {name: 'User1', active: false},
      {name: 'User2', active: false},
      {name: 'User3', active: false},
    ],

  }
}
