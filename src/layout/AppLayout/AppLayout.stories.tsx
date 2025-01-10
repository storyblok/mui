import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@mui/material'
import { AppLayout } from './AppLayout'
import { SearchIcon } from '../../icons'
import { AppDrawer } from '../AppDrawer'
import { ContentDemoArea } from '../../storybook/demo-utils/ContentDemoArea'
import { DemoIcon } from '../../storybook/demo-utils/DemoIcon'

const Component = AppLayout

export default {
  title: 'Layout/AppLayout',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    icon={<DemoIcon />}
    title="App Name"
    subtitle="Created by Johannes Lindgren"
    contentProps={{ className: 'AppLayout-custom' }}
    header={<Button startIcon={<SearchIcon />}>Settings</Button>}
    {...args}
  >
    <ContentDemoArea />
  </Component>
)

export const Basic = Template.bind({})

export const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <AppLayout
      icon={<DemoIcon />}
      title="App Name"
      subtitle="Created by Johannes Lindgren"
      contentProps={{ className: 'AppLayout-custom' }}
      header={<Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>}
    >
      <AppDrawer
        open={drawerOpen ?? false}
        onClose={() => setDrawerOpen?.(false)}
        onOpen={() => setDrawerOpen?.(true)}
      ></AppDrawer>
      <ContentDemoArea />
    </AppLayout>
  )
}

export const BigIcon = () => {
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
}

// export const Drawer = Template.bind({});
