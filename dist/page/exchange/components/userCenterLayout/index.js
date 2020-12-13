var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react/index';
import { WrappedUserCenterLayoutCmp } from './styled';
let Assets = class Assets extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { userStore, activeItem, history } = this.props;
        const navBarItems = [{
                key: 'assets',
                value: "资产中心"
            }, {
                key: 'order',
                value: "交易记录"
            }, {
                key: 'security',
                value: "账户安全"
            }, {
                key: 'apiMgt',
                value: "API管理"
            }, {
                key: 'subAccount',
                value: "子账户"
            }, {
                key: 'account',
                value: "交易账户管理"
            }];
        return (React.createElement(WrappedUserCenterLayoutCmp, null,
            React.createElement(Row, { className: "navFrame", justify: "center" },
                React.createElement(Col, { span: 16, className: "navContent" },
                    React.createElement(Row, { className: "account" }, userStore.userInfo.email),
                    React.createElement("ul", { className: "navBar" }, navBarItems.map(item => React.createElement("li", { key: item.key, className: item.key == activeItem ? "active" : "", onClick: () => history.push(`/${item.key}`) }, item.value)))))));
    }
};
Assets = __decorate([
    inject('userStore'),
    observer,
    withRouter
], Assets);
export default Assets;
//# sourceMappingURL=index.js.map