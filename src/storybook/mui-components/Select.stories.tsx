import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ReactNode, useCallback, useState } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mui Components/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: {
    //     control: 'select',
    //     options: [undefined, "contained", "outlined", "text"],
    // },
    // color: {
    //     control: 'select',
    //     options: [undefined, "inherit", "primary", "secondary", "success", "info", "warning", "error"],
    // },
  },
} as ComponentMeta<typeof Select<string>>

const names = [
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  'Johannes Lindgren',
].sort()

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select<string>> = (args) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event

    setValue(value as string)
  }

  const renderValue = useCallback(
    (value: string): ReactNode =>
      value === '' ? <em>Select an option</em> : value,
    [],
  )

  return (
    <FormControl sx={{ width: 300 }}>
      <InputLabel id="story-select">Name</InputLabel>
      <Select<string>
        labelId="story-select"
        displayEmpty
        value={value}
        onChange={handleChange}
        renderValue={renderValue}
        {...args}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
