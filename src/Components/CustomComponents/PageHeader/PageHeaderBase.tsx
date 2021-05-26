import React from 'react'
import { PageHeader } from 'antd'
import { PageHeaderProps } from './types'


export default function PageHeaderBase({
    ...props
}: PageHeaderProps): JSX.Element {
    return (
        <PageHeader {...props} />
    )
}
