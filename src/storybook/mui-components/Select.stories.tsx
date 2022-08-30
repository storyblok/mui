import {ComponentStory, ComponentMeta} from '@storybook/react';

import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";

const Component = Select

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `Mui/Select`,
    component: Component,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // variant: {
        //     control: 'select',
        //     options: [undefined, "contained", "outlined", "text"],
        // },
        // color: {
        //     control: 'select',
        //     options: [undefined, "inherit", "primary", "secondary", "success", "info", "warning", "error"],
        // },
    },
} as ComponentMeta<typeof Component>;

const names = [
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
    'Johannes Lindgren',
].sort()


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
    const [value, setValue] = useState<string>('')

    const handleChange = (event: SelectChangeEvent<string>) => {
        const {
            target: {value},
        } = event

        setValue(value)
    };

    return (
        <FormControl sx={{width: 300}}>
            <InputLabel id="story-select">Name</InputLabel>
            <Component
                labelId="story-select"
                displayEmpty
                value={value}
                // @ts-ignore
                onChange={handleChange}
                // @ts-ignore
                renderValue={(selected) => (
                    selected === '' ? <em>Select an option</em> : selected
                )}
                {...args}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Component>
        </FormControl>
    )
}

export const Basic = Template.bind({});
Basic.args = {
};

