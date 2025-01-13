import type { Args, Meta, StoryObj } from '@storybook/react'
import { CenteredContent } from '@src/layout'
import { EmptySearchPictogram, SearchIcon } from '@src/icons'
import { Button, Container, Typography } from '@mui/material'
import { AppContainer } from '@src/layout'

const meta: Meta<typeof CenteredContent> = {
  title: 'Layout/CenteredContent',
  component: CenteredContent,
}

export default meta

type Story = StoryObj<typeof CenteredContent>

export const Basic: Story = {
  args: {
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
  },
  render: (args: Args) => (
    <AppContainer>
      <CenteredContent {...args} />
    </AppContainer>
  ),
}
