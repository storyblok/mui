import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppHeader } from './AppHeader'
import { SearchIcon, SettingsIcon } from '../../icons'
import Button from '@mui/material/Button'
import { loremIpsum } from '../../storybook/demo-utils/loremIpsum'
import { DemoIcon } from '../../storybook/demo-utils/DemoIcon'
import { AppContainer } from '../AppContainer'
import { ContentDemoArea } from '../../storybook/demo-utils/ContentDemoArea'

const Component = AppHeader

export default {
  title: `Layout/AppHeader`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <AppContainer>
    <Component {...args} />
    <ContentDemoArea />
  </AppContainer>
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
  icon: <DemoIcon />,
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
  icon: <DemoIcon />,
  subtitle: loremIpsum,
  children: actions,
}

export const ManyActions = Template.bind({})
ManyActions.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  icon: <DemoIcon />,
  children: (
    <>
      <Button
        startIcon={<SettingsIcon />}
        variant="outlined"
        color="secondary"
      >
        Settings
      </Button>
      <Button>Button with many words</Button>
      <Button startIcon={<SearchIcon />}>Search</Button>
    </>
  ),
}
