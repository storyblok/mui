import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorPage } from './ErrorPage'
import { InternalServerErrorPictogram } from '../../icons'

const Component = ErrorPage

export default {
  title: `Pages/ErrorPage`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
)

export const Basic = Template.bind({})
Basic.args = {
  pictogram: (
    <InternalServerErrorPictogram sx={{ height: 'inherit', width: 'auto' }} />
  ),
  title: 'Error',
  message: 'This is a user-friendly message.',
  details:
    'The details contain all the technical jargon, such as {"code": 123, "message": "NullPointerException at 123:12"}',
}
