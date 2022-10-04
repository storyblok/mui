import { styled } from '@mui/material'
import { AppContent } from '@src/layout'

export const CenteredContent = styled(AppContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: theme.palette.grey.A100,
  borderRadius: '10px',
}))
