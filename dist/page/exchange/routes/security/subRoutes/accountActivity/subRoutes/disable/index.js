var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Divider, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperDisableCmp } from './styled';
import DisableModal from '../modal/disableModal';
const disableIcon = require("@webExchangeImgs/security/disable.png");
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = () => {
            this.setState({ disableModal: true });
        };
        this.state = {
            disableModal: false,
            removeModal: false
        };
    }
    render() {
        const listData = [
            {
                label: "所有交易和登录功能都将禁用。",
                key: 0
            },
            {
                label: "您帐户的所有API密钥都将被删除。",
                key: 1
            },
            {
                label: "删除所有信任设备。",
                key: 2
            },
            {
                label: "所有待处理的提款将被取消。",
                key: 3
            },
            {
                label: "所有的当前委托都将被取消。",
                key: 4
            }
        ];
        return (React.createElement(WrapperDisableCmp, null,
            React.createElement(Form, { ref: (e) => this.formRef = e },
                React.createElement(Row, { justify: "center" },
                    React.createElement(Col, null,
                        React.createElement("div", { className: "disableBox" },
                            React.createElement("div", { className: "iconImg" },
                                React.createElement("div", null,
                                    React.createElement("img", { src: disableIcon }))),
                            React.createElement(Row, { justify: "center" },
                                React.createElement(Col, { className: "title" }, "\u7981\u7528\u8D26\u6237")),
                            React.createElement(Row, null,
                                React.createElement("div", { className: "content" },
                                    React.createElement("div", { className: "title" }, "\u7981\u7528\u60A8\u7684\u5E10\u6237\u5C06\u5BFC\u81F4\u4EE5\u4E0B\u60C5\u51B5:"),
                                    React.createElement("ul", { className: "message" }, listData.map(item => React.createElement("li", { key: item.key }, item.label))),
                                    React.createElement(Divider, null),
                                    React.createElement("div", { className: "tips" }, "\u5982\u679C\u60A8\u51B3\u5B9A\u91CD\u65B0\u6FC0\u6D3B\u60A8\u7684\u5E10\u6237\uFF0C\u8BF7\u5728\u7981\u7528\u4E24\u4E2A\u5C0F\u65F6\u540E\u767B\u5F55\u8D26\u6237\u8FDB\u884C\u89E3\u7981\u6D41\u7A0B"),
                                    React.createElement(Button, { className: "confirmBlueBtn", onClick: this.handleSubmit }, "\u786E\u8BA4"))))))),
            this.state.disableModal == true ? React.createElement(DisableModal, { _close: () => this.setState({ disableModal: false }) }) : ""));
    }
};
Index = __decorate([
    inject('userStore'),
    observer,
    renderBreadcrumbs
], Index);
export default Index;
//# sourceMappingURL=index.js.map