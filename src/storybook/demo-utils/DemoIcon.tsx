import { FunctionComponent } from 'react'
import { StoryblokIcon } from '@src/icons'
import { IconBox } from '@src/components/IconBox/IconBox'

export const DemoIcon: FunctionComponent = () => (
  <IconBox
    color="primary"
    sx={{
      background: ({ palette }) =>
        `linear-gradient(0deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
    }}
  >
    <StoryblokIcon />
  </IconBox>
)
