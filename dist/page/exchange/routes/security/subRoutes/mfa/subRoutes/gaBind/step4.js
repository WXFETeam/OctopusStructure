var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Input, message } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';
let Step4 = class Step4 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = () => {
            let { smsCode, gaCode, pwd } = this.state;
            let gaKey = common.getLS('GA').secret;
            ajax({
                url: 'MFA.bindGoogleAuth',
                data: {
                    key: gaKey,
                    code: gaCode,
                    smsCode,
                    password: pwd
                },
                isFullData: true,
                callback: (data) => {
                    if (data.errNo == '0') {
                        message.success('已开通谷歌验证');
                        setTimeout(() => {
                            this.props.nextStep(4);
                            common.rmLS('GA');
                        }, 2000);
                    }
                }
            });
        };
        this.sendSMS = () => {
            ajax({
                url: 'common.sendSMS',
                data: { phone: '' },
                callback: (data) => {
                }
            });
        };
        this.showOrHidePwd = () => {
            this.setState({
                showOrHidePwd: !this.state.showOrHidePwd
            });
        };
        this.getInputCodeDom = (type) => {
            let code = '';
            if (type === 'sms') {
                code = this.state.smsCode;
            }
            else if (type === 'ga') {
                code = this.state.gaCode;
            }
            return React.createElement(Row, { className: "inputBox", style: { width: 380, margin: '0 auto' } },
                React.createElement("input", { className: "input-number", maxLength: 6, value: code, onChange: this.changeCode.bind(this, type) }),
                React.createElement(Col, { className: status || code.length > 0 ? "firstCol hasInput" : "firstCol", span: 3 }, code.length > 0 ? code.substr(0, 1) : ''),
                React.createElement(Col, { className: code.length > 1 ? "hasInput" : "", span: 3 }, code.length > 1 ? code.substr(1, 1) : ''),
                React.createElement(Col, { className: code.length > 2 ? "hasInput" : "", span: 3 }, code.length > 2 ? code.substr(2, 1) : ''),
                React.createElement(Col, { className: code.length > 3 ? "hasInput" : "", span: 3 }, code.length > 3 ? code.substr(3, 1) : ''),
                React.createElement(Col, { className: code.length > 4 ? "hasInput" : "", span: 3 }, code.length > 4 ? code.substr(4, 1) : ''),
                React.createElement(Col, { className: code.length > 5 ? "hasInput" : "", span: 3 }, code.length > 5 ? code.substr(5, 1) : ''));
        };
        this.changeCode = (type, e) => {
            let code = e.target.value;
            const codeType = this.state.codeType;
            if (type === 'sms') {
                this.setState({
                    smsCode: code
                });
            }
            else if (type === 'ga') {
                this.setState({
                    gaCode: code
                });
            }
        };
        this.changePwd = (e) => {
            let value = e.target.value;
            this.setState({
                pwd: value
            });
        };
        this.state = {
            smsCode: '',
            gaCode: '',
            pwd: '',
            codeType: '1',
            showOrHidePwd: true
        };
    }
    render() {
        return (React.createElement(Content, null,
            React.createElement("p", { className: 'stepTitle' }, "\u542F\u7528\u60A8\u7684Google\u8EAB\u4EFD\u9A8C\u8BC1\u5668"),
            React.createElement("div", { className: 'pwdWrapper' },
                React.createElement(Input, { type: this.state.showOrHidePwd ? "password" : "text", placeholder: '\u767B\u5F55\u5BC6\u7801', onChange: this.changePwd.bind(this) }),
                React.createElement("div", { onClick: this.showOrHidePwd, className: this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide" })),
            this.state.codeType == '1' &&
                React.createElement("div", null,
                    React.createElement("div", { className: "smsBox" },
                        React.createElement("p", { className: "smsTip" }, "\u77ED\u4FE1\u9A8C\u8BC1\u7801"),
                        React.createElement(Button, { onClick: this.sendSMS }, "\u53D1\u9001\u77ED\u4FE1")),
                    this.getInputCodeDom('sms'),
                    React.createElement("div", { className: "forgetPhone" },
                        React.createElement("span", null, "\u4E22\u5931\u624B\u673A?"))),
            React.createElement("div", { className: "smsBox", style: { marginTop: this.state.codeType == '2' ? 24 : 40 } },
                React.createElement("p", { className: "smsTip" }, "\u8C37\u6B4C\u9A8C\u8BC1\u7801")),
            this.getInputCodeDom('ga'),
            React.createElement("div", { className: 'btnWrapper' },
                React.createElement(Button, { className: "btn", type: "primary", onClick: this.handleSubmit }, "\u63D0\u4EA4")),
            React.createElement("p", { className: 'return', onClick: () => this.props.returnPage(4) }, "\u8FD4\u56DE\u4E0A\u4E00\u6B65")));
    }
};
Step4 = __decorate([
    inject('userStore'),
    observer
], Step4);
export default Step4;
//# sourceMappingURL=step4.js.map