import type { Args, Meta, StoryObj } from '@storybook/react'
import { FunctionComponent, useMemo, useState } from 'react'
import { Button } from '@mui/material'
import { NotificationProvider, useNotifications } from './NotificationProvider'

const meta: Meta<typeof NotificationProvider> = {
  title: 'Components/NotificationProvider',
  component: NotificationProvider,
}

export default meta

type Story = StoryObj<typeof NotificationProvider>

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

export const Error: Story = {
  render: (args: Args) => (
    <NotificationProvider {...args}>
      <WithContext />
    </NotificationProvider>
  ),
}
