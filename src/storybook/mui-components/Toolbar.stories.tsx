import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Toolbar, Typography } from '@mui/material'
import { ContentStoryFillIcon, LinkIcon, LoadingIcon } from '../../icons'
import { AnalyticalBox } from '../../components'

const Component = Toolbar

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Toolbar`,
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
    disableGutters: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <LoadingIcon />
    <Typography>Loading...</Typography>
    <AnalyticalBox
      icon={<ContentStoryFillIcon color="inherit" />}
      color="inherit"
      size="medium"
    >
      <Typography variant="subtitle1">Stories</Typography>
      <Typography variant="subtitle2">435</Typography>
    </AnalyticalBox>
    <AnalyticalBox
      icon={<LinkIcon />}
      color="inherit"
      size="medium"
    >
      <Typography variant="subtitle1">Links</Typography>
      <Typography variant="subtitle2">15</Typography>
    </AnalyticalBox>
  </Component>
)

export const Basic = Template.bind({})
Basic.args = {}

export const Filled = Template.bind({})
Filled.args = {
  sx: {
    backgroundColor: 'secondary.main',
    color: 'secondary.contrastText',
    borderRadius: 1,
  },
}
