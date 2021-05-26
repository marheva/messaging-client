import React from 'react';
import { Layout } from 'antd';
import { LayoutProps } from '../types';

const LayoutBase = ({ children, ...props }: LayoutProps): JSX.Element => <Layout {...props}>{children && children}</Layout>;

export default LayoutBase;