import { FunctionComponent, ReactNode } from 'react'
import { ErrorPage } from '@src/pages/ErrorPage'
import { AccessDeniedPictogram } from '@src/icons'

type Props = {
  message: ReactNode
}

export const ForbiddenPage: FunctionComponent<Props> = (props) => (
  <ErrorPage
    pictogram={
      <AccessDeniedPictogram sx={{ height: 'inherit', width: 'auto' }} />
    }
    title="Forbidden"
    message={props.message ?? 'You are not authorized to display this page.'}
  />
)
