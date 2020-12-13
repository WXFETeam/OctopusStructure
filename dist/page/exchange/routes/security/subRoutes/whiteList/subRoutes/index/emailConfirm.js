var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const originmail = require("@webExchangeImgs/mail/originmail.png");
let EmailConfirm = class EmailConfirm extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = () => {
            this.props._close && this.props._close();
        };
    }
    render() {
        return (React.createElement(Modal, { visible: true, centered: true, maskClosable: true, width: 518, onCancel: this._onClose, footer: false, closable: false },
            React.createElement(WrapperModalCmp, null,
                React.createElement("section", { className: "emailModal" },
                    React.createElement("img", { className: "emailIcon", src: originmail }),
                    React.createElement("div", { className: "emailOk" }, "\u9700\u8981\u90AE\u4EF6\u786E\u8BA4"),
                    React.createElement("div", { className: "center", style: { fontSize: 14, marginBottom: "20px" } }, "\u6211\u4EEC\u5DF2\u5411\u5982\u4E0B\u90AE\u7BB1\u53D1\u9001\u4E86\u4E00\u5C01\u90AE\u4EF6***@**.com\uFF0C\u8BF7\u6309\u7167\u90AE\u4EF6\u5185\u5BB9\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002"),
                    React.createElement("a", { className: "center", style: { fontSize: 14, color: '#00A0D2' } }, "\u53BB\u90AE\u7BB1\u786E\u8BA4 >>"),
                    React.createElement("div", { className: "resendEmail" },
                        "\u672A\u6536\u5230\u90AE\u4EF6\uFF1F",
                        React.createElement("a", null, "\u91CD\u65B0\u53D1\u9001"))))));
    }
};
EmailConfirm = __decorate([
    inject('userStore'),
    observer
], EmailConfirm);
export default EmailConfirm;
//# sourceMappingURL=emailConfirm.js.map