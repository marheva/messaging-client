import React from 'react';
import { Layout, LayoutContent, LayoutHeader, LayoutSider } from '../../../../Components/CustomComponents/Layout';
import Header from '../../Header';
import Main from '../../Main';
import Sider from '../../Sider';

interface LayoutProps {
    children?: JSX.Element | string | any;
}

function MainLayout({ children, ...props }: LayoutProps): JSX.Element {
    return (
        <Layout>
            <LayoutSider children={<Sider />} theme={'light'} style={{ borderRight: '1px solid #f0f0f0' }} />
            <Layout>
                <LayoutHeader children={<Header />} />
                <LayoutContent children={<Main children={children} />} />
            </Layout>
        </Layout>
    );
}

export default MainLayout
