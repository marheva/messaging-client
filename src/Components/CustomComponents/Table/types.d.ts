import { TableProps } from "antd/lib/table";

interface TablePropsTypes extends TableProps<any> {
  showHeader?: boolean;
  bordered?: boolean;
  rowSelection?: any;
}

export type TableProps = TablePropsTypes;
