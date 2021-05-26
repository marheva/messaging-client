import React from 'react';
import Form from 'antd/lib/form/Form';
import { FormProps } from './types';

const FormBase = ({ children, ...props }: FormProps): JSX.Element => (
	<Form {...props}>{children && children}</Form>
);

export default FormBase;
