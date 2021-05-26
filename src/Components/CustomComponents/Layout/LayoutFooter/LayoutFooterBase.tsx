import React from 'react';
import { Layout } from 'antd';
import { LayoutPropsTypes } from '../types';
const { Footer } = Layout;

const LayoutFooterBase = ({ children, ...props }: LayoutPropsTypes): JSX.Element => <Footer {...props}>{children && children}</Footer>;

export default LayoutFooterBase;