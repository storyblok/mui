import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotFoundPage} from "./NotFoundPage";

const Component = NotFoundPage

export default {
    title: `Pages/NotFoundPage`,
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component
        {...args}
    >
    </Component>
)

export const Basic = Template.bind({});