import React from 'react'
import { Spin } from 'antd'
import { SpinnerProps } from './types'

export default function SpinnerBase({
    ...props
}: SpinnerProps): JSX.Element {
    return (
        <Spin {...props} />
    )
}
