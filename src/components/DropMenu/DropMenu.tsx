import { ButtonProps, Menu as MuiMenu, styled } from '@mui/material'
import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react'
import { Button } from '@mui/material'
import { ChevronDownIcon } from '@src/icons'

const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    // marginTop: theme.spacing(2),
    minWidth: 180,
    boxShadow: theme.shadows[12],
  },
}))

type DropMenuProps = ButtonProps & {
  label: ReactNode
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export const DropMenu: FunctionComponent<DropMenuProps> = (props) => {
  const { children, label, ...buttonProps } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = useMemo(
    () => (typeof props.open === 'undefined' ? Boolean(anchorEl) : props.open),
    [props.open, anchorEl],
  )
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    props.onOpen?.()
  }
  const handleClose = () => {
    setAnchorEl(null)
    props.onClose?.()
  }

  return (
    <>
      <Button
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<ChevronDownIcon />}
        {...buttonProps}
      >
        {label}
      </Button>
      <StyledMenu
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        BackdropProps={{
          invisible: true,
        }}
      >
        {children}
      </StyledMenu>
    </>
  )
}
