import type { Args, Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'

const meta: Meta<typeof Box> = {
  title: 'HTML Elements/pre',
  component: Box,
}

export default meta

type Story = StoryObj<typeof Box>

const exampleCodeBlock = `
  const printHello = () => {
    console.log("Hello, Storyblok")
  }
`

const exampleCodeBlockOverflow = `
  const printHello = () => {
    console.log("Hello, Storyblok")
    console.log("A very very very very very very very very very very  very  very  very  very  very  very  very  very  very long message.")
  }
`

const codeBlockSxProp = {
  bgcolor: 'secondary.main',
  color: 'secondary.contrastText',
  p: 3,
  borderRadius: 2,
  overflowX: 'auto',
} as const

export const Basic: Story = {
  render: (args: Args) => (
    <Box component="pre" {...args}>
      <code>{exampleCodeBlock}</code>
    </Box>
  ),
}

export const DarkCodeBlock: Story = {
  args: {
    sx: codeBlockSxProp,
  },
  render: Basic.render,
}

export const Overflow = {
  args: {
    sx: codeBlockSxProp,
  },
  render: (args: Args) => (
    <Box component="pre" {...args}>
      <code>{exampleCodeBlockOverflow}</code>
    </Box>
  ),
}
