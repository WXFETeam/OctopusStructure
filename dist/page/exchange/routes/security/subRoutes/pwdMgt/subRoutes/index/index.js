var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Card, Divider, Radio } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
import SetEveryTime from '../modal/setEveryTime';
import SetTime from '../modal/setTime';
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (e) => {
            if (e.target.value == 1) {
                this.setState({
                    setEveryTimeModal: true,
                });
            }
            else if (e.target.value == 2) {
                this.setState({
                    setTimeModal: true,
                });
            }
        };
        this.state = {
            setEveryTimeModal: false,
            setTimeModal: false
        };
    }
    render() {
        const { history } = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            fontSize: '14px',
            color: 'rgba(50,54,62,1)'
        };
        const marks = {
            0: {
                style: {
                    color: '#00A0D2',
                },
                label: React.createElement("strong", null, "0h"),
            },
            33.33: {
                style: {
                    color: '#00A0D2',
                },
                label: React.createElement("strong", null, "2h"),
            },
            66.66: {
                style: {
                    color: '#00A0D2',
                },
                label: React.createElement("strong", null, "4h"),
            },
            100: {
                style: {
                    color: '#00A0D2',
                },
                label: React.createElement("strong", null, "6h"),
            },
        };
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { className: "title" }, "\u5BC6\u7801\u7BA1\u7406")),
            React.createElement(Row, { justify: "center", className: "content" },
                React.createElement(Card, { style: { width: 1260 } },
                    React.createElement(Row, { justify: "space-between" },
                        React.createElement(Col, null,
                            React.createElement("div", { className: "pwTitle" }, "\u767B\u5F55\u5BC6\u7801"),
                            React.createElement("div", { className: "pwIntro" }, "\u8D44\u91D1\u5BC6\u7801\u5C06\u7528\u4E8E\u8D26\u53F7\u767B\u5F55\u3001\u8D26\u53F7\u5B89\u5168\u8BBE\u7F6E\u9A8C\u8BC1")),
                        React.createElement(Button, { onClick: () => {
                                this.props.history.push({
                                    pathname: '/security/pwdMgt/login',
                                });
                            } }, "\u4FEE\u6539")),
                    React.createElement(Divider, null),
                    React.createElement(Row, { justify: "space-between" },
                        React.createElement(Col, null,
                            React.createElement("div", { className: "pwTitle" }, "\u8D44\u91D1\u5BC6\u7801"),
                            React.createElement("div", { className: "pwIntro" }, "\u8D44\u91D1\u5BC6\u7801\u5C06\u7528\u4E8E\u8D44\u4EA7\u8F6C\u51FA"),
                            React.createElement("div", null,
                                React.createElement(Radio.Group, { onChange: this.onChange },
                                    React.createElement(Radio, { style: radioStyle, value: 1 }, "\u6BCF\u6B21\u4EA4\u6613\u90FD\u9700\u8981\u8F93\u5165\u5BC6\u7801"),
                                    React.createElement(Radio, { style: radioStyle, value: 2 }, "\u5BC6\u7801\u6821\u9A8C\u6B63\u786E\u540E\u57282\u5C0F\u65F6\u5185\u4E0D\u518D\u9A8C\u8BC1")))),
                        React.createElement(Button, { onClick: () => {
                                this.props.history.push({
                                    pathname: '/security/pwdMgt/financial',
                                });
                            } }, "\u8BBE\u7F6E")),
                    React.createElement(Divider, null),
                    React.createElement(Row, { justify: "space-between" },
                        React.createElement(Col, null,
                            React.createElement("div", { className: "pwTitle" }, "\u4EA4\u6613\u5BC6\u7801"),
                            React.createElement("div", { className: "pwIntro" }, "\u4EA4\u6613\u5BC6\u7801\u5C06\u7528\u4E8E\u6570\u5B57\u8D27\u5E01\u4EA4\u6613"),
                            React.createElement("div", null,
                                React.createElement(Radio.Group, { onChange: this.onChange },
                                    React.createElement(Radio, { style: radioStyle, value: 1 }, "\u6BCF\u6B21\u4EA4\u6613\u90FD\u9700\u8981\u8F93\u5165\u5BC6\u7801"),
                                    React.createElement(Radio, { style: radioStyle, value: 2 }, "\u5BC6\u7801\u6821\u9A8C\u6B63\u786E\u540E\u57282\u5C0F\u65F6\u5185\u4E0D\u518D\u9A8C\u8BC1")))),
                        React.createElement(Button, { onClick: () => {
                                this.props.history.push({
                                    pathname: '/security/pwdMgt/exchange',
                                });
                            } }, "\u8BBE\u7F6E")))),
            this.state.setEveryTimeModal == true ? React.createElement(SetEveryTime, { _close: () => this.setState({ setEveryTimeModal: false }) }) : "",
            this.state.setTimeModal == true ? React.createElement(SetTime, { _close: () => this.setState({ setTimeModal: false }) }) : ""));
    }
};
Index = __decorate([
    inject('userStore'),
    observer,
    renderBreadcrumbs
], Index);
export default Index;
//# sourceMappingURL=index.js.map