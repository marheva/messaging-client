import React from 'react'
import { Dropdown } from 'antd'
import { DropDownProps } from './types'

const DropdownBase = ({
    children,
    ...props
}: DropDownProps): JSX.Element => (
    <Dropdown {...props}>{!!children && children}</Dropdown>
)

export default DropdownBase
