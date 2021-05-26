import React from 'react';
import { Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, FormItem } from '../../CustomComponents/Form';
import { SignInFormPropsTypes } from '../types';
import { ButtonPrimary } from '../../CustomComponents/Button';

const NAME_SPACES = {
    SIGN_IN_BUTTON_TITLE: 'Sign In'
}
function SignInForm({ name, onValuesChange, onFinish }: SignInFormPropsTypes): JSX.Element {
    return (
        <Form
            name={name}
            onValuesChange={(changedValues) => !!onValuesChange && onValuesChange(changedValues)}
            onFinish={({ email, password }) => !!onFinish && onFinish(email, password)}
        >
            <FormItem name="email" rules={[{ required: true }]}>
                <Input prefix={<MailOutlined />} />
            </FormItem>
            <FormItem name="password" rules={[{ required: true }]}>
                <Input prefix={<LockOutlined />} />
            </FormItem>
            <FormItem>
                <ButtonPrimary htmlType={'submit'}>
                    {NAME_SPACES.SIGN_IN_BUTTON_TITLE}
                </ButtonPrimary>
            </FormItem>
        </Form>
    );
}
export default SignInForm