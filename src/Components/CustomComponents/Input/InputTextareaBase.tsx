import React from 'react';
import Input from 'antd/lib/input';
import { TextAreaProps } from './types';
const { TextArea } = Input;

const InputTextareaBase = React.forwardRef<Input, TextAreaProps>((props, ref): JSX.Element => {
	return <TextArea {...props} ref={ref} />;
});

export default InputTextareaBase;
