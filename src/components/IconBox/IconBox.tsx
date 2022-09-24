import { alpha, Box, styled, Theme } from '@mui/material'

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
      return '2rem'
    case 'medium':
      return '1.4rem'
    case 'small':
      return '1.4rem'
  }
}

const fontColor = (
  theme: Theme,
  color: PaletteColor,
  size: IconSize,
): string => {
  const paletteColor = theme.palette[color]
  switch (size) {
    case 'small':
    case 'medium':
      return paletteColor.contrastText
    case 'large':
      return paletteColor.main
  }
}

const backgroundColor = (
  theme: Theme,
  color: PaletteColor,
  size: IconSize,
): string => {
  const paletteColor = theme.palette[color]
  switch (size) {
    case 'small':
    case 'medium':
      return paletteColor.main
    case 'large':
      return alpha(paletteColor.main, theme.palette.action.selectedOpacity)
  }
}

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
}

export const IconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'size',
})<Props>(({ theme, color: optionalColor, size: optionalSize }) => {
  const size: IconSize = optionalSize ?? 'medium'
  const color: PaletteColor = optionalColor ?? 'primary'
  return {
    marginRight: theme.spacing(3),
    color: fontColor(theme, color, size),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TODO remove ts-ignore. This should work...
    backgroundColor: backgroundColor(theme, color, size),
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
  }
})
