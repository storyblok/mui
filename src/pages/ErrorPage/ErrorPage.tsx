import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AlertTitle, Box,
    Container, styled,
    Typography
} from "@mui/material";
import {FunctionComponent, ReactNode} from "react";
import {ChevronDownIcon, SquareErrorIcon} from "@src/icons";

export type ErrorPageProps = {
    title: ReactNode
    message: ReactNode
    details?: ReactNode
    pictogram?: ReactNode
}

const Root = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: theme.breakpoints.values.sm,
}))

const PictogramContainer = styled(Box)({
    width: 'auto',
    height: '120px',
})

export const ErrorPage: FunctionComponent<ErrorPageProps> = (props) => (
    <Root>
        <PictogramContainer>
            {props.pictogram}
        </PictogramContainer>
        <Typography
            variant="h1"
        >
            {props.title}
        </Typography>
        <Typography
            variant="body1"
            sx={{color: 'text.secondary'}}
        >
            {props.message}
        </Typography>
        {props.details && (
            <DetailsAlert message={props.details}/>
        )}
    </Root>
)

const DetailsAlert: FunctionComponent<{
    message: ReactNode
}> = (props) => (
    // <Box/> is needed to remove top border from the accordion
    <Alert
        severity="error"
        variant="outlined"
        icon={<SquareErrorIcon/>}
        sx={{
            mt: 5,
            '& .MuiAlert-message': {
                p: 0,
            },
        }}
    >
        <Accordion
            sx={{
                bgcolor: 'inherit',
                color: 'inherit',
            }}
            disableGutters
        >
            <AccordionSummary
                sx={{
                    '& .MuiAccordionSummary-content': {
                        my: 0,
                    },
                }}
                expandIcon={<ChevronDownIcon/>}
            >
                <AlertTitle>Details</AlertTitle>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    {props.message}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Alert>
)