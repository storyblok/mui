import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Alert, AlertTitle} from "@mui/material";

const Component = Alert

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Alert`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    severity: {
      control: 'select',
      options: ["success","info","warning", "error"],
    },
  },
  // decorators: [(Story) => (
  //     <ThemeProvider theme={lightTheme}>
  //       <Story />
  //     </ThemeProvider>
  // )]
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

const alertBody = <>
  <AlertTitle>Title</AlertTitle>
  This is an awesome component from Storyblok.
</>

export const Success = Template.bind({});
Success.args = {
  children: alertBody,
  severity: "success",
  title: "Title",
};
export const Info = Template.bind({});
Info.args = {
  children: alertBody,
  severity: "info",
};
export const Warning = Template.bind({});
Warning.args = {
  children: alertBody,
  severity: "warning",
};
export const Error = Template.bind({});
Error.args = {
  children: alertBody,
  severity: "error",
};
export const Outlined = Template.bind({});
Outlined.args = {
  children: alertBody,
  severity: "info",
  variant: 'outlined',
};


