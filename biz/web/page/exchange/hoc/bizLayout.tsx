import React from "react";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import ExchangeHeader from 'webExchangeHeaderCmp';

const bizLayout = (WrappedComponent: any) => {
    return (props) => {
        return (
            <Layout>
                <ExchangeHeader />
                <Content style={{ height: 'calc(100vh - 56px)', backgroundColor: '#f5f5f5' }}>
                    <WrappedComponent {...props} />
                </Content>
            </Layout>
        )
    }
}

export default bizLayout;
