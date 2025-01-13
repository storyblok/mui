import type { Meta, StoryObj } from '@storybook/react'
import { InternalServerErrorPage } from '@src/pages'

const meta: Meta<typeof InternalServerErrorPage> = {
  title: 'Pages/InternalServerErrorPage',
  component: InternalServerErrorPage,
}

export default meta

type Story = StoryObj<typeof InternalServerErrorPage>

export const Basic: Story = {}

const message = 'An unexpected error occurred on the server.'

export const CustomMessage: Story = {
  args: {
    message,
  },
}

export const Detailed: Story = {
  args: {
    message,
    details: 'The service XYZ did not respond.',
  },
}
