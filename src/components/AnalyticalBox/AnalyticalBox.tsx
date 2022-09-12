import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import { alpha, Box, styled, Theme } from '@mui/material'

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: '150px',
  color: 'inherit',
  borderRadius: theme.shape.borderRadius,
}))

const IconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'size',
})<{
  color?: IconColor
  size?: IconSize
}>(({ theme, color, size }) => ({
  marginRight: theme.spacing(3),
  color: isPaletteColor(color)
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO remove ts-ignore
      theme.palette[color].main
    : defaultColor(theme),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO remove ts-ignore. This should work...
  backgroundColor: alpha(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TODO remove ts-ignore
    isPaletteColor(color) ? theme.palette[color].main : defaultColor(theme),
    theme.palette.action.selectedOpacity,
  ),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: scalar(size) * 40,
  minWidth: scalar(size) * 40,
  fontSize: `${scalar(size) * 2}rem`,
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 2
      : '10px',
}))

const scalar = (size: IconSize | undefined): number => {
  switch (size) {
    case 'large':
      return 1.4
    default:
    case 'medium':
      return 1.2
    case 'small':
      return 1
  }
}

const isPaletteColor = (color: IconColor | undefined): color is PaletteColor =>
  typeof color !== 'undefined' && color !== 'default'

const defaultColor = (theme: Theme): string => theme.palette.secondary.main

const TextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

type PaletteColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
type IconColor = PaletteColor | 'default'
type IconSize = 'small' | 'medium' | 'large'

type Props = {
  icon: React.ReactNode
  color?: IconColor
  size?: IconSize
  children?: ReactNode
}

export const AnalyticalBox: FunctionComponent<Props> = (props) => (
  <Root>
    <IconContainer
      color={props.color}
      size={props.size}
    >
      {props.icon}
    </IconContainer>
    {props.children && <TextContainer>{props.children}</TextContainer>}
  </Root>
)
