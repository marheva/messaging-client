import React from 'react';
import { Layout } from 'antd';
import { LayoutContentProps } from '../types';
const { Content } = Layout;

const LayoutContentBase = ({ children, ...props }: LayoutContentProps): JSX.Element => {
    return <Content {...props}>{children && children}</Content>;
}

export default LayoutContentBase;