import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
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
import { loremIpsum } from '../../storybook/demo-utils/loremIpsum'

const Component = AppDrawer

export default {
  title: `Layout/AppDrawer`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  const [drawerOpen, setDrawerOpen] = useState(true)
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

export const Basic = Template.bind({})

export const OverflowY = Template.bind({})
OverflowY.args = {
  header: 'Lorem Ipsum',
  children: (
    <Stack>
      <Typography>{loremIpsum}</Typography>
      <Typography>{loremIpsum}</Typography>
      <Typography>{loremIpsum}</Typography>
      <Typography>{loremIpsum}</Typography>
    </Stack>
  ),
}

export const Form = Template.bind({})
Form.args = {
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
}
