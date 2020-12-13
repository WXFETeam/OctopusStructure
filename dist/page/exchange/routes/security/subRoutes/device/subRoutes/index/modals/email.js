var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Modal } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperEmailCmp } from './styled';
const originmail = require("@webExchangeImgs/mail/originmail.png");
let Email = class Email extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancel = () => {
            this.props._close();
        };
        this.state = {
            display: 'down'
        };
    }
    clickArrow(tag) {
        this.setState({
            display: tag,
        });
    }
    render() {
        const { history } = this.props;
        return (React.createElement(Modal, { visible: true, centered: true, maskClosable: true, closable: false, title: null, onCancel: this.handleCancel, footer: null, width: 518 },
            React.createElement(WrapperEmailCmp, null,
                React.createElement(Row, { justify: "center" },
                    React.createElement(Col, { className: "wrapper" },
                        React.createElement(Row, { style: { paddingTop: 36 }, justify: "center" },
                            React.createElement("img", { className: "origin-mail", src: originmail, alt: "" })),
                        React.createElement(Row, { style: { paddingTop: "30px" }, justify: "center" },
                            React.createElement(Col, { className: "title" }, "\u9700\u8981\u90AE\u4EF6\u786E\u8BA4")),
                        React.createElement(Row, { style: { padding: "32px 16px 0", textAlign: 'center' } },
                            React.createElement(Col, null, "\u6211\u4EEC\u76D1\u6D4B\u5230\u60A8\u5728\u4E00\u53F0\u65B0\u7684\u8BBE\u5907\u4E0A\u767B\u5F55\uFF0C\u4E3A\u4FDD\u8BC1\u8D26\u6237\u5B89\u5168\uFF0C\u5DF2\u5411\u5982\u4E0B\u90AE\u7BB1\u53D1\u9001\u4E86\u4E00\u5C01\u90AE\u4EF6***@***.com\uFF0C\u8BF7\u6309\u7167\u90AE\u4EF6\u5185\u5BB9\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002 ")),
                        React.createElement(Row, { style: { paddingTop: "15px" }, justify: "center" },
                            React.createElement(Button, { type: "link", className: 'link' }, "\u53BB\u90AE\u7BB1\u786E\u8BA4 >>")),
                        React.createElement(Row, { style: { paddingTop: "20px" }, justify: "center" }),
                        React.createElement(Row, { style: { paddingTop: "20px", borderTop: '1px solid #E6E6E6' }, justify: "center", align: "middle" },
                            React.createElement("span", null, "\u672A\u6536\u5230\u90AE\u4EF6\uFF1F"),
                            React.createElement(Button, { type: "link", className: 'link' }, "\u91CD\u65B0\u53D1\u9001")))))));
    }
};
Email = __decorate([
    inject('userStore'),
    observer
], Email);
export default Email;
//# sourceMappingURL=email.js.map