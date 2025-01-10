import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DropMenu } from './DropMenu'
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { CopyIcon, DeleteIcon, EditIcon, RescueIcon } from '../../icons'

const Component = DropMenu

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DropMenu',
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: {
    //     control: 'select',
    //     options: [undefined, "contained", "outlined", "text"],
    // },
    // color: {
    //     control: 'select',
    //     options: [undefined, "inherit", "primary", "secondary", "success", "info", "warning", "error"],
    // },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
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
)

export const Basic = Template.bind({})
Basic.args = {}

export const Controlled = Template.bind({})
Controlled.args = {
  open: true,
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
}
