import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppHeader } from './AppHeader'
import { SearchIcon, StoryblokIcon } from '../../icons'
import Button from '@mui/material/Button'

const Component = AppHeader

export default {
  title: `Layout/AppHeader`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    title="Title"
    {...args}
  />
)

export const Basic = Template.bind({})
export const Subtitle = Template.bind({})
Subtitle.args = {
  subtitle: 'Subtitle',
}

export const Icon = Template.bind({})
Icon.args = {
  subtitle: 'Subtitle',
  icon: <StoryblokIcon />,
}

export const Actions = Template.bind({})
Actions.args = {
  subtitle: 'Subtitle',
  children: <Button startIcon={<SearchIcon />}>Settings</Button>,
}
