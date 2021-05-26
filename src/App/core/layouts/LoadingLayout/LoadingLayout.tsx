import React from 'react';
import { Spin } from 'antd';
import { Layout, LayoutContent } from '../../../../Components/CustomComponents/Layout';
import Main from '../../Main';

interface LoadingLayoutTypesProps {
    children?: JSX.Element | string | any;
}

function LoadingLayout({ children, ...props }: LoadingLayoutTypesProps): JSX.Element {
    return (
        <Layout>
            <LayoutContent children={<Main children={<Spin size='large' />} />} />
        </Layout>
    );
}

export default LoadingLayout;