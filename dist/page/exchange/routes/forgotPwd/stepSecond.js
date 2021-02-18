var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { WrappedForgotPwdStepSecondCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const emailPic = require("@webExchangeImgs/email.png");
let StepSecond = class StepSecond extends React.Component {
    constructor(props) {
        super(props);
        this.resendEmail = () => {
            ajax({
                url: 'forgotPwd.sendEmail',
                method: 'post',
                data: { email: this.props.userStore.userInfo.email },
                callback(data) {
                    console.log("resend success");
                }
            });
        };
    }
    render() {
        const { userStore } = this.props;
        let mailTo = `mailto:${userStore.userInfo.email}`;
        return (React.createElement(WrappedForgotPwdStepSecondCmp, null,
            React.createElement("img", { src: emailPic, className: "emailPic" }),
            React.createElement("div", { className: "title" }, "\u9700\u8981\u90AE\u4EF6\u786E\u8BA4"),
            React.createElement("div", { className: "content" }, "\u6211\u4EEC\u5DF2\u7ECF\u7ED9\u4F60\u7684\u90AE\u7BB1\u53D1\u9001\u4E86\u4E00\u5C01\u91CD\u7F6E\u5BC6\u7801\u7684\u90AE\u4EF6\uFF0C\u8BF7\u6309\u7167\u90AE\u4EF6\u5185\u5BB9\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002"),
            React.createElement("a", { className: "gotoEmail", href: mailTo }, "\u53BB\u90AE\u7BB1\u786E\u8BA4 \u00BB"),
            React.createElement("div", { className: "line" }),
            React.createElement("div", { className: "ops" },
                React.createElement("span", null, "\u672A\u6536\u5230\u90AE\u4EF6\uFF1F"),
                React.createElement("a", { onClick: this.resendEmail }, "\u91CD\u65B0\u53D1\u9001"))));
    }
};
StepSecond = __decorate([
    inject('userStore'),
    observer
], StepSecond);
export default StepSecond;
//# sourceMappingURL=stepSecond.js.map