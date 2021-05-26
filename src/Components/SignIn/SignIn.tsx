import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/userReducer/actions';
import SignInForm from './components';
import SignInWrapper from './SignInWrapper';

function SignIn({ ...props }: MainPropsTypes): JSX.Element {
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });

    function onFinishForm(email: string, password: string) {
        dispatch(userLogin(email, password))
    }

    function handleFormChange(values: { email: string, password: string }) {
        Object.entries(values).forEach(([key, value]) => {
            setFormValues({ ...formValues, [key]: value });
        });
    };

    return (
        <SignInWrapper>
            <Row>
                <Col md={{ span: 8, offset: 8 }} lg={{ span: 4, offset: 10 }} >
                    <SignInForm name="basic" onValuesChange={handleFormChange} onFinish={onFinishForm} />
                </Col>
            </Row>
        </SignInWrapper>)

}
export default SignIn