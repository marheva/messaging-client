import React from 'react'
import { Table } from 'antd'
import { TableProps } from './types'

const TableBase = ({
    dataSource,
    pagination,
    bordered,
    columns,
    ...props
}: React.PropsWithRef<TableProps>): JSX.Element => {
    return (
        <Table dataSource={dataSource} pagination={pagination} columns={columns} {...props} />
    )
}

export default TableBase