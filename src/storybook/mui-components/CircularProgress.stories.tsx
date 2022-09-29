import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CircularProgress } from '@mui/material'
import { LoadingIcon } from '../../icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/CircularProgress`,
  component: CircularProgress,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof CircularProgress>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args}>
    <LoadingIcon />
  </CircularProgress>
)

export const Basic = Template.bind({})
Basic.args = {}
