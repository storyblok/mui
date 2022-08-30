import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Link} from "@mui/material";

const Component = Link

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Link`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // decorators: [(Story) => (
  //     <ThemeProvider theme={lightTheme}>
  //       <Story />
  //     </ThemeProvider>
  // )]
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
)

const AnchorTemplate: ComponentStory<'a'> = (args) => (
    <a {...args} />
)

export const MuiLink = Template.bind({});
MuiLink.args = {
  children: 'Link',
  href: '/',
};

export const Anchor = AnchorTemplate.bind({});
Anchor.args = {
  children: 'Link',
  href: '/',
};

