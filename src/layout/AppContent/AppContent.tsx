import { ComponentProps, FunctionComponent } from 'react'
import { Box } from '@mui/material'

export const AppContent: FunctionComponent<ComponentProps<typeof Box>> = (
  props,
) => {
  const { className, ...otherProps } = props
  return (
    <Box
      component="main"
      className={`SbAppContent-root ${className ?? ''}`}
      {...otherProps}
    >
      {props.children}
    </Box>
  )
}
