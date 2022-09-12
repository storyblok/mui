import { Grid } from '@mui/material'
import { IconComponent } from '@src/icons/iconComponent'
import * as Module from 'module'

export const IconsGrid = ({ iconModule }: { iconModule: Module }) => (
  <Grid
    container
    spacing={4}
    my={4}
  >
    {Object.entries(iconModule).map(([name, Icon]: [string, IconComponent]) => (
      <Grid
        key={name}
        item
        xs={12}
        sm={4}
        md={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Icon
          color="secondary"
          fontSize="large"
        />
        <code>
          {'<'}
          {name}
          {' />'}
        </code>
      </Grid>
    ))}
  </Grid>
)
