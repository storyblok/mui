import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '@mui/material'

const meta: Meta<typeof Link> = {
  title: 'Mui Components/Link',
  component: Link,
}

export default meta

type Story = StoryObj<typeof Link>

export const MuiLink: Story = {
  args: {
    children: 'Link',
    href: '/',
  },
}
