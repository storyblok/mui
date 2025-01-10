import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppContent } from './AppContent'
import { ContentDemoArea } from '../../storybook/demo-utils/ContentDemoArea'
import { AppContainer } from '../AppContainer'

const Component = AppContent

export default {
  title: 'Layout/AppContent',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <AppContainer>
    <Component {...args}>
      <ContentDemoArea />
    </Component>
  </AppContainer>
)

export const Basic = Template.bind({})
