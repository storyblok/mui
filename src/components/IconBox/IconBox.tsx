import { Box, styled, Theme } from '@mui/material'
import { lighten } from '@mui/system/colorManipulator'

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
type IconColor = PaletteColor | 'default'
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
  color: PaletteColor | 'default',
  variant: IconBoxVariant,
): string => {
  return color === 'default'
    ? theme.palette.text.primary
    : variant === 'light'
    ? theme.palette[color].main
    : theme.palette[color].contrastText
}

const mainColor = (theme: Theme, color: PaletteColor | 'default') =>
  color === 'default' ? theme.palette.grey.A100 : theme.palette[color].main

const backgroundColor = (
  theme: Theme,
  color: PaletteColor | 'default',
  variant: IconBoxVariant,
): string => {
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

type Props = {
  color?: IconColor
  size?: IconSize
  variant?: IconBoxVariant
}

export const IconBox = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'size' && prop !== 'variant',
})<Props>(
  ({
    theme,
    color: optionalColor,
    variant: optionalVariant,
    size: optionalSize,
  }) => {
    const size: IconSize = optionalSize ?? 'medium'
    const defaultColor = 'default'
    const color: PaletteColor | 'default' = Array.isArray(optionalColor)
      ? defaultColor
      : typeof optionalColor === 'undefined'
      ? defaultColor
      : optionalColor
    const variant: IconBoxVariant = optionalVariant ?? 'default'
    return {
      marginRight: theme.spacing(3),
      color: fontColor(theme, color, variant),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO remove ts-ignore. This should work...
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
