import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppHeader } from './AppHeader'
import { SearchIcon, SettingsIcon, StoryblokIcon } from '../../icons'
import Button from '@mui/material/Button'
import { loremIpsum } from '../../storybook/utils/loremIpsum'

const Component = AppHeader

export default {
  title: `Layout/AppHeader`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

const icon = (
  <StoryblokIcon
    fontSize="inherit"
    sx={{
      padding: '20%',
      color: 'secondary.contrastText',
      background: ({ palette }) =>
        `linear-gradient(0deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
      borderRadius: 2,
    }}
  />
)

const actions = (
  <>
    <Button
      startIcon={<SettingsIcon />}
      variant="outlined"
      color="secondary"
    >
      Settings
    </Button>
    <Button startIcon={<SearchIcon />}>Search</Button>
  </>
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  icon: icon,
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  children: actions,
}

export const LongSubtitle = Template.bind({})
LongSubtitle.args = {
  title: 'Title',
  icon: icon,
  subtitle: loremIpsum,
  children: actions,
}

export const Actions = Template.bind({})
Actions.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  icon: icon,
  children: actions,
}
