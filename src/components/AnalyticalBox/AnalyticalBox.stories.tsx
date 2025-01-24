import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@mui/material'
import {
  CalendarIcon,
  SquareErrorIcon,
  SquareInfoIcon,
  SquareSuccessIcon,
  SquareWarningIcon,
  StatusIcon,
} from '@src/icons'
import { loremIpsum } from '@src/storybook/demo-utils/loremIpsum'
import { AnalyticalBox } from './AnalyticalBox'

const meta: Meta<typeof AnalyticalBox> = {
  title: 'Components/AnalyticalBox',
  component: AnalyticalBox,
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
  },
}

export default meta

type Story = StoryObj<typeof AnalyticalBox>

export const Basic: Story = {
  args: {
    icon: <StatusIcon />,
    children: <Typography variant="body1">Pending...</Typography>,
  },
}

export const Success: Story = {
  args: {
    icon: <SquareSuccessIcon />,
    color: 'success',
    children: <Typography variant="body1">Success</Typography>,
  },
}

export const Info: Story = {
  args: {
    icon: <SquareInfoIcon />,
    color: 'info',
    children: <Typography variant="body1">Info</Typography>,
  },
}

export const Warning: Story = {
  args: {
    icon: <SquareWarningIcon />,
    color: 'warning',
    children: <Typography variant="body1">Warning</Typography>,
  },
}

export const Error: Story = {
  args: {
    icon: <SquareErrorIcon />,
    color: 'error',
    children: <Typography variant="body1">Error</Typography>,
  },
}

export const Inherit: Story = {
  args: {
    icon: <SquareErrorIcon />,
    color: 'inherit',
    children: <Typography variant="body1">Error</Typography>,
  },
}

export const Small: Story = {
  args: {
    icon: <StatusIcon fontSize="inherit" />,
    children: <Typography variant="body1">Loading...</Typography>,
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    icon: <StatusIcon />,
    children: <Typography variant="body1">Loading...</Typography>,
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    icon: <StatusIcon fontSize="inherit" />,
    children: <Typography variant="body1">Loading...</Typography>,
    size: 'large',
  },
}

export const Detailed: Story = {
  args: {
    icon: <CalendarIcon />,
    children: (
      <>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text.secondary' }}
        >
          12th of August
        </Typography>
        <Typography variant="body1">10:30 am</Typography>
      </>
    ),
  },
}

export const LongText: Story = {
  args: {
    icon: <SquareErrorIcon />,
    children: (
      <>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text.secondary' }}
        >
          Loading...
        </Typography>
        <Typography variant="body2">{loremIpsum}</Typography>
      </>
    ),
  },
}
