import { ComponentProps, FunctionComponent } from 'react'
import { Box } from '@mui/material'

export const AppContainer: FunctionComponent<ComponentProps<typeof Box>> = (
  props,
) => {
  const { className, sx, ...otherProps } = props
  return (
    <Box
      className={`SbAppContainer-root ${className ?? ''}`}
      sx={{
        flexGrow: 1,
        px: {
          xs: 4,
          sm: 8,
          md: 16,
        },
        py: {
          xs: 4,
          sm: 7,
          md: 9,
        },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: (theme) => theme.spacing(10),
        ...sx,
      }}
      {...otherProps}
    >
      {props.children}
    </Box>
  )
}
