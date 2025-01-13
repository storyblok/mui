import type { ReactNode } from 'react'
import type { Args, Meta, StoryObj } from '@storybook/react'
import { useState, useCallback } from '@storybook/preview-api'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

const meta: Meta<typeof Select<string>> = {
  title: 'Mui Components/Select',
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select<string>>

const names = [
  'Bradley Wilkerson',
  'Johannes Lindgren',
  'Kelly Snyder',
  'Virginia Andrews',
]

export const Basic: Story = {
  render: (args: Args) => {
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
  },
}
