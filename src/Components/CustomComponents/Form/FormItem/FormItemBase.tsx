import React from 'react';
import Form from 'antd/lib/form';
import { FormItemProps } from '../types';
const { Item } = Form;

const FormItemBase = ({ children, ...props }: React.PropsWithRef<FormItemProps>): JSX.Element => (
	<Item {...props}>{children && children}</Item>
);

export default FormItemBase;
