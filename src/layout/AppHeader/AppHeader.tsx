import {
  ComponentProps,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from 'react'
import { AppBar, Box, styled, Typography } from '@mui/material'
import { AppBarProps } from '@mui/material/AppBar/AppBar'

export type AppHeaderProps = {
  title?: ReactNode
  subtitle?: ReactNode
  icon?: ReactNode
  actionsProps?: ComponentProps<typeof Box>
} & AppBarProps

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  display: 'grid',
  gap: `${theme.spacing(2)} ${theme.spacing(3)}`,
  gridTemplateColumns: 'repeat(1, min-content 1fr auto)',
  alignItems: 'center',
}))

export const AppHeader: FunctionComponent<PropsWithChildren<AppHeaderProps>> = (
  props,
) => {
  const textColumm = props.icon ? '2' : '1'
  const actionsColumm = props.icon ? '3' : '3'
  const { title, subtitle, icon, actionsProps, className, ...appBarProps } =
    props
  return (
    <StyledAppBar
      className={`SbAppHeader-root ${className ?? ''}`}
      position="static"
      color="transparent"
      {...appBarProps}
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
        className={`SbAppHeader-actions ${props.actionsProps?.className ?? ''}`}
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
    </StyledAppBar>
  )
}
