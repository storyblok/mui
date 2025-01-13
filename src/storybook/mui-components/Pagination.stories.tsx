import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '@mui/material'

const meta: Meta<typeof Pagination> = {
  title: 'Mui Components/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    count: {
      control: 'number',
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Basic: Story = {
  args: {
    size: 'medium',
    count: 10,
  },
}
