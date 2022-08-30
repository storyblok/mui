import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SplitButton} from "./SplitButton";
import {ListItemIcon, ListItemText} from "@mui/material";
import {BlockTextCIcon, BlockTextLIcon, BlockTextRIcon, DefinePresetIcon} from "../../icons";

const Component = SplitButton

export default {
    title: `Components/SplitButton`,
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component
        {...args}
    >
    </Component>
)

const buttonProps = () => ({
    startIcon: <DefinePresetIcon/>,
        children: 'Justify',
})
const menuItemProps= () => [{
        children: <>
            <ListItemIcon>
                <BlockTextLIcon/>
            </ListItemIcon>
            <ListItemText>
                Align Left
            </ListItemText>
        </>
    },
{
    children: <>
        <ListItemIcon>
            <BlockTextCIcon/>
        </ListItemIcon>
        <ListItemText>
            Center Text
        </ListItemText>
    </>
},
{
    children: <>
        <ListItemIcon>
            <BlockTextRIcon/>
        </ListItemIcon>
        <ListItemText>
            Align Right
        </ListItemText>
    </>
}
]

export const Basic = Template.bind({});
Basic.args = {
    buttonProps: {
        children: 'My basket'
    },
    menuItemProps: [{
        children: 'View basket'
    }, {
        children: 'Empty basket'
    }, {
        children: 'Check out'
    }]
}

export const Icons = Template.bind({});
Icons.args = {
    buttonProps: buttonProps(),
    menuItemProps: menuItemProps(),
}

export const Text = Template.bind({});
Text.args = {
    buttonProps: buttonProps(),
    menuItemProps: menuItemProps(),
    variant: 'text',
    color: 'inherit',
}

export const Outlined = Template.bind({});
Outlined.args = {
    buttonProps: buttonProps(),
    menuItemProps: menuItemProps(),
    variant: 'outlined',
    color: 'inherit',
}

export const Secondary = Template.bind({});
Secondary.args = {
    buttonProps: buttonProps(),
    menuItemProps: menuItemProps(),
    color: 'secondary',
}