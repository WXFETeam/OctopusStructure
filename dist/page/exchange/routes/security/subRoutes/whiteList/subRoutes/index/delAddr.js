var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let DelAddr = class DelAddr extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.delAddrBtn = () => {
            console.log('del');
            this.props._close && this.props._close();
        };
    }
    render() {
        let coinType = this.props.record && this.props.record.coinType ? this.props.record.coinType : '';
        let addr = this.props.record && this.props.record.addr ? this.props.record.addr : '';
        return (React.createElement(Modal, { className: 'delAddrModal', visible: true, maskClosable: true, closable: false, onCancel: this._onClose, width: 420, footer: false },
            React.createElement(WrapperModalCmp, null,
                React.createElement("p", { className: 'delTitle' }, "\u786E\u8BA4\u5C06\u4EE5\u4E0B\u5730\u5740\u4ECE\u767D\u540D\u5355\u4E2D\u79FB\u9664\u4E48\uFF1F"),
                React.createElement("p", { className: 'info' },
                    React.createElement("span", { className: "infoName" }, "\u5E01\u79CD\uFF1A"),
                    coinType),
                React.createElement("p", { className: 'info' },
                    React.createElement("span", { className: "infoName" }, "\u5730\u5740\uFF1A"),
                    addr),
                React.createElement("div", { className: "modalButtonBox" },
                    React.createElement(Button, { key: 'cancel', onClick: this._onClose }, "\u53D6\u6D88"),
                    React.createElement(Button, { key: 'delete', onClick: this.delAddrBtn }, "\u5220\u9664")))));
    }
};
DelAddr = __decorate([
    inject('userStore'),
    observer
], DelAddr);
export default DelAddr;
//# sourceMappingURL=delAddr.js.map