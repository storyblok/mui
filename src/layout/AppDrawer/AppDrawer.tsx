import {FunctionComponent, ReactNode} from "react";
import {Box, Divider, IconButton, styled, Typography, useTheme} from "@mui/material";
import {drawerWidth} from "@src/theme";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {CloseIcon} from "@src/icons";

const drawerMargin = 4;
const drawerPadding = 6;

const DrawerMargin = styled(Box)(({theme}) => ({
    padding: theme.spacing(drawerPadding),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.grey["50"],
}))

export const AppDrawer: FunctionComponent<{
    open?: boolean
    onClose?: () => void
    onOpen?: () => void
    children?: ReactNode
    header?: ReactNode
    footer?: ReactNode
}> = (props) => {
    const theme = useTheme()
    return (
        // @ts-ignore
        <SwipeableDrawer
            anchor="right"
            open={props.open ?? false}
            onClose={() => props.onClose?.()}
            onOpen={() => props.onOpen?.()}
            PaperProps={{
                sx: {
                    width: drawerWidth,
                    overflow: 'hidden',
                    m: {
                        xs: 0,
                        sm: drawerMargin,
                    },
                    maxWidth: {
                        xs: '100%',
                        sm: `calc(100% - ${theme.spacing(drawerMargin * 2)})`,
                    },
                    height: {
                        xs: '100%',
                        sm: `calc(100% - ${theme.spacing(drawerMargin * 2)})`,
                    },
                    borderRadius: {
                        xs: 0,
                        sm: 1,
                    },
                }
            }}
        >
            <DrawerMargin>
                <Typography variant="h2">
                    &nbsp;{props.header}
                </Typography>
                <IconButton
                    onClick={props.onClose}
                    sx={{
                        color: 'inherit',
                        borderRadius: 1,
                        position: 'absolute',
                        top: theme.spacing(4),
                        right: theme.spacing(4),
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DrawerMargin>
            <Divider/>
            <Box sx={{
                overflowY: 'auto',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    p: drawerPadding,
                    flex: 1,
                }}>
                    {props.children}
                </Box>
                <Divider/>
                {props.footer &&
                    (<DrawerMargin>
                            {props.footer}
                        </DrawerMargin>
                    )}
            </Box>
        </SwipeableDrawer>
    )
}