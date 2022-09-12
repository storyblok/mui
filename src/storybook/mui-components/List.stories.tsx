import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ReactNode, useState } from 'react'
import { AvatarFallbackIcon, FolderFillIcon, StatusIcon } from '../../icons'
// import {ThemeProvider} from "@mui/material/styles";
// import {lightTheme} from "@src/browser";

const Component = List

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/List`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'overline',
        'caption',
      ],
    },
  },
} as ComponentMeta<typeof Component>

type Story = {
  id: number
  isFolder: boolean
  name: string
  slug: string
  contentType?: string
  lastUpdate: string
  avatar: ReactNode
}

const table = [
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
] as Story[]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
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
      {table.map((story) => {
        const labelId = `checkbox-list-label-${story}`
        return (
          <ListItem
            key={story.id}
            selected={checkedIds.indexOf(story.id) !== -1}
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(story.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checkedIds.indexOf(story.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemIcon>
                {story.isFolder ? (
                  <FolderFillIcon sx={{ color: 'text.secondary' }} />
                ) : (
                  <StatusIcon sx={{ color: 'text.secondary' }} />
                )}
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={story.name}
                secondary={story.slug}
              />
              <ListItemText
                primaryTypographyProps={{
                  color: 'text.secondary',
                  textAlign: 'right',
                  mr: 10,
                }}
                primary={story.lastUpdate}
              />
              <ListItemAvatar>{story.avatar}</ListItemAvatar>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
export const Basic = Template.bind({})
export const Selectable = Template.bind({})
