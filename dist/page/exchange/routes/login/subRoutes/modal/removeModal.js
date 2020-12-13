var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperRemoveModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let RemoveModal = class RemoveModal extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.submitRemove = () => {
            // this.props.history.push('/security/accountActivity/remove');
            this.props._close && this.props._close();
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Modal, { className: 'delAddrModal', visible: true, width: 420, maskClosable: true, closable: false, onCancel: this._onClose, footer: null },
                React.createElement(WrapperRemoveModalCmp, null,
                    React.createElement("div", null,
                        React.createElement("div", { className: "tips" }, "\u60A8\u7684\u5E10\u53F7\u5DF2\u88AB\u7981\u7528\uFF1F")),
                    React.createElement(Row, { justify: "center", className: "btn" },
                        React.createElement(Col, null,
                            React.createElement(Button, { onClick: this._onClose }, "\u53D6\u6D88"),
                            React.createElement(Button, { style: { marginLeft: 20 }, onClick: this.submitRemove }, "\u89E3\u7981")))))));
    }
};
RemoveModal = __decorate([
    inject('userStore'),
    observer
], RemoveModal);
export default RemoveModal;
//# sourceMappingURL=removeModal.js.map