var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Select, message } from 'antd';
import { WrapperPhoneCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const { Option } = Select;
let Verify = class Verify extends React.Component {
    constructor(props) {
        super(props);
        this.changeCode = (type, e) => {
            let code = e.target.value;
            let that = this;
            const codeType = this.state.codeType;
            if (type === 'sms') {
                this.setState({
                    smsCode: code
                });
            }
            else if (type === 'ga') {
                this.setState({
                    gaCode: code
                }, () => {
                    if (that.state.gaCode.length == 6) {
                        that.handleSubmit();
                    }
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
        this.handleSubmit = () => {
            let that = this;
            let params = {
                code: this.state.gaCode ? this.state.gaCode : "",
            };
            ajax({
                url: 'MFA.authGoogleKey',
                data: params,
                isFullData: true,
                callback(json) {
                    if (json.errNo == "0") {
                        message.error('success');
                        // that.props.history.push('/security/basicInfo/newmail')
                    }
                    else {
                        message.error(json.errMsg);
                    }
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
            React.createElement(Row, { style: { height: '100%', paddingTop: 60 } },
                React.createElement("div", { className: "title" }, "\u4E8C\u6B21\u9A8C\u8BC1"),
                React.createElement("div", { className: "frame" }, codeType === '2' || codeType === '3' ?
                    React.createElement("div", { className: "content" },
                        React.createElement("p", { className: "bothGaTit" }, "\u8C37\u6B4C\u9A8C\u8BC1\u7801"),
                        this.getInputCodeDom('ga'),
                        React.createElement("div", { className: "pointBox" },
                            React.createElement("a", { className: "forgetGa" }, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1\uFF1F"))) : ''))));
    }
};
Verify = __decorate([
    inject('userStore', 'langStore'),
    observer
], Verify);
export default Verify;
//# sourceMappingURL=index.js.map