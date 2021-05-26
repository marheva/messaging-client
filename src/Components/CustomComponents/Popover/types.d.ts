import { PopoverProps } from "antd/lib/popover";

interface PopoverPropsTypes extends PopoverProps {}

export type PopoverProps = React.PropsWithChildren<PopoverPropsTypes>;
