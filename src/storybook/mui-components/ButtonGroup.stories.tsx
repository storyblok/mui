import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonGroup } from '@mui/material'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Mui Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'contained', 'outlined', 'text'],
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

type Story = StoryObj<typeof ButtonGroup>

const children = (
  <>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </>
)

export const Default = {
  args: {
    children,
  },
}

export const ContainedPrimary: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    children,
  },
}

export const ContainedSecondary: Story = {
  args: {
    color: 'secondary',
    variant: 'contained',
    children,
  },
}

export const ContainedInherit: Story = {
  args: {
    color: 'inherit',
    variant: 'contained',
    children,
  },
}

export const TextPrimary: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children,
  },
}

export const TextSecondary: Story = {
  args: {
    variant: 'text',
    color: 'secondary',
    children,
  },
}

export const TextInherit: Story = {
  args: {
    variant: 'text',
    color: 'inherit',
    children,
  },
}

export const OutlinedPrimary: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children,
  },
}

export const OutlinedSecondary: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    children,
  },
}

export const OutlinedInherit: Story = {
  args: {
    variant: 'outlined',
    color: 'inherit',
    children,
  },
}

export const VerticalContained: Story = {
  args: {
    orientation: 'vertical',
    variant: 'contained',
    children,
  },
}

export const VerticalText: Story = {
  args: {
    orientation: 'vertical',
    variant: 'text',
    children,
  },
}

export const VerticalOutlined: Story = {
  args: {
    orientation: 'vertical',
    variant: 'outlined',
    children,
  },
}
