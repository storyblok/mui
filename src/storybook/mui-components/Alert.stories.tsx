import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle } from '@mui/material'

const meta: Meta<typeof Alert> = {
  title: 'Mui Components/Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Alert>

const alertBody = (
  <>
    <AlertTitle>Title</AlertTitle>
    This is an awesome component from Storyblok.
  </>
)

export const Success: Story = {
  args: {
    children: alertBody,
    severity: 'success',
    title: 'Title',
  },
}

export const Info: Story = {
  args: {
    children: alertBody,
    severity: 'info',
  },
}

export const Warning: Story = {
  args: {
    children: alertBody,
    severity: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: alertBody,
    severity: 'error',
  },
}

export const Outlined: Story = {
  args: {
    children: alertBody,
    severity: 'info',
    variant: 'outlined',
  },
}
