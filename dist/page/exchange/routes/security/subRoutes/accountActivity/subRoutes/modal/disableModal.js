var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Modal, message } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let DisableModal = class DisableModal extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.submitDisable = () => {
            let accountNumberRequest = {
                accountNumber: "0111",
                accountStatus: 0
            };
            ajax({
                url: 'security.disOrUpAccount',
                method: 'post',
                data: accountNumberRequest,
                callback(data) {
                    if (data.errNo == 0) {
                        message.success("禁用成功");
                    }
                    else {
                        message.error("禁用失败");
                    }
                }
            });
            this.props._close && this.props._close();
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Modal, { className: 'delAddrModal', visible: true, width: 420, maskClosable: true, closable: false, onCancel: this._onClose, footer: null },
                React.createElement(WrapperModalCmp, null,
                    React.createElement("div", null,
                        React.createElement("div", { className: "title" }, "\u786E\u8BA4\u8981\u7981\u7528\u8D26\u6237\u4E48\uFF1F"),
                        React.createElement("div", { className: "tips" }, "\u7981\u7528\u540E\uFF0C\u5927\u6982\u8981\u82B1\u4E03\u5230\u5341\u5929\u7684\u65F6\u95F4\u6FC0\u6D3B\u60A8\u7684\u8D26\u6237")),
                    React.createElement(Row, { justify: "center", className: "btn" },
                        React.createElement(Col, null,
                            React.createElement(Button, { onClick: this._onClose }, "\u53D6\u6D88"),
                            React.createElement(Button, { danger: true, style: { marginLeft: 20 }, onClick: this.submitDisable }, "\u7981\u7528")))))));
    }
};
DisableModal = __decorate([
    inject('userStore'),
    observer
], DisableModal);
export default DisableModal;
//# sourceMappingURL=disableModal.js.map