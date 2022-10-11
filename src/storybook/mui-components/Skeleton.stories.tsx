import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Skeleton } from '@mui/material'

const Component = Skeleton

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Skeleton`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ],
    },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
)

export const Rectangular = Template.bind({})
Rectangular.args = {
  variant: 'rectangular',
  height: 100,
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  height: 100,
}

export const Circular = Template.bind({})
Circular.args = {
  variant: 'circular',
  height: 48,
  width: 48,
}
