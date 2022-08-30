import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@mui/material/Button';
import {StoryblokIcon} from "../../icons";

const Component = Button

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui/Button`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, "contained","outlined","text"],
    },
    color: {
      control: 'select',
      options: [undefined, "inherit", "primary","secondary","success", "info", "warning", "error"],
    },
  },
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
};
export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'large',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: 'Button',
  startIcon: <StoryblokIcon />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: 'Button',
  endIcon: <StoryblokIcon />,
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: 'Button',
  endIcon: <StoryblokIcon />,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "inherit",
  children: 'Button',
  endIcon: <StoryblokIcon />,
};

