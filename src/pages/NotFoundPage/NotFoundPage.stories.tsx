import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from '@src/pages'

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const Basic: Story = {}
