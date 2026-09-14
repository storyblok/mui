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

Find the full documentation for this package [here](https://storyblok-mui.vercel.app/).

## What is MUI?

From [mui.com](https://mui.com/material-ui/getting-started/overview/):

> MUI is an open-source React component library that implements Google's Material Design.
>
> It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

## What is included in this package?

`@storybook/mui` consists of a [MUI theme](https://mui.com/material-ui/customization/theming/) that styles the MUI standard components according to [Storyblok's design system](https://blok.ink). Since `@storybook/mui` is based on MUI, all the [MUI standard components](https://mui.com/material-ui/getting-started/supported-components/) are available. Some of these components are visualised in the [MUI Components section](https://storyblok-mui.vercel.app/?path=/story/mui).

`@storybook/mui` also provides some additional components that are unique to this package. For example, the `<AppLayout />` component is great for building custom application extensions. The documentation for all these components is located [here](https://storyblok-mui.vercel.app/).


## Getting Started

The steps below explains how to include `@storyblok/mui` in your project.

### Prerequisites

First of all, set up MUI with the help of [MUI's official documentation](https://mui.com/).

With npm:
```shell
npm install @mui/material @emotion/react @emotion/styled
```

With yarn:
```shell
yarn add @mui/material @emotion/react @emotion/styled
```

### Installation

Install `@storyblok/mui`:

````shell
npm install --save-exact @storyblok/mui
````

With yarn:

````shell
yarn add --exact @storyblok/mui
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

## Releasing

Releases are automated with [release-please](https://github.com/googleapis/release-please). There is no manual version bumping, tagging, or publishing.

1. Merge pull requests into `main` with a [conventional commit](https://www.conventionalcommits.org/) title. The title becomes the commit message on `main`, so it is what determines the next version:
   - `fix:` → patch release
   - `feat:` → minor release
   - `feat!:` / `BREAKING CHANGE:` → minor release, while the package is still pre-`1.0.0`
   - `chore:`, `docs:`, `refactor:`, `test:`, `ci:`, `build:`, `style:` → no release
2. release-please opens and maintains a `chore(main): release x.y.z` pull request that bumps `package.json` and updates `CHANGELOG.md`.
3. Merging that pull request tags the release as `@storyblok/mui@x.y.z`, creates the GitHub release, and stages the package for publication on NPM. Publishing uses [trusted publishing](https://docs.npmjs.com/trusted-publishers) over OIDC, so a maintainer has to approve the staged release on npmjs.com before it goes live.

If a user-facing change lands under a type that does not trigger a release, it will not ship until the next `fix:` or `feat:` is merged.
