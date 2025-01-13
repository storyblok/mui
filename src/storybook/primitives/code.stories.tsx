import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@mui/material'

const meta: Meta<typeof Alert> = {
  title: 'HTML Elements/code',
  component: Alert,
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Alert>

const exampleInlineCode = 'console.log("Hello, Storyblok")'

export const InlineCode: Story = {
  render: () => (
    <code>{exampleInlineCode}</code>
  ),
}

export const OnBackground: Story = {
  args: {
    children: <code>{exampleInlineCode}</code>,
    severity: 'info',
  },
}
