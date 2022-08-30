import {FunctionComponent} from "react";
import {ErrorPage} from "@src/pages/ErrorPage";
import {NotFoundPictogram} from "@src/icons";

export const NotFoundPage: FunctionComponent = () => (
    <ErrorPage
        title="Page not found"
        message="The page you are looking for does not exist."
        pictogram={<NotFoundPictogram sx={{height: 'inherit', width: 'auto'}}/>}
    />
)