import type { Args, Meta, StoryObj } from '@storybook/react'
import {
  CalendarIcon,
  ContentStoryFillIcon,
  SquareErrorIcon,
  SquareInfoIcon,
  SquareSuccessIcon,
  SquareWarningIcon,
  WarningIcon,
} from '@src/icons'
import { IconBox } from './IconBox'

const meta: Meta<typeof IconBox> = {
  title: 'Components/IconBox',
  component: IconBox,
  argTypes: {
    color: {
      control: 'select',
      options: [
        undefined,
        'default',
        'inherit',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ],
    },
    variant: {
      control: 'select',
      options: [undefined, 'default', 'bordered', 'light'],
    },
  },
}

export default meta

type Story = StoryObj<typeof IconBox>

export const Default: Story = {
  args: {
    children: <CalendarIcon fontSize="inherit" />,
  },
  render: (args: Args) => (
    <IconBox
      {...args}
      fontSize="inherit"
    />
  ),
}

export const Small: Story = {
  args: {
    children: <ContentStoryFillIcon fontSize="inherit" />,
    size: 'small',
  },
  render: Default.render,
}

export const Medium: Story = {
  args: {
    children: <ContentStoryFillIcon fontSize="inherit" />,
    size: 'medium',
  },
  render: Default.render,
}

export const Large: Story = {
  args: {
    children: <ContentStoryFillIcon fontSize="inherit" />,
    size: 'large',
  },
  render: Default.render,
}

export const SmallColor: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'small',
    color: 'warning',
  },
  render: Default.render,
}

export const MediumColor: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'medium',
    color: 'warning',
  },
  render: Default.render,
}

export const LargeColor: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'large',
    color: 'warning',
  },
  render: Default.render,
}

export const SmallBordered: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'small',
    color: 'warning',
    variant: 'bordered',
  },
  render: Default.render,
}

export const MediumBordered: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'medium',
    color: 'warning',
    variant: 'bordered',
  },
  render: Default.render,
}

export const LargeBordered: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'large',
    color: 'warning',
    variant: 'bordered',
  },
  render: Default.render,
}

export const SmallLight: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'small',
    color: 'warning',
    variant: 'light',
  },
  render: Default.render,
}

export const MediumLight: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'medium',
    color: 'warning',
    variant: 'light',
  },
  render: Default.render,
}

export const LargeLight: Story = {
  args: {
    children: <WarningIcon fontSize="inherit" />,
    size: 'large',
    color: 'warning',
    variant: 'light',
  },
  render: Default.render,
}

export const Success: Story = {
  args: {
    children: <SquareSuccessIcon fontSize="inherit" />,
    color: 'success',
  },
  render: Default.render,
}
export const Info: Story = {
  args: {
    children: <SquareInfoIcon fontSize="inherit" />,
    color: 'info',
  },
  render: Default.render,
}

export const Warning: Story = {
  args: {
    children: <SquareWarningIcon fontSize="inherit" />,
    color: 'warning',
  },
  render: Default.render,
}

export const Error: Story = {
  args: {
    children: <SquareErrorIcon fontSize="inherit" />,
    color: 'error',
  },
  render: Default.render,
}

export const Inherit: Story = {
  args: {
    children: <SquareErrorIcon fontSize="inherit" />,
    color: 'inherit',
  },
  render: Default.render,
}

export const InitialsSmall: Story = {
  args: {
    children: 'Rt',
    size: 'small',
    color: 'info',
  },
  render: Default.render,
}

export const InitialsMedium: Story = {
  args: {
    children: 'Rt',
    size: 'medium',
    color: 'info',
  },
  render: Default.render,
}

export const InitialsLarge: Story = {
  args: {
    children: 'Rt',
    size: 'large',
    color: 'info',
  },
  render: Default.render,
}
