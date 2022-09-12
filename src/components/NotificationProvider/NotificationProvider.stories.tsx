import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationProvider, useNotifications } from './NotificationProvider'
import { FunctionComponent, useMemo, useState } from 'react'
import Button from '@mui/material/Button'

const Component = NotificationProvider

export default {
  title: `Components/NotificationProvider`,
  component: Component,
} as ComponentMeta<typeof Component>

const WithContext: FunctionComponent = () => {
  const [count, setCount] = useState(0)
  const code = useMemo(() => {
    return Math.floor(Math.random() * 10000).toString()
  }, [count])
  const { error } = useNotifications()
  const handleClick = () => {
    error({
      title: 'Notification title',
      message: `Meaningful decription of the error goes here, code: ${code}`,
    })
    setCount((count) => count + 1)
  }
  return <Button onClick={handleClick}>Display</Button>
}

const Template: ComponentStory<typeof Component> = (args) => (
  <NotificationProvider {...args}>
    <WithContext />
  </NotificationProvider>
)

export const Error = Template.bind({})
Error.args = {}
