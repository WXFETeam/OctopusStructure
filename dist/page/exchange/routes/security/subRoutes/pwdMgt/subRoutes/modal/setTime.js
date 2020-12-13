var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Modal, Slider } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperSetTimeModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let SetTime = class SetTime extends React.Component {
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
        return (React.createElement("div", null,
            React.createElement(Modal, { className: 'delAddrModal', visible: true, width: 420, maskClosable: true, closable: false, onCancel: this._onClose, footer: null },
                React.createElement(WrapperSetTimeModalCmp, null,
                    React.createElement("div", null,
                        React.createElement("div", { className: "title" }, "\u786E\u8BA4\u60A8\u7684\u5BC6\u7801\u65F6\u6548\u8BBE\u7F6E"),
                        React.createElement("div", { className: "tips" }, "\u8BBE\u7F6E\u4E3A\u3010\u6BCF\u6B21\u63D0\u73B0\u90FD\u9700\u8981\u8F93\u5165\u5BC6\u7801\u3011\uFF1F")),
                    React.createElement("div", null,
                        React.createElement(Slider, { marks: marks, defaultValue: 66.66 })),
                    React.createElement(Row, { justify: "center", className: "btn" },
                        React.createElement(Col, null,
                            React.createElement(Button, { onClick: this._onClose }, "\u53D6\u6D88"),
                            React.createElement(Button, { style: { marginLeft: 20 }, onClick: this.submit }, "\u786E\u8BA4")))))));
    }
};
SetTime = __decorate([
    inject('userStore'),
    observer
], SetTime);
export default SetTime;
//# sourceMappingURL=setTime.js.map