import { Container, ContainerProps, styled } from '@mui/material'
import { ComponentProps, FunctionComponent } from 'react'

export const Root: FunctionComponent<ContainerProps> = styled(Container)(
  ({ theme }) => ({
    flexGrow: 1,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    // maxWidth: theme.breakpoints.values['xl'],
    [theme.breakpoints.up('xs')]: {
      padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
    },
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing(7)} ${theme.spacing(8)}`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(9)} ${theme.spacing(16)}`,
    },
  }),
)

export const AppContainer: FunctionComponent<
  ComponentProps<typeof Container>
> = (props) => (
  <Root
    maxWidth="xl"
    {...props}
  />
)
