import type { Args, Meta, StoryObj } from '@storybook/react'
import { useState } from '@storybook/preview-api'
import { Button } from '@mui/material'
import { AppLayout } from './AppLayout'
import { SearchIcon } from '@src/icons'
import { AppDrawer } from '@src/layout'
import { ContentDemoArea } from '@src/storybook/demo-utils/ContentDemoArea'
import { DemoIcon } from '@src/storybook/demo-utils/DemoIcon'

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
}

export default meta

type Story = StoryObj<typeof AppLayout>

export const Basic: Story = {
  render: (args: Args) => (
    <AppLayout
      icon={<DemoIcon />}
      title="App Name"
      subtitle="Created by Johannes Lindgren"
      contentProps={{ className: 'AppLayout-custom' }}
      header={<Button startIcon={<SearchIcon />}>Settings</Button>}
      {...args}
    >
      <ContentDemoArea />
    </AppLayout>
  ),
}

export const Drawer: Story = {
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
      <AppLayout
        icon={<DemoIcon />}
        title="App Name"
        subtitle="Created by Johannes Lindgren"
        contentProps={{ className: 'AppLayout-custom' }}
        header={
          <Button onClick={() => setDrawerOpen(true)}>
            Open Drawer
          </Button>
        }
      >
        <AppDrawer
          open={drawerOpen ?? false}
          onClose={() => setDrawerOpen?.(false)}
          onOpen={() => setDrawerOpen?.(true)}
        />
        <ContentDemoArea />
      </AppLayout>
    )
  },
}

export const BigIcon: Story = {
  render: () => {
    return (
      <AppLayout
        icon={<DemoIcon />}
        title="App Name"
        subtitle="Created by Johannes Lindgren"
        contentProps={{ className: 'AppLayout-custom' }}
        header={<Button startIcon={<SearchIcon />}>Settings</Button>}
      >
        <ContentDemoArea />
      </AppLayout>
    )
  },
}
