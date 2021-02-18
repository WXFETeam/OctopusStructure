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
let SetEveryTime = class SetEveryTime extends React.Component {
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
                        React.createElement("div", { className: "title" }, "\u786E\u8BA4\u60A8\u7684\u5BC6\u7801\u65F6\u6548\u8BBE\u7F6E"),
                        React.createElement("div", { className: "tips" }, "\u8BBE\u7F6E\u4E3A\u3010\u6BCF\u6B21\u63D0\u73B0\u90FD\u9700\u8981\u8F93\u5165\u5BC6\u7801\u3011\uFF1F")),
                    React.createElement(Row, { justify: "center", className: "btn" },
                        React.createElement(Col, null,
                            React.createElement(Button, { onClick: this._onClose }, "\u53D6\u6D88"),
                            React.createElement(Button, { style: { marginLeft: 20 }, onClick: this.submit }, "\u786E\u8BA4")))))));
    }
};
SetEveryTime = __decorate([
    inject('userStore'),
    observer
], SetEveryTime);
export default SetEveryTime;
//# sourceMappingURL=setEveryTime.js.map