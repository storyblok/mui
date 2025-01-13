import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@mui/material'

const meta: Meta<typeof Switch> = {
  title: 'Mui Components/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Switch>

export const Basic: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled : Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
}

export const Info: Story = {
  args: {
    color: 'info',
  },
}
