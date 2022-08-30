import {Grid} from "@mui/material";

export const IconsGrid = ({iconModule}: any) => (
    <Grid container spacing={4} my={4}>
        {Object.entries(iconModule).map(([name, Icon] : [string, any]) => (
            <Grid
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
                <Icon color="secondary" fontSize="large"/>
                <code>{'<'}{name}{' />'}</code>
            </Grid>
        ))}
    </Grid>
)
