import type { Meta, StoryObj } from '@storybook/react'
import { CircularProgress } from '@mui/material'

const meta: Meta<typeof CircularProgress> = {
  title: 'Mui Components/CircularProgress',
  component: CircularProgress,
}

export default meta

type Story = StoryObj<typeof CircularProgress>

export const Basic: Story = {}
