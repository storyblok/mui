import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'

const Component = Radio

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mui Components/RadioButton',
  component: Component,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
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
)

export const Basic = Template.bind({})
Basic.args = {}
