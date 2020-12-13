var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let ConfirmModal = class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.submit = () => {
            this.props._close && this.props._close();
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Modal, { className: 'delAddrModal', visible: true, width: 420, maskClosable: true, closable: false, onCancel: this._onClose, footer: null },
                React.createElement(WrapperModalCmp, null,
                    React.createElement("div", null,
                        React.createElement("div", { className: "tips" }, "\u51BB\u7ED3\u8D26\u62372\u5C0F\u65F6\u4E4B\u5185\u65E0\u6CD5\u63D0\u4EA4\u89E3\u51BB\u7533\u8BF7")),
                    React.createElement(Row, { justify: "center", className: "btn" },
                        React.createElement(Col, null,
                            React.createElement(Button, { onClick: this.submit }, "\u6211\u77E5\u9053\u4E86")))))));
    }
};
ConfirmModal = __decorate([
    inject('userStore'),
    observer
], ConfirmModal);
export default ConfirmModal;
//# sourceMappingURL=confirmModal.js.map