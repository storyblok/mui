import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'

const Component = ButtonGroup

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/ButtonGroup`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'contained', 'outlined', 'text'],
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
  <Component {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Component>
)

export const Default = Template.bind({})

export const ContainedPrimary = Template.bind({})
ContainedPrimary.args = {
  color: 'primary',
  variant: 'contained',
}

export const ContainedSecondary = Template.bind({})
ContainedSecondary.args = {
  color: 'secondary',
  variant: 'contained',
}

export const ContainedInherit = Template.bind({})
ContainedInherit.args = {
  color: 'inherit',
  variant: 'contained',
}

export const TextPrimary = Template.bind({})
TextPrimary.args = {
  variant: 'text',
  color: 'primary',
}

export const TextSecondary = Template.bind({})
TextSecondary.args = {
  variant: 'text',
  color: 'secondary',
}

export const TextInherit = Template.bind({})
TextInherit.args = {
  variant: 'text',
  color: 'inherit',
}

export const OutlinedPrimary = Template.bind({})
OutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
}

export const OutlinedSecondary = Template.bind({})
OutlinedSecondary.args = {
  variant: 'outlined',
  color: 'secondary',
}

export const OutlinedInherit = Template.bind({})
OutlinedInherit.args = {
  variant: 'outlined',
  color: 'inherit',
}

export const VerticalContained = Template.bind({})
VerticalContained.args = {
  orientation: 'vertical',
  variant: 'contained',
}

export const VerticalText = Template.bind({})
VerticalText.args = {
  orientation: 'vertical',
  variant: 'text',
}

export const VerticalOutlined = Template.bind({})
VerticalOutlined.args = {
  orientation: 'vertical',
  variant: 'outlined',
}
