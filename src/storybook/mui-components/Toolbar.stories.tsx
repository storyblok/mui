import type { Meta, StoryObj } from '@storybook/react'
import { Toolbar, Typography } from '@mui/material'
import { ContentStoryFillIcon, LinkIcon, LoadingIcon } from '@src/icons'
import { AnalyticalBox } from '@src/components'

const meta: Meta = {
  title: 'Mui Components/Toolbar',
  component: Toolbar,
  argTypes: {
    variant: {
      control: 'select',
      options: ['dense', 'regular'],
      table: {
        defaultValue: {
          summary: 'regular'
        },
      },
    },
    disableGutters: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Toolbar>

const children = (
  <>
    <LoadingIcon />
    <Typography>Loading...</Typography>
    <AnalyticalBox
      icon={<ContentStoryFillIcon color="inherit" />}
      color="inherit"
      size="medium"
    >
      <Typography variant="subtitle1">Stories</Typography>
      <Typography variant="subtitle2">435</Typography>
    </AnalyticalBox>
    <AnalyticalBox
      icon={<LinkIcon />}
      color="inherit"
      size="medium"
    >
      <Typography variant="subtitle1">Links</Typography>
      <Typography variant="subtitle2">15</Typography>
    </AnalyticalBox>
  </>
)

export const Basic: Story = {
  args: {
    children,
  },
}

export const Filled: Story = {
  args: {
    children,
    sx: {
      backgroundColor: 'secondary.main',
      color: 'secondary.contrastText',
      borderRadius: 1,
    },
  },
}
