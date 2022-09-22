import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import { AppLayout } from './AppLayout'
import { Box, useTheme } from '@mui/material'
import { SearchIcon, StoryblokIcon } from '../../icons'
import { AppDrawer } from '../AppDrawer/AppDrawer'

const Component = AppLayout

export default {
  title: `Layout/AppLayout`,
  component: Component,
} as ComponentMeta<typeof Component>

const ContentArea = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        opacity: 0.8,
        height: '500px',
        background: `repeating-linear-gradient( -45deg, ${theme.palette.divider}, ${theme.palette.divider} 2px, transparent 2px, transparent 25px )`,
      }}
    />
  )
}

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    icon={<StoryblokIcon />}
    title="App Name"
    subtitle="Created by Johannes Lindgren"
    containerProps={{ className: 'AppLayout-custom' }}
    header={<Button startIcon={<SearchIcon />}>Settings</Button>}
    {...args}
  >
    <ContentArea />
  </Component>
)

export const Basic = Template.bind({})

export const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <AppLayout
      icon={<StoryblokIcon />}
      title="App Name"
      subtitle="Created by Johannes Lindgren"
      containerProps={{ className: 'AppLayout-custom' }}
      header={<Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>}
    >
      <AppDrawer
        open={drawerOpen ?? false}
        onClose={() => setDrawerOpen?.(false)}
        onOpen={() => setDrawerOpen?.(true)}
      ></AppDrawer>
      <ContentArea />
    </AppLayout>
  )
}

export const BigIcon = () => {
  return (
    <AppLayout
      icon={<StoryblokIcon sx={{ width: '42px', height: '42px' }} />}
      title="App Name"
      subtitle="Created by Johannes Lindgren"
      containerProps={{ className: 'AppLayout-custom' }}
      header={<Button startIcon={<SearchIcon />}>Settings</Button>}
    >
      <ContentArea />
    </AppLayout>
  )
}

// export const Drawer = Template.bind({});
