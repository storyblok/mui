import type { Args, Meta, StoryObj } from '@storybook/react'
import { AppHeader } from './AppHeader'
import { SearchIcon, SettingsIcon } from '@src/icons'
import { Button } from '@mui/material'
import { loremIpsum } from '@src/storybook/demo-utils/loremIpsum'
import { DemoIcon } from '@src/storybook/demo-utils/DemoIcon'
import { AppContainer } from '@src/layout'
import { ContentDemoArea } from '@src/storybook/demo-utils/ContentDemoArea'

const meta: Meta<typeof AppHeader> = {
  title: 'Layout/AppHeader',
  component: AppHeader,
}

export default meta

type Story = StoryObj<typeof AppHeader>

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

export const Basic: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: <DemoIcon />,
  },
  render: (args: Args) => (
    <AppContainer>
      <AppHeader {...args} />
      <ContentDemoArea />
    </AppContainer>
  ),
}

export const NoIcon: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    children: actions,
  },
  render: Basic.render,
}

export const LongSubtitle: Story = {
  args: {
    title: 'Title',
    icon: <DemoIcon />,
    subtitle: loremIpsum,
    children: actions,
  },
  render: Basic.render,
}

export const ManyActions: Story = {
  args: {
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
  },
  render: Basic.render,
}
