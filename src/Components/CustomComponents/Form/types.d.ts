import { FormProps, FormItemProps } from "antd/lib/form/Form";
export interface FormPropsTypes extends FormProps {
  children?: React.ReactNode;
  name?: string;
  rules?: FormItemProps;
}
export type FormProps = React.PropsWithChildren<FormPropsTypes>;
export type FormItemProps = React.PropsWithRef<FormPropsTypes, FormItemProps>;
