var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Input, Button, Modal } from 'antd';
import { WrapperVerifyCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let VerifyModal = class VerifyModal extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.setInputStatus = (status) => {
            this.setState({
                inputFocus: status
            });
        };
        this.changeCode = (e) => {
            let code = e.target.value;
            this.setState({
                verifyCode: code
            });
        };
        this.getInputCodeDom = () => {
            let status = this.state.inputFocus;
            let code = this.state.verifyCode;
            return React.createElement(Row, { className: "inputBox" },
                React.createElement(Input, { className: "input-number", maxLength: 6, value: code, onChange: this.changeCode, onFocus: this.setInputStatus.bind(this, true), onBlur: this.setInputStatus.bind(this, false) }),
                React.createElement(Col, { className: status || code.length > 0 ? "firstCol hasInput" : "firstCol", span: 3 }, code.length > 0 ? code.substr(0, 1) : ''),
                React.createElement(Col, { className: code.length > 1 ? "hasInput" : "", span: 3 }, code.length > 1 ? code.substr(1, 1) : ''),
                React.createElement(Col, { className: code.length > 2 ? "hasInput" : "", span: 3 }, code.length > 2 ? code.substr(2, 1) : ''),
                React.createElement(Col, { className: code.length > 3 ? "hasInput" : "", span: 3 }, code.length > 3 ? code.substr(3, 1) : ''),
                React.createElement(Col, { className: code.length > 4 ? "hasInput" : "", span: 3 }, code.length > 4 ? code.substr(4, 1) : ''),
                React.createElement(Col, { className: code.length > 5 ? "hasInput" : "", span: 3 }, code.length > 5 ? code.substr(5, 1) : ''));
        };
        this.state = {
            verifyType: '1',
            verifyCode: '',
            inputFocus: false
        };
    }
    render() {
        const type = this.state.verifyType;
        return (React.createElement(Modal, { className: 'verifyModal', visible: true, centered: true, maskClosable: true, title: null, onCancel: this._onClose, footer: null },
            React.createElement(WrapperVerifyCmp, null,
                type === '1' ? React.createElement("div", { className: "frameItem sms" },
                    React.createElement("div", { className: "tit smsTit" }, "\u77ED\u4FE1\u9A8C\u8BC1"),
                    React.createElement("div", { className: "sendBox" },
                        React.createElement("p", { className: "content" },
                            "\u8BF7\u8F93\u5165\u60A8\u5728\u624B\u673A",
                            common.formatPhone('13612345414'),
                            "\u4E0A\u6536\u5230\u7684\u516D\u4F4D\u6570\u9A8C\u8BC1\u7801"),
                        React.createElement(Button, null, "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801")),
                    this.getInputCodeDom(),
                    React.createElement("div", { className: "pointBox" },
                        React.createElement("span", null,
                            "\u6536\u4E0D\u5230\u77ED\u4FE1\uFF1F",
                            React.createElement("a", null, "\u8BD5\u8BD5\u8BED\u97F3\u9A8C\u8BC1\u7801")),
                        React.createElement("a", { className: "forgetPhone" }, "\u4E22\u5931\u624B\u673A\uFF1F"))) : '',
                type === '2' ? React.createElement("div", { className: "frameItem ga" },
                    React.createElement("div", { className: "tit" }, "\u8C37\u6B4C\u9A8C\u8BC1"),
                    React.createElement("p", { className: "content" }, "\u8BF7\u8F93\u5165\u8C37\u6B4C\u9A8C\u8BC1App\u4E2D\u76846\u4F4D\u6570\u9A8C\u8BC1\u7801"),
                    this.getInputCodeDom(),
                    React.createElement("div", { className: "pointBox" },
                        React.createElement("a", { className: "forgetGa" }, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1\uFF1F"))) : '',
                type === '3' ? React.createElement("div", { className: "frameItem face" },
                    React.createElement("div", { className: "tit" }, "\u4EBA\u8138\u8BC6\u522B"),
                    React.createElement("p", { className: "faceP1" }, "\u8BF7\u5B8C\u6210\u4EBA\u8138\u8BA4\u8BC1"),
                    React.createElement("p", { className: "faceP2" }, "\u6211\u4EEC\u9700\u8981\u60A8\u7684\u4EBA\u8138\u4FE1\u606F\u6765\u786E\u4FDD\u662F\u60A8\u672C\u4EBA\u64CD\u4F5C"),
                    React.createElement(Button, { className: "confirmBlueBtn" }, "\u7ACB\u5373\u9A8C\u8BC1")) : '')));
    }
};
VerifyModal = __decorate([
    inject('userStore'),
    observer
], VerifyModal);
export default VerifyModal;
//# sourceMappingURL=index.js.map