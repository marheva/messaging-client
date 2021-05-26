import { FormItemProps } from "antd";
import { FormProps } from "antd/lib/form/Form";
interface SignInPropsTypes {}

interface SignInFormPropsTypes extends FormProps {
  onValuesChange?: (values: { email: string; password: string }) => void;
  onFinish?: (email: string, password: string) => void;
}
