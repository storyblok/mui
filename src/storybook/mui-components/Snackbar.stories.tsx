import type { Args, Meta, StoryObj } from '@storybook/react'
import { Alert, Box, Snackbar, Button } from '@mui/material'
import { useState } from '@storybook/preview-api'
import { loremIpsum } from '../demo-utils/loremIpsum'

const meta: Meta<typeof Snackbar> = {
  title: 'Mui Components/Snackbar',
  component: Snackbar,
}

export default meta

type Story = StoryObj<typeof Snackbar>

export const Basic: Story = {
  args: {
    message: loremIpsum,
  },
  render: (args: Args) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(true)
    }

    const handleClose = (_: unknown, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      setOpen(false)
    }

    return (
      <Box>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
          onClose={handleClose}
          open={open}
          autoHideDuration={6000}
          {...args}
        />
      </Box>
    )
  },
}

export const SuccessAlert: Story = {
  args: {
    children: <Alert severity="success">{loremIpsum}</Alert>,
  },
  render: Basic.render,
}

export const InfoAlert: Story = {
  args: {
    children: <Alert severity="info">{loremIpsum}</Alert>,
  },
  render: Basic.render,
}

export const WarningAlert: Story = {
  args: {
    children: <Alert severity="warning">{loremIpsum}</Alert>,
  },
  render: Basic.render,
}

export const ErrorAlert: Story = {
  args: {
    children: <Alert severity="error">{loremIpsum}</Alert>,
  },
  render: Basic.render,
}
