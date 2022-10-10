import {
  ComponentProps,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export type HeaderProps = {
  title?: ReactNode
  subtitle?: ReactNode
  icon?: ReactNode
  actionsProps?: ComponentProps<typeof Box>
}

export const AppHeader: FunctionComponent<PropsWithChildren<HeaderProps>> = (
  props,
) => {
  const textColumm = props.icon ? '2' : '1'
  const actionsColumm = props.icon ? '3' : '3'
  return (
    <AppBar
      className="SbAppHeader-root"
      position="static"
      color="transparent"
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'grid',
          gap: (theme) => `${theme.spacing(2)} ${theme.spacing(3)}`,
          gridTemplateColumns: 'repeat(1, min-content 1fr auto)',
        }}
      >
        {props.icon && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '42px',
              gridColumn: '1',
              gridRow: '1',
            }}
          >
            {props.icon}
          </Box>
        )}
        {props.title && (
          <Typography
            variant="h1"
            sx={{
              gridColumn: textColumm,
              gridRow: '1',
              margin: 0,
            }}
          >
            {props.title}
          </Typography>
        )}
        <Box
          alignItems="center"
          display="flex"
          gap={4}
          className={`SbAppHeader-actions ${
            props.actionsProps?.className ?? ''
          }`}
          {...props.actionsProps}
          sx={{
            gridColumn: actionsColumm,
            gridRow: '1',
          }}
        >
          {props.children}
        </Box>
        {props.subtitle && (
          <Typography
            variant="subtitle2"
            component="p"
            sx={{
              color: 'text.secondary',
              gridColumn: `${textColumm}/ span 2`,
              gridRow: '2',
            }}
          >
            {props.subtitle}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  )
}
