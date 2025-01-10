import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UnauthorizedPage } from './UnauthorizedPage'

const Component = UnauthorizedPage

export default {
  title: 'Pages/UnauthorizedPage',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
)

export const Basic = Template.bind({})

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  message: 'You are not authenticated. Try to refresh the page',
}
