import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@mui/material'

const meta: Meta<typeof Skeleton> = {
  title: 'Mui Components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'circular',
        'rectangular',
        'rounded',
        'text',
      ],
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  args: {
    variant: 'text',
    height: 100,
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    height: 100,
  },
}

export const Circular: Story = {
  args: {
    variant: 'circular',
    height: 48,
    width: 48,
  },
}
