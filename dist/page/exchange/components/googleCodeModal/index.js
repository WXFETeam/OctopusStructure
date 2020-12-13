var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const gaIcon = require("@webExchangeImgs/security/gaIcon.png");
let GAModal = class GAModal extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.submitGA = () => {
            console.log('ga');
            this.props._close && this.props._close();
        };
        this.onChange = () => {
            console.log('change');
        };
        this.changeCode = (e) => {
            let code = e.target.value;
            this.setState({
                gaCode: code
            });
            if (code && code.length == 6) {
                this._onClose();
            }
            console.log(this.state.gaCode, "gaCode");
        };
        this.state = {
            gaCode: ''
        };
    }
    render() {
        let code = "";
        code = this.state.gaCode;
        return (React.createElement(Modal, { className: 'delAddrModal', visible: true, maskClosable: true, onCancel: this._onClose, footer: false, closable: false, width: 518 },
            React.createElement(WrapperModalCmp, null,
                React.createElement("div", { className: "gaInfo" },
                    React.createElement("img", { className: "gaIcon", src: gaIcon }),
                    React.createElement("span", { className: "gaInfoText" }, "\u8BF7\u8F93\u5165\u8C37\u6B4C\u9A8C\u8BC1App\u4E2D\u76846\u4F4D\u6570\u9A8C\u8BC1\u7801")),
                React.createElement(Row, { className: "inputBox" },
                    React.createElement("input", { className: "input-number", maxLength: 6, value: code, onChange: this.changeCode.bind(this) }),
                    React.createElement(Col, { className: status || code.length > 0 ? "firstCol hasInput" : "firstCol" }, code.length > 0 ? code.substr(0, 1) : ''),
                    React.createElement(Col, { className: code.length > 1 ? "hasInput" : "" }, code.length > 1 ? code.substr(1, 1) : ''),
                    React.createElement(Col, { className: code.length > 2 ? "hasInput" : "" }, code.length > 2 ? code.substr(2, 1) : ''),
                    React.createElement(Col, { className: code.length > 3 ? "hasInput" : "" }, code.length > 3 ? code.substr(3, 1) : ''),
                    React.createElement(Col, { className: code.length > 4 ? "hasInput" : "" }, code.length > 4 ? code.substr(4, 1) : ''),
                    React.createElement(Col, { className: code.length > 5 ? "hasInput" : "" }, code.length > 5 ? code.substr(5, 1) : '')),
                React.createElement("div", { className: "loseGA" }, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1\uFF1F"))));
    }
};
GAModal = __decorate([
    inject('userStore'),
    observer
], GAModal);
export default GAModal;
//# sourceMappingURL=index.js.map