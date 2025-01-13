import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from '@mui/material'
import { CheckMarkIcon } from "@src/icons"

const meta: Meta<typeof Chip> = {
  title: 'Mui Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof Chip>

export const Basic: Story = {
  args: {
    label: 'Label',
  },
}

export const Colored: Story = {
  args: {
    label: 'Label',
    color: 'success',
  },
}

export const Deleteable: Story = {
  args: {
    label: 'Delete me',
    color: 'error',
    onDelete: () => console.log('Deleted'),
  },
}

export const Icon: Story = {
  args: {
    label: 'Completed',
    color: 'success',
    icon: <CheckMarkIcon />,
  },
}
