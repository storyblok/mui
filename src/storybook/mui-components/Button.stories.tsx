import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '@mui/material'
import { StoryblokIcon } from '../../icons'

const Component = Button

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Button`,
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
        'inherit',
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
  <Component {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Button',
}
export const Small = Template.bind({})
Small.args = {
  children: 'Button',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Button',
  size: 'large',
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  children: 'Button',
  startIcon: <StoryblokIcon />,
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  children: 'Button',
  endIcon: <StoryblokIcon />,
}

export const ContainedPrimary = Template.bind({})
ContainedPrimary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}

export const ContainedSecondary = Template.bind({})
ContainedSecondary.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}

export const ContainedInherit = Template.bind({})
ContainedInherit.args = {
  variant: 'contained',
  color: 'inherit',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}

export const OutlinedPrimary = Template.bind({})
OutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}
export const OutlinedSecondary = Template.bind({})
OutlinedSecondary.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}
export const OutlinedInherit = Template.bind({})
OutlinedInherit.args = {
  variant: 'outlined',
  color: 'inherit',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}

export const TextPrimary = Template.bind({})
TextPrimary.args = {
  variant: 'text',
  color: 'primary',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}
export const TextSecondary = Template.bind({})
TextSecondary.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}
export const TextInherit = Template.bind({})
TextInherit.args = {
  variant: 'text',
  color: 'inherit',
  children: 'Button',
  endIcon: <StoryblokIcon />,
}
