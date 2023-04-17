import { BoxProps, styled } from '@mui/material'
import { AppContent } from '@src/layout/AppContent'
import { FunctionComponent } from 'react'

export const CenteredContent: FunctionComponent<BoxProps> = styled(AppContent)(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.palette.grey.A100,
    borderRadius: '10px',
  }),
)
