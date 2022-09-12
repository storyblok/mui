import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CarouselPagination } from './CarouselPagination'

const Component = CarouselPagination

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Components/CarouselPagination`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    count={10}
    {...args}
  />
)

export const Default = Template.bind({})

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}
export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}
export const Standard = Template.bind({})
Standard.args = {
  color: 'standard',
}
export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const LastAndFirstButtons = Template.bind({})
LastAndFirstButtons.args = {
  showFirstButton: true,
  showLastButton: true,
}
