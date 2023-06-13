import { SvgIcon, SvgIconProps } from '@mui/material'
import { ReactComponent as Logo } from "./../../Assets/hop-svgrepo-com.svg";
import React from 'react'

function Acorn(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Logo />
        </SvgIcon>
    )
}

export default Acorn
