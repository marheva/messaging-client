import React from 'react'
import { Popconfirm } from 'antd'
import { PopconfirmProps } from './types'

const DEFAULT_CANCEL_TEXT = 'Cancel'
const DEFAULT_CONFIRM_TEXT = 'Confirm'

const PopconfirmBase = ({
    children,
    cancelText,
    okText,
    ...props
}: PopconfirmProps): JSX.Element => {

    return (
        <Popconfirm
            {...props}
            cancelText={cancelText ? cancelText : DEFAULT_CANCEL_TEXT}
            okText={okText ? okText : DEFAULT_CONFIRM_TEXT}
        >
            {!!children && children}
        </Popconfirm>
    )
}

export default PopconfirmBase
