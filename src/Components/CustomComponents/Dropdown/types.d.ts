import { DropDownProps } from "antd/lib/dropdown";

interface DropDownPropsTypes extends DropDownProps {}

export type DropDownProps = React.PropsWithChildren<DropDownPropsTypes>;
