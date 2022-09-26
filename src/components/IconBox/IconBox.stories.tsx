import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconBox } from './IconBox'
import {
  CalendarIcon,
  ContentStoryFillIcon,
  SquareErrorIcon,
  SquareInfoIcon,
  SquareSuccessIcon,
  SquareWarningIcon,
  WarningIcon,
} from '../../icons'

const Component = IconBox

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Components/IconBox`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: <CalendarIcon />,
}

export const Small = Template.bind({})
Small.args = {
  children: <ContentStoryFillIcon />,
  size: 'small',
}
export const Medium = Template.bind({})
Medium.args = {
  children: <ContentStoryFillIcon />,
  size: 'medium',
}
export const Large = Template.bind({})
Large.args = {
  children: <ContentStoryFillIcon />,
  size: 'large',
}

export const SmallColor = Template.bind({})
SmallColor.args = {
  children: <WarningIcon />,
  size: 'small',
  color: 'warning',
}
export const MediumColor = Template.bind({})
MediumColor.args = {
  children: <WarningIcon />,
  size: 'medium',
  color: 'warning',
}
export const LargeColor = Template.bind({})
LargeColor.args = {
  children: <WarningIcon />,
  size: 'large',
  color: 'warning',
}

export const Success = Template.bind({})
Success.args = {
  children: <SquareSuccessIcon />,
  color: 'success',
}
export const Info = Template.bind({})
Info.args = {
  children: <SquareInfoIcon />,
  color: 'info',
}
export const Warning = Template.bind({})
Warning.args = {
  children: <SquareWarningIcon />,
  color: 'warning',
}
export const Error = Template.bind({})
Error.args = {
  children: <SquareErrorIcon />,
  color: 'error',
}

export const InitialsSmall = Template.bind({})
InitialsSmall.args = {
  children: 'Rt',
  size: 'small',
}

export const InitialsMedium = Template.bind({})
InitialsMedium.args = {
  children: 'Rt',
  size: 'medium',
}

export const InitialsLarge = Template.bind({})
InitialsLarge.args = {
  children: 'Rt',
  size: 'large',
}
