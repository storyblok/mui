import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert, Box, Snackbar } from '@mui/material'
import { loremIpsum } from '../utils/loremIpsum'
import Button from '@mui/material/Button'
import { useState } from 'react'

const Component = Snackbar

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Snackbar`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
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
}

export const Basic = Template.bind({})
Basic.args = {
  message: loremIpsum,
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
  children: <Alert severity="success">{loremIpsum}</Alert>,
}
export const InfoAlert = Template.bind({})
InfoAlert.args = {
  children: <Alert severity="info">{loremIpsum}</Alert>,
}
export const WarningAlert = Template.bind({})
WarningAlert.args = {
  children: <Alert severity="warning">{loremIpsum}</Alert>,
}
export const ErrorAlert = Template.bind({})
ErrorAlert.args = {
  children: <Alert severity="error">{loremIpsum}</Alert>,
}
