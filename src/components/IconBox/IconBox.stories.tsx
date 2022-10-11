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
  argTypes: {
    color: {
      control: 'select',
      options: [
        undefined,
        'default',
        'inherit',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ],
    },
    variant: {
      control: 'select',
      options: [undefined, 'default', 'bordered', 'light'],
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    {...args}
    fontSize="inherit"
  />
)

export const Default = Template.bind({})
Default.args = {
  children: <CalendarIcon fontSize="inherit" />,
}

export const Small = Template.bind({})
Small.args = {
  children: <ContentStoryFillIcon fontSize="inherit" />,
  size: 'small',
}
export const Medium = Template.bind({})
Medium.args = {
  children: <ContentStoryFillIcon fontSize="inherit" />,
  size: 'medium',
}
export const Large = Template.bind({})
Large.args = {
  children: <ContentStoryFillIcon fontSize="inherit" />,
  size: 'large',
}

export const SmallColor = Template.bind({})
SmallColor.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'small',
  color: 'warning',
}
export const MediumColor = Template.bind({})
MediumColor.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'medium',
  color: 'warning',
}
export const LargeColor = Template.bind({})
LargeColor.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'large',
  color: 'warning',
}

export const SmallBordered = Template.bind({})
SmallBordered.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'small',
  color: 'warning',
  variant: 'bordered',
}
export const MediumBordered = Template.bind({})
MediumBordered.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'medium',
  color: 'warning',
  variant: 'bordered',
}
export const LargeBordered = Template.bind({})
LargeBordered.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'large',
  color: 'warning',
  variant: 'bordered',
}

export const SmallLight = Template.bind({})
SmallLight.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'small',
  color: 'warning',
  variant: 'light',
}
export const MediumLight = Template.bind({})
MediumLight.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'medium',
  color: 'warning',
  variant: 'light',
}
export const LargeLight = Template.bind({})
LargeLight.args = {
  children: <WarningIcon fontSize="inherit" />,
  size: 'large',
  color: 'warning',
  variant: 'light',
}

export const Success = Template.bind({})
Success.args = {
  children: <SquareSuccessIcon fontSize="inherit" />,
  color: 'success',
}
export const Info = Template.bind({})
Info.args = {
  children: <SquareInfoIcon fontSize="inherit" />,
  color: 'info',
}
export const Warning = Template.bind({})
Warning.args = {
  children: <SquareWarningIcon fontSize="inherit" />,
  color: 'warning',
}
export const Error = Template.bind({})
Error.args = {
  children: <SquareErrorIcon fontSize="inherit" />,
  color: 'error',
}

export const Inherit = Template.bind({})
Inherit.args = {
  children: <SquareErrorIcon fontSize="inherit" />,
  color: 'inherit',
}

export const InitialsSmall = Template.bind({})
InitialsSmall.args = {
  children: 'Rt',
  size: 'small',
  color: 'info',
}

export const InitialsMedium = Template.bind({})
InitialsMedium.args = {
  children: 'Rt',
  size: 'medium',
  color: 'info',
}

export const InitialsLarge = Template.bind({})
InitialsLarge.args = {
  children: 'Rt',
  size: 'large',
  color: 'info',
}
