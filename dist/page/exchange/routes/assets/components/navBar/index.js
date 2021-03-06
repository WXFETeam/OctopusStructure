var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { withRouter } from 'react-router-dom';
import { get, set } from 'lodash';
import { Row, Col } from 'antd';
import { WrappedNavBarCmp } from './styled';
let NavBar = class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.switchNav = (activeItem) => {
            this.setState({ activeItem });
            let subNav = common.getLS('subNav') || {};
            set(subNav, 'assets', activeItem);
            common.setLS('subNav', subNav);
            this.props.history.push(`/assets/${activeItem}`);
        };
        this.state = {
            activeItem: get(common.getLS('subNav'), 'assets', "asset")
        };
    }
    render() {
        const navBarItems = [{
                key: 'asset',
                value: "资产"
            }, {
                key: 'recharge',
                value: "充值"
            }, {
                key: 'withdraw',
                value: "提现"
            }, {
                key: 'record',
                value: "充提记录"
            }];
        let { activeItem } = this.state;
        return (React.createElement(WrappedNavBarCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { span: 16, className: "navContent" },
                    React.createElement("ul", { className: "navBar" }, navBarItems.map(item => React.createElement("li", { onClick: this.switchNav.bind(this, item.key), key: item.key, className: item.key == activeItem ? "active" : "" }, item.value)))))));
    }
};
NavBar = __decorate([
    withRouter
], NavBar);
export default NavBar;
//# sourceMappingURL=index.js.map