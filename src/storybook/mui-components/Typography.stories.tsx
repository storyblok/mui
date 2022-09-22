import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from '@mui/material'
import { loremIpsum } from '../demo-utils/loremIpsum'

const Component = Typography

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Typography`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'overline',
        'caption',
      ],
    },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Heading = Template.bind({})
Heading.args = {
  variant: 'h1',
  children: 'Heading 1',
}

export const Body = Template.bind({})
Body.args = {
  variant: 'body1',
  children: loremIpsum,
}
