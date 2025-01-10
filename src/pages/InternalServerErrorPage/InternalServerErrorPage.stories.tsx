import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InternalServerErrorPage } from './InternalServerErrorPage'

const Component = InternalServerErrorPage

export default {
  title: 'Pages/InternalServerErrorPage',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
)

export const Basic = Template.bind({})

const message = 'An unexpected error occurred on the server.'

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  message,
}

export const Detailed = Template.bind({})
Detailed.args = {
  message,
  details: 'The service XYZ did not respond.',
}
