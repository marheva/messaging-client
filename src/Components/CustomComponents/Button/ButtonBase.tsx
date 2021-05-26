import React from 'react';
import Button from 'antd/lib/button/button';
import { ButtonProps } from './types';

const ButtonBase = ({ children, ...props }: ButtonProps): JSX.Element => (
    <Button {...props}>{children && children}</Button>
);

export default ButtonBase;