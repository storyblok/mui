import type { Meta, StoryObj } from '@storybook/react'
import { Fab } from '@mui/material'
import { CloseIcon } from '@src/icons'

const meta: Meta<typeof Fab> = {
  title: 'Mui Components/Fab',
  component: Fab,
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'extended', 'string'],
      table: {
        defaultValue: {
          summary: 'circular'
        },
      },
    },
    color: {
      control: 'select',
      options: [
        'default',
        'error',
        'info',
        'inherit',
        'primary',
        'secondary',
        'success',
        'warning',
      ],
      table: {
        defaultValue: {
          summary: 'primary'
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Fab>

export const Basic: Story = {
  args: {
    color: 'primary',
    children: <CloseIcon />,
    variant: 'circular',
  },
}

export const Small: Story = {
  args: {
    color: 'primary',
    children: <CloseIcon fontSize="small" />,
    size: 'small',
    variant: 'circular',
  },
}
