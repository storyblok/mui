<div style="text-align:center">
  <h1 style="text-align:center">
    <code>@storyblok/mui</code>
  </h1>
  <p style="text-align:center">
    A MUI Theme with multiple additional reusable components for Storyblok.
  </p>
</div>

[![Node.js Package](https://github.com/storyblok/mui/actions/workflows/npm-publish.yml/badge.svg?branch=develop)](https://github.com/storyblok/mui/actions/workflows/npm-publish.yml)

`@storybook/mui` is a component library based on [MUI](https://mui.com/). It is the ideal package to use for building Storyblok extensions with React as it takes care of the task of styling your components and lets you focus on building business logic. Thus, extensions built with `@storybook/mui` will seamlessly, visually integrate into Storyblok.

What is MUI? From [mui.com](https://mui.com/material-ui/getting-started/overview/):

> MUI is an open-source React component library that implements Google's Material Design.
>
> It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

What is included in this package?

`@storybook/mui` consists of a [MUI theme](https://mui.com/material-ui/customization/theming/) that styles the MUI standard components according to [Storyblok's design system](https://blok.ink). Since @storybook/mui is based on MUI, all the [MUI standard components](https://mui.com/material-ui/getting-started/supported-components/) are available. Some of these components are visualised in the [MUI Components section](/?path=/story/mui). You'll find the official documentation on https://mui.com/.

`@storybook/mui` also provides some additional components that are unique to this package. For example, the `<AppLayout />` component is great for building custom application extensions.


## Getting Started

The steps below explains how to include `@storyblok/mui` in your project.

### Prerequisites

First of all, set up MUI with the help of [MUI's official documentation](https://mui.com/).

### Installation

Install `@storyblok/mui`:

````shell
npm install @storyblok/mui
````

With yarn:

````shell
yarn add @storyblok/mui
````

Wrap your application within a `<ThemeProvider /> component`:


````typescript jsx
import { lightTheme } from '@storyblok/mui'
import {
  CssBaseline,
  Button,
  ThemeProvider
} from "@mui/material";

const App = () => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Button>
        Hello
      </Button>
    </ThemeProvider>
)
````