import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppContainer } from './AppContainer'
import { ContentDemoArea } from '../../storybook/demo-utils/ContentDemoArea'
import { AppHeader } from '../AppHeader'
import { DemoIcon } from '../../storybook/demo-utils/DemoIcon'

const Component = AppContainer

export default {
  title: `Layout/AppContainer`,
  component: Component,
  argTypes: {
    maxWidth: {
      control: 'select',
      options: [undefined, 'sx', 'sm', 'md', 'lg', 'xl'],
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: <ContentDemoArea />,
}

export const WithHeader = Template.bind({})
WithHeader.args = {
  children: (
    <>
      <AppHeader
        title="Title"
        subtitle="Subtitle"
        icon={<DemoIcon />}
      />
      <ContentDemoArea />
    </>
  ),
}

export const CustomMaxWidth = Template.bind({})
CustomMaxWidth.args = {
  children: <ContentDemoArea />,
  maxWidth: 'lg',
}
