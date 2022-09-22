import { ComponentProps, FunctionComponent, ReactNode } from 'react'
import { Box } from '@mui/material'
import { AppHeader, HeaderProps } from '@src/layout/AppHeader/AppHeader'

type AppLayoutProps = HeaderProps & {
  header?: ReactNode
  children?: ReactNode
  headerActionsProps?: ComponentProps<typeof Box>
  containerProps?: ComponentProps<typeof Box>
}

export const AppLayout: FunctionComponent<AppLayoutProps> = (props) => (
  <Box
    className="SbAppLayout-root"
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
    }}
  >
    <AppHeader
      title={props.title}
      subtitle={props.subtitle}
      icon={props.icon}
      actionsProps={props.headerActionsProps}
    >
      {props.header}
    </AppHeader>
    <Box mt={10} />
    {props.children && (
      <Box
        {...props.containerProps}
        component="main"
        className={`SbAppLayout-main ${props.containerProps?.className ?? ''}`}
      >
        {props.children}
      </Box>
    )}
  </Box>
)
