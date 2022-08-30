import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Checkbox} from "@mui/material";

const Component = Checkbox

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Checkbox`,
  component: Component,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
)

export const Basic = Template.bind({})
export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
export const Indeterminate = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
}

