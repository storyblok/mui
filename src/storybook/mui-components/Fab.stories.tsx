import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Fab } from '@mui/material'
import { CloseIcon } from '../../icons'

const Component = Fab

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Fab`,
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
  <Component {...args}></Component>
)

export const Basic = Template.bind({})
Basic.args = {
  children: <CloseIcon />,
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: <CloseIcon fontSize="small" />,
}
