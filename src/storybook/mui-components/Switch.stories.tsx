import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from '@mui/material'

const Component = Switch

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mui Components/Switch',
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    {...args}
    inputProps={{
      'aria-label': 'Switch Demo',
    }}
  />
)

export const Basic = Template.bind({})
Basic.args = {}

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  disabled: true,
  checked: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Info = Template.bind({})
Info.args = {
  color: 'info',
}
