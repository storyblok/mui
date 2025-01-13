import type { Args, Meta, StoryObj } from '@storybook/react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'

const meta: Meta<typeof Radio> = {
  title: 'Mui Components/RadioButton',
  component: Radio,
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Radio>

export const Basic: Story = {
  render: (args: Args) => (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio {...args} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio {...args} />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  ),
}
