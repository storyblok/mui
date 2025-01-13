import type { Args, Meta, StoryObj } from '@storybook/react'
import {
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useState } from '@storybook/preview-api'
import { AvatarFallbackIcon, FolderFillIcon, StatusIcon } from '@src/icons'

const meta: Meta<typeof List> = {
  title: 'Mui Components/List',
  component: List,
}

export default meta

type Story = StoryObj<typeof List>

const listItems = [
  {
    id: 0,
    isFolder: false,
    name: 'Home',
    slug: '/',
    contentType: 'Page',
    lastUpdate: new Date().toLocaleString(),
    avatar: <AvatarFallbackIcon color="info" />,
  },
  {
    id: 1,
    isFolder: true,
    name: 'Ice Creams',
    slug: 'ice-creams',
    contentType: 'Product',
    lastUpdate: new Date().toLocaleString(),
    avatar: <AvatarFallbackIcon color="success" />,
  },
  {
    id: 2,
    isFolder: true,
    name: 'Cakes',
    slug: 'cakes',
    contentType: 'Product',
    lastUpdate: new Date().toLocaleString(),
    avatar: <AvatarFallbackIcon color="error" />,
  },
  {
    id: 3,
    isFolder: false,
    name: 'About us',
    slug: 'about',
    contentType: 'Page',
    lastUpdate: new Date().toLocaleString(),
    avatar: <AvatarFallbackIcon color="primary" />,
  },
]

export const Basic: Story = {
  args: {
    children: (
      <>
        {listItems.map((item) => {
          return (
            <ListItem disablePadding key={item.id}>
              <ListItemButton>
                <ListItemIcon>
                  {item.isFolder ? (
                    <FolderFillIcon sx={{ color: 'text.secondary' }} />
                  ) : (
                    <StatusIcon sx={{ color: 'text.secondary' }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  secondary={item.slug}
                />
                <ListItemText
                  primaryTypographyProps={{
                    color: 'text.secondary',
                    textAlign: 'right',
                    mr: 10,
                  }}
                  primary={item.lastUpdate}
                />
                <ListItemAvatar>{item.avatar}</ListItemAvatar>
              </ListItemButton>
            </ListItem>
          )
        })}
      </>
    ),
  }
}

export const Selectable: Story = {
  render: (args: Args) => {
    const [checkedIds, setCheckedIds] = useState([0])

    const handleToggle = (id: number) => () => {
      const currentIndex = checkedIds.indexOf(id)
      const newChecked = [...checkedIds]

      if (currentIndex === -1) {
        newChecked.push(id)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      setCheckedIds(newChecked)
    }

    return (
      <List {...args}>
        {listItems.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`
          return (
            <ListItem
              key={item.id}
              disablePadding
            >
              <ListItemButton
                selected={checkedIds.indexOf(item.id) !== -1}
                onClick={handleToggle(item.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checkedIds.indexOf(item.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemIcon>
                  {item.isFolder ? (
                    <FolderFillIcon sx={{ color: 'text.secondary' }} />
                  ) : (
                    <StatusIcon sx={{ color: 'text.secondary' }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={item.name}
                  secondary={item.slug}
                />
                <ListItemText
                  primaryTypographyProps={{
                    color: 'text.secondary',
                    textAlign: 'right',
                    mr: 10,
                  }}
                  primary={item.lastUpdate}
                />
                <ListItemAvatar>{item.avatar}</ListItemAvatar>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    )
  },
}
