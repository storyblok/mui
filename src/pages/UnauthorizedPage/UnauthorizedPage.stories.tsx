import type { Meta, StoryObj } from '@storybook/react'
import { UnauthorizedPage } from '@src/pages'

const meta: Meta<typeof UnauthorizedPage> = {
  title: 'Pages/UnauthorizedPage',
  component: UnauthorizedPage,
}

export default meta

type Story = StoryObj<typeof UnauthorizedPage>

export const Basic: Story = {}

export const CustomMessage: Story = {
  args: {
    message: 'You are not authenticated. Try to refresh the page',
  },
}
