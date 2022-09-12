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

export const Icon_Button = Template.bind({})
Icon_Button.args = {
  children: <ArrowForwardIcon />,
}
