import {
  ComponentProps,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from 'react'
import { AppBar, Box, styled, Typography, AppBarProps } from '@mui/material'

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
  const {
    title,
    subtitle,
    icon,
    children,
    actionsProps,
    className,
    ...appBarProps
  } = props
  const textColumm = icon ? '2' : '1'
  const actionsColumm = icon ? '3' : '3'
  return (
    <StyledAppBar
      className={`SbAppHeader-root ${className ?? ''}`}
      position="static"
      color="transparent"
      {...appBarProps}
    >
      {icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '42px',
            gridColumn: '1',
            gridRow: '1',
          }}
        >
          {icon}
        </Box>
      )}
      {title && (
        <Typography
          variant="h1"
          sx={{
            gridColumn: textColumm,
            gridRow: '1',
            m: 0,
          }}
        >
          {title}
        </Typography>
      )}
      <Box
        alignItems="center"
        display="flex"
        gap={4}
        className={`SbAppHeader-actions ${actionsProps?.className ?? ''}`}
        {...actionsProps}
        sx={{
          gridColumn: actionsColumm,
          gridRow: '1',
        }}
      >
        {children}
      </Box>
      {subtitle && (
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            color: 'text.secondary',
            gridColumn: `${textColumm}/ span 2`,
            gridRow: '2',
            ml: -3,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </StyledAppBar>
  )
}
