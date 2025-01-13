import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@mui/material'
import { loremIpsum } from '../demo-utils/loremIpsum'

const meta: Meta<typeof Typography> = {
  title: 'Mui Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
      table: {
        defaultValue: {
          summary: 'body1',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const Heading: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const Body: Story = {
  args: {
    variant: 'body1',
    children: loremIpsum,
  },
}
