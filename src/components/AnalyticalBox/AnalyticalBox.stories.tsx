import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AnalyticalBox} from "./AnalyticalBox";
import {
    CalendarIcon,
    SquareErrorIcon,
    SquareInfoIcon,
    SquareSuccessIcon,
    SquareWarningIcon,
    StatusIcon
} from "../../icons";
import {Typography} from "@mui/material";
import {loremIpsum} from "../../storybook/utils/loremIpsum";

const Component = AnalyticalBox

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `Components/AnalyticalBox`,
    component: Component,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
    <Component
        {...args}
    />
)

export const Basic = Template.bind({});
Basic.args = {
    icon: <StatusIcon />,
    children: <Typography variant="body1">Pending...</Typography>,
}

export const Success = Template.bind({});
Success.args = {
    icon: <SquareSuccessIcon/>,
    color: "success",
    children: <Typography variant="body1">Success</Typography>,
};
export const Info = Template.bind({});
Info.args = {
    icon: <SquareInfoIcon/>,
    color: "info",
    children: <Typography variant="body1">Info</Typography>,
};
export const Warning = Template.bind({});
Warning.args = {
    icon: <SquareWarningIcon/>,
    color: "warning",
    children: <Typography variant="body1">Warning</Typography>,
};
export const Error = Template.bind({});
Error.args = {
    icon: <SquareErrorIcon/>,
    color: "error",
    children: <Typography variant="body1">Error</Typography>,
};

export const Small = Template.bind({});
Small.args = {
    icon: <StatusIcon fontSize="inherit"/>,
    children: <Typography variant="body1">Loading...</Typography>,
    size: 'small'
};
export const Medium = Template.bind({});
Medium.args = {
    icon: <StatusIcon/>,
    children: <Typography variant="body1">Loading...</Typography>,
    size: 'medium'
};
export const Large = Template.bind({});
Large.args = {
    icon: <StatusIcon fontSize="inherit"/>,
    children: <Typography variant="body1">Loading...</Typography>,
    size: 'large'
};

export const Detailed = Template.bind({});
Detailed.args = {
    icon: <CalendarIcon/>,
    children: <>
        <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>12th of August</Typography>
        <Typography variant="body1">10:30 am</Typography>
    </>,
};

export const LongText = Template.bind({});
LongText.args = {
    icon: <SquareErrorIcon/>,
    children: <>
        <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>Loading...</Typography>
        <Typography variant="body2">{loremIpsum}</Typography>
    </>,
};
