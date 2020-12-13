import React from "react";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import ExchangeHeader from 'webExchangeHeaderCmp';
const bizLayout = (WrappedComponent) => {
    return (props) => {
        return (React.createElement(Layout, null,
            React.createElement(ExchangeHeader, null),
            React.createElement(Content, { style: { height: 'calc(100vh - 56px)', backgroundColor: '#f5f5f5' } },
                React.createElement(WrappedComponent, Object.assign({}, props)))));
    };
};
export default bizLayout;
//# sourceMappingURL=bizLayout.js.map