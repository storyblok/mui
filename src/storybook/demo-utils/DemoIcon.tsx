import { FunctionComponent } from 'react'
import { StoryblokIcon } from '@src/icons'

export const DemoIcon: FunctionComponent = () => (
  <StoryblokIcon
    fontSize="inherit"
    sx={{
      padding: '20%',
      color: 'secondary.contrastText',
      background: ({ palette }) =>
        `linear-gradient(0deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
      borderRadius: 2,
    }}
  />
)
