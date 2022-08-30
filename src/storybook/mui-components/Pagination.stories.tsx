import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Pagination} from "@mui/material";

const Component = Pagination

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `Mui/Pagination`,
    component: Component,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
    <Component
        count={10}
        {...args}
    />
)

export const Basic = Template.bind({});
