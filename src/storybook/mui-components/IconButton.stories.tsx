import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '@mui/material'
import { ArrowForwardIcon } from '@src/icons'

const meta: Meta<typeof IconButton> = {
  title: 'Mui Components/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'inherit',
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    color: 'default',
    children: <ArrowForwardIcon />,
  },
}

export const Primary: Story = {
  args: {
    color: 'primary',
    children: <ArrowForwardIcon />,
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: <ArrowForwardIcon />,
  },
}
