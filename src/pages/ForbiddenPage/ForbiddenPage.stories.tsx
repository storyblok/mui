import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ForbiddenPage } from './ForbiddenPage'

const Component = ForbiddenPage

export default {
  title: `Pages/ForbiddenPage`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
)

export const Basic = Template.bind({})

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  message:
    "You don't have sufficient right to display this page. Consult with a space administrator if you need to load this page.",
}
