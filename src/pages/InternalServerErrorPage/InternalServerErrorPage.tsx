import { FunctionComponent, ReactNode } from 'react'
import { ErrorPage } from '@src/pages/ErrorPage'
import { InternalServerErrorPictogram } from '@src/icons'

type Props = {
  message: ReactNode
  details: ReactNode
}

export const InternalServerErrorPage: FunctionComponent<Props> = (props) => (
  <ErrorPage
    pictogram={
      <InternalServerErrorPictogram sx={{ height: 'inherit', width: 'auto' }} />
    }
    title="Internal Server Error"
    message={props.message}
    details={props.details}
  />
)
