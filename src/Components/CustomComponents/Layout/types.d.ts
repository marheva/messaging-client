import { LayoutProps } from "antd";
import { LayoutContextProps } from "antd/lib/layout/layout";
import { CSSProperties } from "styled-components";

interface LayoutPropsTypes extends LayoutProps {}
interface LayoutContentPropsTypes extends LayoutContextProps {}
interface LayoutHeaderPropsTypes {}
interface LayoutSiderPropsTypes {
  style?: CSSProperties;
}

export type LayoutProps = React.PropsWithChildren<LayoutPropsTypes>;
export type LayoutContentProps = React.PropsWithChildren<LayoutContentPropsTypes, LayoutProps>;
export type LayoutHeaderProps = React.PropsWithChildren<LayoutHeaderPropsTypes>;
export type LayoutSiderProps = React.PropsWithChildren<LayoutSiderPropsTypes>;
