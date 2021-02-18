var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Input, Form, message } from 'antd';
import { WrapperCorrectPwdCmp } from './styled';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { startCase, replace } from 'lodash';
const LightIcon = require("@webExchangeImgs/security/lightIcon.png");
let CorrectPwd = class CorrectPwd extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.showOrHidePwdOld = () => {
            this.setState({
                showOrHidePwdOld: !this.state.showOrHidePwdOld
            });
        };
        this.showOrHidePwdNew = () => {
            this.setState({
                showOrHidePwdNew: !this.state.showOrHidePwdNew
            });
        };
        this.showOrHidePwdConfirm = () => {
            this.setState({
                showOrHidePwdConfirm: !this.state.showOrHidePwdConfirm
            });
        };
        this.setInputStatus = ({ type, status }) => {
            let key = `focus${replace(startCase(type), " ", "")}`;
            let result;
            if (status) {
                result = "up";
            }
            else {
                if (this.formRef.getFieldValue(type)) {
                    result = "up";
                }
                else {
                    result = "";
                }
            }
            //@ts-ignore
            this.setState({ [key]: result });
        };
        this.handleSubmit = () => {
            const { userStore, changeStep } = this.props;
            let isExchangePage = window.location.pathname.includes('pwdMgt/exchange'); //设置交易密码
            let isLoginPage = window.location.pathname.includes('login'); //修改登录密码
            let isfinancialPage = window.location.pathname.includes('financial'); //设置资金密码
            this.formRef.validateFields().then((values) => {
                // let loginValues = {
                //     oldPassword: sha256(md5(values.oldPassword)),
                //     newPassword: sha256(md5(values.newPassword)),
                //     token: common.getLS("userInfo").token
                // }
                let financialValues = {
                    accountNumber: "cc@126.com",
                    fundPassWord: sha256(md5(values.newPassword)),
                    confirmPassword: sha256(md5(values.confirmPassword)),
                    passWord: sha256(md5(values.oldPassword))
                };
                let exchangeValues = {
                    accountNumber: "cc@126.com",
                    businessPassWord: sha256(md5(values.newPassword)),
                    confirmPassword: sha256(md5(values.confirmPassword)),
                    passWord: sha256(md5(values.oldPassword))
                };
                if (isLoginPage == true) {
                    // ajax({
                    //     url: 'security.updatePassword',
                    //     method: 'post',
                    //     data: loginValues,
                    //     isFullData: true,
                    //     callback(data) {
                    //         if (data.errNo == 0) {
                    //             message.success("修改登录密码成功")
                    //         } else {
                    //             message.error("修改登录密码失败")
                    //         }
                    //     }
                    // })
                }
                else if (isfinancialPage == true) {
                    ajax({
                        url: 'security.setFundPassWord',
                        method: 'post',
                        data: financialValues,
                        isFullData: true,
                        callback(data) {
                            if (data.errNo == 0) {
                                message.success("设置资金密码成功");
                            }
                            else {
                                message.error("修改资金密码失败");
                            }
                        }
                    });
                }
                else if (isExchangePage == true) {
                    ajax({
                        url: 'security.setBusinessPassWord',
                        method: 'post',
                        data: exchangeValues,
                        isFullData: true,
                        callback(data) {
                            if (data.errNo == 0) {
                                message.success("设置资金密码成功");
                            }
                            else {
                                message.error("修改资金密码失败");
                            }
                        }
                    });
                }
            });
        };
        this.state = {
            focusOldPassword: "",
            focusNewPassword: "",
            focusConfirmPassword: "",
            showOrHidePwdOld: true,
            formValues: null,
            showOrHidePwdNew: true,
            showOrHidePwdConfirm: true
        };
    }
    render() {
        const { history, match } = this.props;
        let isExchangePage = window.location.pathname.includes('pwdMgt/exchange');
        let isLoginPage = window.location.pathname.includes('login');
        let isfinancialPage = window.location.pathname.includes('financial');
        return (React.createElement(WrapperCorrectPwdCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { className: "title" }, isExchangePage ? "设置交易密码" : (isLoginPage ? "修改登录密码" : (isfinancialPage ? "设置资金密码" : "")))),
            React.createElement(Row, { justify: "center" },
                React.createElement("div", { className: "tip" },
                    React.createElement("img", { src: LightIcon }),
                    isExchangePage ? "资金密码将用于数字货币交易，请妥善保管。" : (isLoginPage ? "为了保证您的安全，重置密码后24小时内无。" : (isfinancialPage ? "资金密码将用于资产转出，请妥善保管。" : "")))),
            React.createElement(Row, { justify: "center" },
                React.createElement(Form, { ref: (e) => this.formRef = e, className: "CorrectPwdForm" },
                    React.createElement(Form.Item, { className: "formItem pwd", name: "oldPassword", rules: [{
                                required: true, message: "请输入你的密码"
                            }] },
                        React.createElement("div", { className: "pwdBox" },
                            React.createElement("div", { className: "label " + this.state.focusOldPassword }, "\u767B\u5F55\u5BC6\u7801"),
                            React.createElement(Input, { type: this.state.showOrHidePwdOld ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "oldPassword", status: true }), onBlur: this.setInputStatus.bind(this, { type: "oldPassword", status: false }) }),
                            React.createElement("div", { onClick: this.showOrHidePwdOld, className: this.state.showOrHidePwdOld ? "pwdStatus show" : "pwdStatus hide" }))),
                    React.createElement(Form.Item, { className: "formItem pwd", name: "newPassword", rules: [{
                                required: true, message: "请输入你的密码"
                            }] },
                        React.createElement("div", { className: "pwdBox" },
                            React.createElement("div", { className: "label " + this.state.focusNewPassword }, isExchangePage ? "设置交易密码" : (isLoginPage ? "新密码" : (isfinancialPage ? "设置资金密码" : ""))),
                            React.createElement(Input, { type: this.state.showOrHidePwdNew ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "newPassword", status: true }), onBlur: this.setInputStatus.bind(this, { type: "newPassword", status: false }) }),
                            React.createElement("div", { onClick: this.showOrHidePwdNew, className: this.state.showOrHidePwdNew ? "pwdStatus show" : "pwdStatus hide" }))),
                    React.createElement(Form.Item, { className: "formItem pwd", name: "confirmPassword", rules: [{
                                required: true, message: "请输入你的密码"
                            }] },
                        React.createElement("div", { className: "pwdBox" },
                            React.createElement("div", { className: "label " + this.state.focusConfirmPassword }, isExchangePage ? "确认资金密码" : (isLoginPage ? "确认新密码" : (isfinancialPage ? "确认资金密码" : ""))),
                            React.createElement(Input, { type: this.state.showOrHidePwdConfirm ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "confirmPassword", status: true }), onBlur: this.setInputStatus.bind(this, { type: "confirmPassword", status: false }) }),
                            React.createElement("div", { onClick: this.showOrHidePwdConfirm, className: this.state.showOrHidePwdConfirm ? "pwdStatus show" : "pwdStatus hide" }))),
                    React.createElement(Button, { className: "confirmBlueBtn", onClick: this.handleSubmit }, "\u786E\u8BA4\u4FEE\u6539")))));
    }
};
CorrectPwd = __decorate([
    renderBreadcrumbs
], CorrectPwd);
export default CorrectPwd;
// const WrappedCorrectPwd = Form.create<CorrectPwdFormProps>({ name: 'register' })(CorrectPwd);
// export default WrappedCorrectPwd;
//# sourceMappingURL=correctPwd.js.map