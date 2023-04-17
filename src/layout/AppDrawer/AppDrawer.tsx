import { FunctionComponent, ReactNode } from 'react'
import { Box, Divider, IconButton, styled, Typography } from '@mui/material'
import { drawerWidth } from '@src/theme'
import { CloseIcon } from '@src/icons'
import { SwipeableDrawer, SwipeableDrawerProps } from '@mui/material'

const drawerMargin = 4
const drawerPadding = 6

const DrawerMargin = styled(Box)(({ theme }) => ({
  padding: theme.spacing(drawerPadding),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.grey['50'],
}))

const Root = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: drawerWidth,
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      margin: 0,
      maxWidth: '100%',
      height: '100%',
      borderRadius: 0,
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(drawerMargin),
      maxWidth: `calc(100% - ${theme.spacing(drawerMargin * 2)})`,
      height: `calc(100% - ${theme.spacing(drawerMargin * 2)})`,
      borderRadius: theme.shape.borderRadius,
    },
  },
}))

export type AppDrawerProps = {
  children?: ReactNode
  header?: ReactNode
  footer?: ReactNode
} & SwipeableDrawerProps

export const AppDrawer: FunctionComponent<AppDrawerProps> = (props) => {
  const { header, footer, children, ...swipeableDrawerProps } = props
  return (
    <Root
      anchor="right"
      {...swipeableDrawerProps}
    >
      <DrawerMargin>
        <Typography variant="h2">&nbsp;{header}</Typography>
        <IconButton
          onClick={props.onClose}
          sx={{
            color: 'inherit',
            borderRadius: 1,
            position: 'absolute',
            top: (theme) => theme.spacing(4),
            right: (theme) => theme.spacing(4),
          }}
        >
          <CloseIcon />
        </IconButton>
      </DrawerMargin>
      <Divider />
      <Box
        sx={{
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            p: drawerPadding,
            flex: 1,
          }}
        >
          {children}
        </Box>
        <Divider />
        {footer && <DrawerMargin>{footer}</DrawerMargin>}
      </Box>
    </Root>
  )
}
