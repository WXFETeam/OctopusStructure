var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Select, Input, message } from 'antd';
import { WrapperPhoneCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const { Option } = Select;
let PhoneBind = class PhoneBind extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = () => {
            let { gaCode, smsCode } = this.state;
            ajax({
                url: 'MFA.mfaModify',
                data: {
                    gaCode,
                    smsCode,
                    type: 'sms',
                    state: 1 // 1->开启,2->关闭
                },
                isFullData: true,
                callback: (data) => {
                    if (data.errNo == '0') {
                        message.success('已开启短信验证');
                        setTimeout(() => {
                            this.props.history.push('/security');
                        }, 2000);
                    }
                }
            });
        };
        this.changeCode = (type, e) => {
            let code = e.target.value;
            const { codeType } = this.state;
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
        this.getInputCodeDom = (type) => {
            let code = '';
            if (type === 'sms') {
                code = this.state.smsCode;
            }
            else if (type === 'ga') {
                code = this.state.gaCode;
            }
            return React.createElement(Row, { className: "inputBox" },
                React.createElement("input", { className: "input-number", maxLength: 6, value: code, onChange: this.changeCode.bind(this, type) }),
                React.createElement(Col, { className: status || code.length > 0 ? "firstCol hasInput" : "firstCol" }, code.length > 0 ? code.substr(0, 1) : ''),
                React.createElement(Col, { className: code.length > 1 ? "hasInput" : "" }, code.length > 1 ? code.substr(1, 1) : ''),
                React.createElement(Col, { className: code.length > 2 ? "hasInput" : "" }, code.length > 2 ? code.substr(2, 1) : ''),
                React.createElement(Col, { className: code.length > 3 ? "hasInput" : "" }, code.length > 3 ? code.substr(3, 1) : ''),
                React.createElement(Col, { className: code.length > 4 ? "hasInput" : "" }, code.length > 4 ? code.substr(4, 1) : ''),
                React.createElement(Col, { className: code.length > 5 ? "hasInput" : "" }, code.length > 5 ? code.substr(5, 1) : ''));
        };
        this.changePhone = (e) => {
            let val = e.target.value;
            let reg = /^[0-9]*$/;
            if (reg.test(val)) {
                this.setState({
                    phoneNum: val
                });
            }
        };
        this.sendSMS = () => {
            let phone = this.state.phoneNum;
            ajax({
                url: 'common.sendSMS',
                data: { phone },
                callback: (data) => {
                }
            });
        };
        this.state = {
            smsCode: '',
            gaCode: '',
            phoneNum: '',
            country: '',
            codeType: '3' // '1'->sms,'2'->ga,'3'->both
        };
    }
    render() {
        const codeType = this.state.codeType;
        const residences = require(`@webExchangeLocales/${this.props.langStore.currentLang}/register.ts`).default.areaList;
        return (React.createElement(WrapperPhoneCmp, null,
            React.createElement(Row, { style: { height: '100%', paddingTop: 100 } },
                React.createElement("div", { className: "title" }, "\u624B\u673A\u9A8C\u8BC1"),
                React.createElement("div", { className: "frame" },
                    React.createElement("div", { className: 'phoneWrapper' },
                        React.createElement(Select, { className: 'country', defaultValue: 'HK', onChange: (e) => this.setState({ country: e }) }, residences.map(item => {
                            return React.createElement(Option, { key: item.value, value: item.value }, item.label);
                        })),
                        React.createElement(Input, { className: 'phone', placeholder: '\u624B\u673A\u53F7\u7801', onChange: this.changePhone.bind(this), value: this.state.phoneNum }),
                        React.createElement("div", { className: 'verticalLine' })),
                    codeType === '1' ?
                        React.createElement("div", { className: "content" },
                            React.createElement("div", { className: "sendBox" },
                                React.createElement("span", { className: "bothSmsTit" }, "\u77ED\u4FE1\u9A8C\u8BC1\u7801"),
                                React.createElement(Button, null, "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801")),
                            this.getInputCodeDom('sms'),
                            React.createElement("div", { className: "pointBox" },
                                React.createElement("span", null,
                                    "\u6536\u4E0D\u5230\u77ED\u4FE1\uFF1F",
                                    React.createElement("a", null, "\u8BD5\u8BD5\u8BED\u97F3\u9A8C\u8BC1\u7801"))))
                        : '',
                    codeType === '2' ?
                        React.createElement("div", { className: "content" },
                            React.createElement("p", { className: "bothGaTit" }, "\u8C37\u6B4C\u9A8C\u8BC1\u7801"),
                            this.getInputCodeDom('ga'),
                            React.createElement("div", { className: "pointBox" },
                                React.createElement("a", { className: "forgetGa" }, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1\uFF1F"))) : '',
                    codeType === '3' ?
                        React.createElement("div", { className: "content" },
                            React.createElement("div", { className: "sendBox" },
                                React.createElement("span", { className: "bothSmsTit" }, "\u77ED\u4FE1\u9A8C\u8BC1\u7801"),
                                React.createElement(Button, { onClick: this.sendSMS }, "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801")),
                            this.getInputCodeDom('sms'),
                            React.createElement("div", { className: "pointBox" },
                                React.createElement("span", null,
                                    "\u6536\u4E0D\u5230\u77ED\u4FE1\uFF1F",
                                    React.createElement("a", null, "\u8BD5\u8BD5\u8BED\u97F3\u9A8C\u8BC1\u7801"))),
                            React.createElement("p", { className: "bothGaTit" }, "\u8C37\u6B4C\u9A8C\u8BC1\u7801"),
                            this.getInputCodeDom('ga'),
                            React.createElement("div", { className: "pointBox" },
                                React.createElement("a", { className: "forgetGa" }, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1\uFF1F"))) : '',
                    React.createElement(Button, { className: "confirmBtn", onClick: this.handleSubmit }, "\u786E\u8BA4")))));
    }
};
PhoneBind = __decorate([
    inject('userStore', 'langStore'),
    observer,
    renderBreadcrumbs
], PhoneBind);
export default PhoneBind;
//# sourceMappingURL=index.js.map