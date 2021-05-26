import React from 'react';
import Input from 'antd/lib/input';
import { InputProps } from './types';

const InputBase = React.forwardRef<Input, InputProps>((props, ref): JSX.Element => {
	return <Input {...props} ref={ref} />;
});

InputBase.displayName = 'StyledInput';

export default InputBase;
