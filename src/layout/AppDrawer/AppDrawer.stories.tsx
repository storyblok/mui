import type { Args, Meta, StoryObj } from '@storybook/react'
import { useState } from '@storybook/preview-api'
import {
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Button } from '@mui/material'
import { AppDrawer } from './AppDrawer'
import { loremIpsum } from "@src/storybook/demo-utils/loremIpsum"

const Component = AppDrawer

const meta: Meta<typeof Component> = {
  title: 'Layout/AppDrawer',
  component: AppDrawer,
}

export default meta

type Story = StoryObj<typeof Component>

export const Basic: Story = {
  render: (args: Args) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
      <Container>
        <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
        <Component
          {...args}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
          open={drawerOpen}
        />
      </Container>
    )
  }
}

export const OverflowY: Story = {
  args: {
    header: 'Lorem Ipsum',
    children: (
      <Stack>
        <Typography>{loremIpsum}</Typography>
        <Typography>{loremIpsum}</Typography>
        <Typography>{loremIpsum}</Typography>
        <Typography>{loremIpsum}</Typography>
      </Stack>
    ),
  },
  render: Basic.render,
}

export const Form: Story = {
  args: {
    header: 'Settings',
    footer: <Button>Submit</Button>,
    children: (
      <Stack>
        <TextField label="Name" />
        <FormControl margin="normal">
          <FormLabel id="radio-group">Type</FormLabel>
          <RadioGroup aria-labelledby="radio-group">
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="Private"
            />
            <FormControlLabel
              value="company"
              control={<Radio />}
              label="Company"
            />
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl margin="normal">
          <FormLabel id="checkbox-group">Color</FormLabel>
          <RadioGroup aria-labelledby="checkbox-group">
            <FormControlLabel
              value="green"
              control={<Checkbox />}
              label="Green"
            />
            <FormControlLabel
              value="dark-blue"
              control={<Checkbox />}
              label="Dark Blue"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    ),
  },
  render: Basic.render,
}
