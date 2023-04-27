import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert, Box } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `HTML Elements/code`,
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

const exampleInlineCode = `console.log("Hello, Storyblok")`

const Template: ComponentStory<typeof Box> = () => (
  <code>{exampleInlineCode}</code>
)

const BackgroundTemplate: ComponentStory<typeof Box> = () => (
  <Alert severity="info">
    <code>{exampleInlineCode}</code>
  </Alert>
)

export const InlineCode = Template.bind({})
InlineCode.args = {}

export const OnBackground = BackgroundTemplate.bind({})
OnBackground.args = {}
