import { WrapperProps } from './types';

const WrapperBase = ({ children, ...props }: WrapperProps): JSX.Element => <div {...props}>{children && children}</div>;

export default WrapperBase;