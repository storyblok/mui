import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CenteredContent } from './CenteredContent'
import { EmptySearchPictogram, SearchIcon } from '../../icons'
import { Button, Container, Typography } from '@mui/material'
import { AppContainer } from '../AppContainer'

const Component = CenteredContent

export default {
  title: 'Layout/CenteredContent',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <AppContainer>
    <Component {...args}></Component>
  </AppContainer>
)

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <EmptySearchPictogram fontSize="pictogram" />
      <Typography variant="h1">Search</Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary' }}
      >
        A long description, a long description, a long description, a long
        description, a long description, a long description.
      </Typography>
      <Button
        startIcon={<SearchIcon />}
        color="secondary"
      >
        Search
      </Button>
    </Container>
  ),
}
