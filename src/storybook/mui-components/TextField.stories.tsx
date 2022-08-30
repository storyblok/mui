import {ComponentStory, ComponentMeta} from '@storybook/react';

import {FormControl, FormLabel as MuiFormLabel, TextField} from "@mui/material";

const Component = TextField

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `Mui Components/TextField`,
    component: Component,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: {
            control: 'select',
            options: [undefined, 'outlined', 'filled', 'standard']
        },
        error: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        value: {
            control: 'text',
        },
    },
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

const FormTemplate: ComponentStory<typeof Component> = (args) => (
    <FormControl>
        <MuiFormLabel>Label</MuiFormLabel>
        <Component {...args} />
    </FormControl>
)

export const Basic = Template.bind({});
Basic.args = {
    placeholder: 'Placeholder',
};
export const Standard = Template.bind({});
Standard.args = {
    variant: 'standard',
    placeholder: 'Placeholder',
};
export const Disabled = Template.bind({});
Disabled.args = {
    value: 'Value',
    disabled: true,
};
export const InputLabel = Template.bind({});
InputLabel.args = {
    placeholder: 'Placeholder',
    label: 'Label',
}
export const FormLabel = FormTemplate.bind({});
FormLabel.args = {
    placeholder: 'Placeholder',
}
export const Error = Template.bind({});
Error.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    error: true,
};

