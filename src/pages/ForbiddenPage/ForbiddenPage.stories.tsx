import type { Meta, StoryObj } from '@storybook/react'
import { ForbiddenPage } from '@src/pages'

const meta: Meta<typeof ForbiddenPage> = {
  title: 'Pages/ForbiddenPage',
  component: ForbiddenPage,
}

export default meta

type Story = StoryObj<typeof ForbiddenPage>

export const Basic: Story = {}

export const CustomMessage: Story = {
  args: {
    message:
      "You don't have sufficient right to display this page. Consult with a space administrator if you need to load this page.",
  },
}
