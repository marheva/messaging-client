import React from 'react'
import { Layout } from 'antd';
import { LayoutSiderProps } from '../types';

const { Sider } = Layout;

function LayoutSiderBase({ children, ...props }: LayoutSiderProps): JSX.Element {
    return (
        <Sider {...props}>{!!children && children}</Sider>
    )
}

export default LayoutSiderBase;