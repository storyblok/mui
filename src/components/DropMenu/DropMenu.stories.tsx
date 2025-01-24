import type { Args, Meta, StoryObj } from '@storybook/react'
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { CopyIcon, DeleteIcon, EditIcon, RescueIcon } from '@src/icons'
import { DropMenu } from './DropMenu'

const meta: Meta<typeof DropMenu> = {
  title: 'Components/DropMenu',
  component: DropMenu,
}

export default meta

type Story = StoryObj<typeof DropMenu>

export const Basic: Story = {
  render: (args: Args) => (
    <DropMenu
      {...args}
      label="Options"
    >
      <ListItemButton>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CopyIcon />
        </ListItemIcon>
        <ListItemText>Copy</ListItemText>
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <RescueIcon />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </ListItemButton>
      <Divider />
      <ListItemButton sx={{ color: 'error.main' }}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </ListItemButton>
    </DropMenu>
  ),
}

export const Controlled: Story = {
  args: {
    open: false,
  },
  render: Basic.render,
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: Basic.render,
}
