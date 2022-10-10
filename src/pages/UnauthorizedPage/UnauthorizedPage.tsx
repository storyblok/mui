import { FunctionComponent, ReactNode } from 'react'
import { ErrorPage } from '@src/pages/ErrorPage'
import { AccessDeniedPictogram } from '@src/icons'

type Props = {
  message?: ReactNode
}

export const UnauthorizedPage: FunctionComponent<Props> = (props) => (
  <ErrorPage
    pictogram={<AccessDeniedPictogram fontSize="pictogram" />}
    title="Unauthorized"
    message={props.message ?? 'You are not authenticated.'}
  />
)
