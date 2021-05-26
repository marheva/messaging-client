import { InputProps, TextAreaProps } from "antd/lib/input";

interface InputPropsTypes extends InputProps {}
interface TextAreaPropsTypes extends TextAreaProps {}

export type TextAreaProps = React.PropsWithChildren<TextAreaPropsTypes>;
export type InputProps = React.PropsWithChildren<InputPropsTypes>;
