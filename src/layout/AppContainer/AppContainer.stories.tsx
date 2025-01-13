import type { Meta, StoryObj } from '@storybook/react'
import { AppContainer, AppHeader } from '@src/layout'
import { ContentDemoArea } from '@src/storybook/demo-utils/ContentDemoArea'
import { DemoIcon } from '@src/storybook/demo-utils/DemoIcon'

const meta: Meta<typeof AppContainer> = {
  title: 'Layout/AppContainer',
  component: AppContainer,
  argTypes: {
    maxWidth: {
      control: 'select',
      options: [undefined, 'sx', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta

type Story = StoryObj<typeof AppContainer>

export const Basic: Story = {
  args: {
    children: <ContentDemoArea />,
  },
}

export const WithHeader: Story = {
  args: {
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
  },
}

export const CustomMaxWidth: Story = {
  args: {
    children: <ContentDemoArea />,
    maxWidth: 'lg',
  },
}
