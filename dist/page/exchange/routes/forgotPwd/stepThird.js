var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input, Button, Form, message } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrappedForgotPwdStepThirdCmp } from './styled';
import { inject } from 'mobx-react/index';
import { replace, startCase } from 'lodash';
let StepThird = class StepThird extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.showOrHidePwd = (type) => {
            let key = `showOrHide${type}`;
            //@ts-ignore
            this.setState({
                [key]: !this.state[key]
            });
        };
        this.checkPwd = (rule, value, callback) => {
            // const form = this.props.form;
            let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,30}$/;
            if (value && this.state.confirmDirty) {
                this.formRef.validateFields(['confirmPwd'], { force: true });
            }
            if (value && !reg.test(value)) {
                callback("至少8个字符，必须包含大小写字母及数字");
            }
            callback();
        };
        this.compareToFirstPassword = (rule, value, callback) => {
            // const { form } = this.props;
            if (value && value !== this.formRef.getFieldValue('password')) {
                callback('两次密码输入不一致！');
            }
            else {
                callback();
            }
        };
        this.setInputStatus = ({ type, status }, e) => {
            // const { form } = this.props;
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
            if (type == "confirmPwd") {
                const { value } = e.target;
                this.setState({ confirmDirty: this.state.confirmDirty || !!value });
            }
            //@ts-ignore
            this.setState({ [key]: result });
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            // const { form, changeStep } = this.props;
            const { changeStep, userStore } = this.props;
            // form.validateFields((err, values) => {
            //     if (!err) {
            //         ajax({
            //             url: 'forgotPwd.submit',
            //             method: 'post',
            //             data: {password:sha256(md5(values.password))},
            //             callback(data) {
            //                 changeStep(4);
            //             }
            //         })
            //     }
            // })
            this.formRef.validateFields()
                .then((values) => {
                ajax({
                    url: 'forgotPwd.submit',
                    method: 'post',
                    data: {
                        accountNumber: userStore.userInfo.email,
                        confirmPassWord: sha256(md5(values.password)),
                        newPassWord: sha256(md5(values.password))
                    },
                    callback(data) {
                        if (data.errNo == 0) {
                            changeStep(4);
                        }
                        else {
                            message.error('重置密码失败，请稍候重试');
                        }
                    }
                });
            })
                .catch((err) => {
                console.log(err);
            });
        };
        this.state = {
            focusPassword: "",
            focusConfirmPwd: "",
            showOrHidePwd: true,
            showOrHideConfirmPwd: true,
            confirmDirty: false
        };
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (React.createElement(WrappedForgotPwdStepThirdCmp, null,
            React.createElement("div", { className: "title" }, "\u91CD\u7F6E\u5BC6\u7801"),
            React.createElement(Form, { ref: (e) => this.formRef = e, className: "stepThirdtForm" },
                React.createElement(Form.Item, { className: "formItem", style: { marginBottom: 36 }, name: "password", rules: [{
                            required: true, message: "请输入你的密码"
                        }, {
                            validator: this.checkPwd
                        }] },
                    React.createElement("div", { className: "pwdBox" },
                        React.createElement("div", { className: "label " + this.state.focusPassword }, "\u65B0\u5BC6\u7801"),
                        React.createElement(Input, { type: this.state.showOrHidePwd ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "password", status: true }), onBlur: this.setInputStatus.bind(this, { type: "password", status: false }) }),
                        React.createElement("div", { onClick: this.showOrHidePwd.bind(this, "Pwd"), className: this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide" }))),
                React.createElement(Form.Item, { className: "formItem", name: "confirmPwd", rules: [{
                            required: true, message: "请确认密码"
                        }, {
                            validator: this.compareToFirstPassword
                        }] },
                    React.createElement("div", { className: "pwdBox" },
                        React.createElement("div", { className: "label " + this.state.focusConfirmPwd }, "\u786E\u8BA4\u65B0\u5BC6\u7801"),
                        React.createElement(Input, { type: this.state.showOrHideConfirmPwd ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "confirmPwd", status: true }), onBlur: this.setInputStatus.bind(this, { type: "confirmPwd", status: false }) }),
                        React.createElement("div", { onClick: this.showOrHidePwd.bind(this, "ConfirmPwd"), className: this.state.showOrHideConfirmPwd ? "pwdStatus show" : "pwdStatus hide" }))),
                React.createElement(Button, { className: "submitBtn confirmBlueBtn", type: "primary", onClick: this.handleSubmit }, "\u786E\u8BA4\u91CD\u7F6E"))));
    }
};
StepThird = __decorate([
    inject('userStore')
], StepThird);
export default StepThird;
// const WrappedStepThird= Form.create<StepThirdProps>({ name: 'stepThird' })(StepThird);
// export default WrappedStepThird;
//# sourceMappingURL=stepThird.js.map