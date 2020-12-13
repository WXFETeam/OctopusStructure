var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, message } from 'antd';
import { WrappedRegisterSecondStepCmd } from './styled';
import { observer, inject } from 'mobx-react/index';
const emailPic = require("@webExchangeImgs/email.png");
let RegisterSecondStep = class RegisterSecondStep extends React.Component {
    constructor(props) {
        super(props);
        // componentDidMount() {
        //     this.resendEmail();
        // }
        this.setInputFocus = () => {
            this.numInput.focus();
            var maxLen = this.state.codeNum.length;
            this.numInput.setSelectionRange(maxLen, maxLen);
        };
        this.changeCode = (e) => {
            e.persist();
            let that = this;
            let codeNum = e.target.value.slice(0, 6);
            this.setState({ codeNum });
            if (codeNum.length == 6) {
                ajax({
                    url: "register.verifyEmailCode",
                    method: "post",
                    data: {
                        userId: this.props.userStore.userInfo.userId,
                        code: codeNum
                    },
                    callback(data) {
                        message.success("注册成功！");
                        that.props.history.push("/login");
                    }
                });
            }
        };
        this.resendEmail = () => {
            ajax({
                url: 'register.resendEmailCode',
                method: 'post',
                data: { userId: this.props.userStore.userInfo.userId },
                callback(data) {
                    console.log("resend success");
                }
            });
        };
        this.state = {
            codeNum: ""
        };
    }
    render() {
        const { userStore } = this.props;
        let mailTo = `mailto:${userStore.userInfo.email}`;
        return (React.createElement(WrappedRegisterSecondStepCmd, null,
            React.createElement("img", { src: emailPic, className: "emailPic" }),
            React.createElement("div", { className: "title" }, "\u90AE\u7BB1"),
            React.createElement("div", { className: "content" }, "\u6211\u4EEC\u5DF2\u5411\u5982\u4E0B\u90AE\u7BB1\u53D1\u9001\u4E86\u4E00\u5C01\u90AE\u4EF6******@***.com\u8BF7\u8F93\u5165\u90AE\u4EF6\u5185\u7684\u9A8C\u8BC1\u7801\u5F00\u59CB\u4F7F\u7528Hashkey!"),
            React.createElement("a", { className: "gotoEmail", href: mailTo }, "\u53BB\u90AE\u7BB1\u786E\u8BA4 \u00BB"),
            React.createElement("div", { className: "line" }),
            React.createElement("div", { className: "ops" },
                React.createElement("div", { className: "prompt" }, "\u9A8C\u8BC1\u7801"),
                React.createElement("a", { onClick: this.resendEmail }, "\u91CD\u53D1\u90AE\u4EF6")),
            React.createElement(Row, { className: "code", justify: "space-between", onClick: this.setInputFocus },
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 0 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(0, 1)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 1 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(1, 2)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 2 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(2, 3)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 3 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(3, 4)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 4 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(4, 5)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 5 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(5, 6)),
                React.createElement("input", { style: { opacity: 0 }, type: "text", ref: refs => this.numInput = refs, onChange: this.changeCode, value: this.state.codeNum }))));
    }
};
RegisterSecondStep = __decorate([
    withRouter,
    inject('userStore'),
    observer
], RegisterSecondStep);
export default RegisterSecondStep;
//# sourceMappingURL=registerSecondStep.js.map