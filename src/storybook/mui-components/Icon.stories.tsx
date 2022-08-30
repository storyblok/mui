import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SettingsIcon} from "../../icons";
import {IconComponent} from "../../icons/iconComponent";

const Component = SettingsIcon

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `Mui/Icon`,
    component: Component,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<IconComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
    <Component
        {...args}
    />
)
export const Icon = Template.bind({});
