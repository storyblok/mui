import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconButton } from '@mui/material'
import { ArrowForwardIcon } from '../../icons'

const Component = IconButton

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/IconButton`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
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

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  children: <ArrowForwardIcon />,
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: <ArrowForwardIcon />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: <ArrowForwardIcon />,
}
