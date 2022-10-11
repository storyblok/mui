import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import { Box, styled } from '@mui/material'
import { IconBox } from '@src/components/IconBox/IconBox'

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  borderRadius: theme.shape.borderRadius,
}))

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
type IconColor = PaletteColor | 'inherit' | 'default'
type IconSize = 'small' | 'medium' | 'large'

type Props = {
  icon: React.ReactNode
  color?: IconColor
  size?: IconSize
  children?: ReactNode
}

export const AnalyticalBox: FunctionComponent<Props> = (props) => (
  <Root>
    <IconBox
      color={props.color}
      size={props.size ?? 'large'}
    >
      {props.icon}
    </IconBox>
    {props.children && <TextContainer>{props.children}</TextContainer>}
  </Root>
)
