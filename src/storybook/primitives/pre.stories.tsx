import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `HTML Elements/pre`,
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
  },
  // decorators: [(Story) => (
  //     <ThemeProvider theme={lightTheme}>
  //       <Story />
  //     </ThemeProvider>
  // )]
} as ComponentMeta<typeof Box>

const exampleCodeBlock = `const printHello = () => {
  console.log("Hello, Storyblok")
}`
const exampleCodeBlockOverflow = `const printHello = () => {
  console.log("Hello, Storyblok")
  console.log("A very very very very very very very very very very  very  very  very  very  very  very  very  very  very long message.")
}`

const CodeBlockTemplate: ComponentStory<typeof Box> = (args) => (
  <Box
    component="pre"
    {...args}
  >
    <code>{exampleCodeBlock}</code>
  </Box>
)
const CodeBlockTemplateOverflow: ComponentStory<typeof Box> = (args) => (
  <Box
    component="pre"
    {...args}
  >
    <code>{exampleCodeBlockOverflow}</code>
  </Box>
)

const codeBlockSxProp = {
  bgcolor: 'secondary.main',
  color: 'secondary.contrastText',
  p: 3,
  borderRadius: 2,
  overflowX: 'auto',
} as const

export const Basic = CodeBlockTemplate.bind({})
Basic.args = {}

export const DarkCodeBlock = CodeBlockTemplate.bind({})
DarkCodeBlock.args = {
  sx: codeBlockSxProp,
}

export const Overflow = CodeBlockTemplateOverflow.bind({})
Overflow.args = {
  sx: codeBlockSxProp,
}
