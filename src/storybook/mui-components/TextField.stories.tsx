import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '@mui/material'

const meta: Meta<typeof TextField> = {
  title: 'Mui Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      table: {
        defaultValue: {
          summary: 'outlined',
        },
      },
    },
    error: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    value: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof TextField>

export const Basic: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Standard: Story = {
  args: {
    variant: 'standard',
    placeholder: 'Placeholder',
  },
}

export const Disabled: Story = {
  args: {
    value: 'Value',
    disabled: true,
  },
}

export const InputLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
}

export const FormLabel: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: true,
  },
}
