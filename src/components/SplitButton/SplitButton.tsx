import {FunctionComponent, ReactNode, useRef, useState} from "react";
import {ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Popper} from "@mui/material";
import Button from "@mui/material/Button";
import {ChevronDownIcon} from "@src/icons";
import Paper from "@mui/material/Paper";
import {ButtonTypeMap} from "@mui/material/Button/Button";


type OptionProps = {
    id?: string
    children?: ReactNode
    onClick?: () => React.MouseEventHandler<HTMLLIElement>
}

type DefaultButtonProps = OptionProps & { startIcon?: ReactNode, endIcon?: ReactNode }
type MenuItemProps = OptionProps

type Props = {
    buttonProps?: DefaultButtonProps
    menuItemProps?: MenuItemProps[]
} & Pick<ButtonTypeMap['props'], 'sx' | 'color' | 'variant' | 'disabled' | 'size'>

export const SplitButton: FunctionComponent<Props> = (props) => {
    const {buttonProps, menuItemProps, ...buttonGroupProps} = props
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLDivElement>(null)
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    }

    return (
        <>
            <ButtonGroup ref={anchorRef} aria-label="split button" {...buttonGroupProps}>
                <Button {...buttonProps} />
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ChevronDownIcon/>
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {menuItemProps?.map((option, index) => (
                                        <MenuItem
                                            key={option.id ?? index}
                                            {...option}
                                        />
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}