import React from 'react'
import { Popover } from 'antd'
import { PopoverProps } from './types'

const PopoverBase = ({
    children,
    ...props
}: PopoverProps): JSX.Element => {
    return (
        <Popover {...props}>
            {!!children && children}
        </Popover>
    )
}

export default PopoverBase
