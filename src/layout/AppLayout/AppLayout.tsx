import { ComponentProps, FunctionComponent, ReactNode } from 'react'
import { AppHeader, HeaderProps } from '@src/layout/AppHeader/AppHeader'
import { AppContainer } from '@src/layout/AppContainer'
import { AppContent } from '@src/layout/AppContent'

type AppLayoutProps = HeaderProps & {
  className?: string
  header?: ReactNode
  children?: ReactNode
  containerProps?: ComponentProps<typeof AppContainer>
  headerProps?: ComponentProps<typeof AppHeader>
  contentProps?: ComponentProps<typeof AppContent>
}

export const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  return (
    <AppContainer
      className={`SbAppLayout-root ${props.className ?? ''}`}
      {...props.containerProps}
    >
      <AppHeader
        title={props.title}
        subtitle={props.subtitle}
        icon={props.icon}
        {...props.headerProps}
      >
        {props.header}
      </AppHeader>
      {props.children && (
        <AppContent {...props.contentProps}>{props.children}</AppContent>
      )}
    </AppContainer>
  )
}
