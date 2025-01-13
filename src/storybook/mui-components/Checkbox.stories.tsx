import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@mui/material'

const meta: Meta<typeof Checkbox> = {
  title: 'Mui Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}
