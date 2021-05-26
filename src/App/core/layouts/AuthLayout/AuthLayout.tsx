import React from 'react';
import Main from '../../Main';
import Footer from '../../Footer';
import SignIn from '../../../../Components/SignIn';
import { Layout, LayoutContent, LayoutFooter } from '../../../../Components/CustomComponents/Layout';

interface LayoutProps {
  children?: JSX.Element | string | any;
}

function AuthLayout({ children, ...props }: LayoutProps): JSX.Element {
  return (
    <Layout><LayoutContent children={<Main children={!!children && children} />} /><LayoutFooter children={<Footer />} /></Layout>
  );
}

export default AuthLayout;
