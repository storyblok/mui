import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Container,
  Typography,
} from '@mui/material'
import { FunctionComponent, ReactNode } from 'react'
import { ChevronDownIcon, SquareErrorIcon } from '@src/icons'
import { CenteredContent } from '@src/layout'
import { AppContainer } from '@src/layout/AppContainer'

export type ErrorPageProps = {
  title?: ReactNode
  message?: ReactNode
  details?: ReactNode
  pictogram?: ReactNode
}

export const ErrorPage: FunctionComponent<ErrorPageProps> = (props) => (
  <AppContainer>
    <CenteredContent>
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {props.pictogram}
        {props.title && <Typography variant="h1">{props.title}</Typography>}
        {props.message && (
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary' }}
          >
            {props.message}
          </Typography>
        )}
        {props.details && <DetailsAlert message={props.details} />}
      </Container>
    </CenteredContent>
  </AppContainer>
)

const DetailsAlert: FunctionComponent<{
  message: ReactNode
}> = (props) => (
  // <Box/> is needed to remove top border from the accordion
  <Alert
    severity="error"
    variant="outlined"
    icon={<SquareErrorIcon />}
    sx={{
      mt: 5,
      '& .MuiAlert-message': {
        p: 0,
      },
    }}
  >
    <Accordion
      sx={{
        bgcolor: 'inherit',
        color: 'inherit',
      }}
      disableGutters
    >
      <AccordionSummary
        sx={{
          '& .MuiAccordionSummary-content': {
            my: 0,
          },
        }}
        expandIcon={<ChevronDownIcon />}
      >
        <AlertTitle>Details</AlertTitle>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{props.message}</Typography>
      </AccordionDetails>
    </Accordion>
  </Alert>
)
