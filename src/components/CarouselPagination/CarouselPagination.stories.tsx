import type { Meta, StoryObj } from '@storybook/react'
import { CarouselPagination } from './CarouselPagination'

const meta: Meta<typeof CarouselPagination> = {
  title: 'Components/CarouselPagination',
  component: CarouselPagination,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

export default meta

type Story = StoryObj<typeof CarouselPagination>

export const Default: Story = {
  args: {
    count: 10,
  },
}

export const Small: Story = {
  args: {
    count: 10,
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    count: 10,
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    count: 10,
    size: 'large',
  },
}

export const Primary: Story = {
  args: {
    count: 10,
    color: 'primary',
  },
}

export const Standard: Story = {
  args: {
    count: 10,
    color: 'standard',
  },
}

export const Secondary: Story = {
  args: {
    count: 10,
    color: 'secondary',
  },
}

export const LastAndFirstButtons: Story = {
  args: {
    count: 10,
    showFirstButton: true,
    showLastButton: true,
  },
}
