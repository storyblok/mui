import { CheckMarkIcon, DotIcon, IconComponent, MinusIcon } from '@src/icons'
import { SvgIcon } from '@mui/material'
import { ComponentProps } from 'react'

export const UncheckedCheckboxIcon: IconComponent = ({
  sx,
  ...props
}: ComponentProps<IconComponent>) => (
  <SvgIcon
    sx={{
      borderRadius: '3px',
      border: `1px solid currentColor`,
      ...sx,
    }}
    {...props}
  />
)

export const CheckedCheckboxIcon: IconComponent = ({
  sx,
  ...props
}: ComponentProps<IconComponent>) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    inheritViewBox
    sx={{
      borderRadius: '3px',
      bgcolor: 'currentColor',
      ...sx,
    }}
    {...props}
  >
    <CheckMarkIcon
      sx={{
        color: 'primary.contrastText',
      }}
    />
  </SvgIcon>
)

export const IndeterminateCheckboxIcon: IconComponent = ({
  sx,
  ...props
}: ComponentProps<IconComponent>) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    inheritViewBox
    sx={{
      borderRadius: '3px',
      bgcolor: 'currentColor',
      ...sx,
    }}
    {...props}
  >
    <MinusIcon
      sx={{
        color: 'primary.contrastText',
      }}
    />
  </SvgIcon>
)

export const UncheckedRadioIcon: IconComponent = ({
  sx,
  ...props
}: ComponentProps<IconComponent>) => (
  <SvgIcon
    sx={{
      borderRadius: '50%',
      border: `1px solid currentColor`,
      ...sx,
    }}
    {...props}
  />
)

export const CheckedRadioIcon: IconComponent = ({
  sx,
  ...props
}: ComponentProps<IconComponent>) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    inheritViewBox
    sx={{
      borderRadius: '50%',
      bgcolor: 'currentColor',
      ...sx,
    }}
    {...props}
  >
    <DotIcon
      sx={{
        color: 'primary.contrastText',
      }}
    />
  </SvgIcon>
)
