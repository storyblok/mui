import {IconButton, Pagination, PaginationRenderItemParams} from "@mui/material";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DotIcon,
    MenuHorizontalIcon,
    StatusIcon
} from "@src/icons";
import {ReactNode} from "react";


const PaginationItem: (params: PaginationRenderItemParams) => ReactNode = (params) => {
    const {type, page, ...props} = params
    const {color, size, selected} = params
    const iconProps = {
        ...props,
        color: color === 'standard' ? 'secondary' : color,
    } as const
    switch (type){
        case "page":
            return <IconButton {...iconProps} >
                {
                    selected ? (
                        <StatusIcon fontSize={size} sx={{color: 'action.main'}} />
                    ) : (
                        <DotIcon fontSize={size} sx={{color: 'grey.200'}}/>
                    )
                }
            </IconButton>
        case "start-ellipsis":
        case "end-ellipsis":
            return <IconButton {...iconProps} disabled>
                <MenuHorizontalIcon fontSize={size}/>
            </IconButton>
        case "first":
            return <IconButton {...iconProps}>
                <ChevronLeftIcon fontSize={size} sx={{position: 'absolute', left: '0.1em'}}/>
                <ChevronLeftIcon fontSize={size} />
            </IconButton>
        case "last":
            return <IconButton {...iconProps}>
                <ChevronRightIcon fontSize={size}/>
                <ChevronRightIcon fontSize={size} sx={{position: 'absolute', right: '0.1em'}}/>
            </IconButton>
        case "previous":
            return <IconButton {...iconProps}>
                <ChevronLeftIcon fontSize={size}/>
            </IconButton>
        case "next":
            return <IconButton {...iconProps}>
                <ChevronRightIcon fontSize={size}/>
            </IconButton>
    }
}

export const CarouselPagination: typeof Pagination = (props) => (
    <Pagination
        renderItem={PaginationItem}
        {...props}
    />
)