import { CSSProperties } from "styled-components";
import { ButtonProps } from "antd/lib/button/button";

interface ButtonPropsTypes extends ButtonProps {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export type ButtonProps = React.PropsWithChildren<ButtonPropsTypes>;
