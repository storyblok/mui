import React from "react"
import {lightTheme} from "../src/theme";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

export const ThemeDecorator = (Story) => (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    )
