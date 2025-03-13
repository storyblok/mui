import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@mui/material'
import { StoryblokIcon } from '@src/icons'


const meta: Meta<typeof Button> = {
  title: 'Mui Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'contained', 'outlined', 'text'],
      table: {
        defaultValue: { summary: 'contained' },
      },
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'inherit',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
}

export const StartIcon: Story = {
  args: {
    children: 'Button',
    startIcon: <StoryblokIcon />,
  },
}

export const EndIcon: Story = {
  args: {
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const ContainedPrimary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const ContainedSecondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const ContainedInherit: Story = {
  args: {
    variant: 'contained',
    color: 'inherit',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const OutlinedPrimary: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const OutlinedSecondary: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const OutlinedInherit: Story = {
  args: {
    variant: 'outlined',
    color: 'inherit',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const TextPrimary: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const TextSecondary: Story = {
  args: {
    variant: 'text',
    color: 'secondary',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}

export const TextInherit: Story = {
  args: {
    variant: 'text',
    color: 'inherit',
    children: 'Button',
    endIcon: <StoryblokIcon />,
  },
}
