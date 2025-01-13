import type { Meta, StoryObj } from '@storybook/react'
import { InternalServerErrorPictogram } from '@src/icons'
import { ErrorPage } from '@src/pages'

const meta: Meta<typeof ErrorPage> = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
}

export default meta

type Story = StoryObj<typeof ErrorPage>

export const Basic: Story = {
  args: {
    pictogram: <InternalServerErrorPictogram fontSize="pictogram" />,
    title: 'Error',
    message: 'This is a user-friendly message.',
    details:
      'The details contain all the technical jargon, such as {"code": 123, "message": "NullPointerException at 123:12"}',
  },
}
