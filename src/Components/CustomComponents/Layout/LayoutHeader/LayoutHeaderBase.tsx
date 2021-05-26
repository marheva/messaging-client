import React from 'react';
import { Layout } from 'antd';
import { LayoutHeaderProps } from '../types';
const { Header } = Layout;

const LayoutHeaderBase = ({ children, ...props }: LayoutHeaderProps): JSX.Element => {
    return <Header {...props}>{children && children}</Header>;
}

export default LayoutHeaderBase;