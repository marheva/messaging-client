import { PopconfirmProps } from "antd/lib/popconfirm";

interface PopconfirmPropsTypes extends PopconfirmProps {
  cancelText?: JSX.Element | string;
  okText?: JSX.Element | string;
}

export type PopconfirmProps = React.PropsWithChildren<PopconfirmPropsTypes>;
