import { FunctionComponent, PropsWithChildren, ReactNode } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Title } from '@src/components/Title/Title'

export type HeaderProps = {
  title?: ReactNode
  subtitle?: ReactNode
  icon?: ReactNode
}

export const AppHeader: FunctionComponent<PropsWithChildren<HeaderProps>> = (
  props,
) => (
  <AppBar
    position="static"
    color="transparent"
  >
    <Toolbar>
      <Box
        display="flex"
        flexDirection="column"
      >
        <Title icon={props.icon}>{props.title}</Title>
        <Typography
          variant="subtitle2"
          component="div"
        >
          {props.subtitle}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {props.children}
    </Toolbar>
  </AppBar>
)
