import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Chip } from '@mui/material'
import { CheckMarkIcon } from '../../icons'

const Component = Chip

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Chip`,
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

export const Basic = Template.bind({})
Basic.args = {
  label: 'Label',
}

export const Colored = Template.bind({})
Colored.args = {
  label: 'Label',
  color: 'success',
}

export const Deleteable = Template.bind({})
Deleteable.args = {
  label: 'Delete me',
  color: 'error',
  onDelete: () => console.log('Deleted'),
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Completed',
  color: 'success',
  icon: <CheckMarkIcon />,
}
