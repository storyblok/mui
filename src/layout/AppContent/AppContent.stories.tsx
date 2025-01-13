import type { Args, Meta, StoryObj } from '@storybook/react'
import { AppContent, AppContainer } from '@src/layout'
import { ContentDemoArea } from '@src/storybook/demo-utils/ContentDemoArea'

const meta: Meta<typeof AppContent> = {
  title: 'Layout/AppContent',
  component: AppContent,
}

export default meta

type Story = StoryObj<typeof AppContent>

export const Basic: Story = {
  render: (args: Args) => (
    <AppContainer>
      <AppContent {...args}>
        <ContentDemoArea />
      </AppContent>
    </AppContainer>
  ),
}
