import { Box, BoxProps, styled, Theme } from '@mui/material'
import { lighten } from '@mui/system/colorManipulator'
import { FunctionComponent } from 'react'

// block: 24, 24
// list: 36, 18
// dashboard: 50, 24

type PaletteColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
type IconColor = PaletteColor | 'default' | 'inherit'
type IconSize = 'small' | 'medium' | 'large'
type IconBoxVariant = 'default' | 'bordered' | 'light'

const width = (size: IconSize): number => {
  switch (size) {
    case 'large':
      return 50
    case 'medium':
      return 36
    case 'small':
      return 24
  }
}

const fontSize = (size: IconSize): number | string => {
  switch (size) {
    case 'large':
      return '2.4rem'
    case 'medium':
      return '2rem'
    case 'small':
      return '2rem'
  }
}

const fontColor = (
  theme: Theme,
  color: IconColor,
  variant: IconBoxVariant,
): string => {
  return color === 'inherit'
    ? 'inherit'
    : color === 'default'
    ? theme.palette.text.primary
    : variant === 'light'
    ? theme.palette[color].main
    : theme.palette[color].contrastText
}

const mainColor = (theme: Theme, color: IconColor) =>
  color === 'inherit'
    ? 'inherit'
    : color === 'default'
    ? theme.palette.grey.A100
    : theme.palette[color].main

const backgroundColor = (
  theme: Theme,
  color: IconColor,
  variant: IconBoxVariant,
): string => {
  if (color === 'inherit') {
    return 'transparent'
  }
  const bgColor = mainColor(theme, color)
  return variant === 'light' ? faintColor(theme, bgColor) : bgColor
}

const faintColor = (theme: Theme, color: string): string =>
  lighten(color, 1 - theme.palette.action.selectedOpacity)

const borderRadius = (theme: Theme, size: IconSize): number | string => {
  switch (size) {
    case 'small':
    case 'medium':
      return theme.shape.borderRadius
    case 'large':
      return typeof theme.shape.borderRadius === 'number'
        ? theme.shape.borderRadius * 2
        : '10px'
  }
}

type IconBoxProps = {
  color?: IconColor
  size?: IconSize
  variant?: IconBoxVariant
}

export const IconBox: FunctionComponent<BoxProps & IconBoxProps> = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'size' && prop !== 'variant',
})<IconBoxProps>(
  ({
    theme,
    color: optionalColor,
    variant: optionalVariant,
    size: optionalSize,
  }) => {
    const size: IconSize = optionalSize ?? 'medium'
    const defaultColor = 'default'
    const color: IconColor = Array.isArray(optionalColor)
      ? defaultColor
      : typeof optionalColor === 'undefined'
      ? defaultColor
      : optionalColor
    const variant: IconBoxVariant = optionalVariant ?? 'default'
    return {
      marginRight: theme.spacing(3),
      color: fontColor(theme, color, variant),
      backgroundColor: backgroundColor(theme, color, variant),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: width(size),
      minHeight: width(size),
      width: width(size),
      minWidth: width(size),
      fontSize: fontSize(size),
      borderRadius: borderRadius(theme, size),
      fontWeight: 700,
      // TODO use two nested divs instead; the inside of the border is not rounded
      border:
        variant === 'bordered'
          ? `${theme.spacing(1)} solid ${faintColor(
              theme,
              mainColor(theme, color),
            )}`
          : undefined,
    }
  },
)
