var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input, Button, message, Form } from 'antd';
// import { FormComponentProps } from '@ant-design';
import { WrapperLoginFormCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { startCase, replace } from 'lodash';
import ImageCode from '@webExchangeComponents/imageCode/index';
let LoginForm = class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
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
        this.showOrHidePwd = () => {
            this.setState({
                showOrHidePwd: !this.state.showOrHidePwd
            });
        };
        this.checkEmail = (rule, value, callback) => {
            let reg = /^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/;
            if (value && !reg.test(value)) {
                callback("请输入正确的邮箱格式！");
            }
            else {
                callback();
            }
        };
        this.handleSubmit = () => {
            this.formRef.validateFields()
                .then((values) => {
                this.setState({
                    formValues: values,
                    showImageCode: true
                });
            })
                .catch((err) => {
            });
        };
        this.onSuccess = (uuid) => {
            this.setState({
                uuid: uuid
            }, () => {
                this.authPassword();
            });
        };
        this.onError = () => {
            console.log('error');
        };
        this.onClose = () => {
            this.setState({
                showImageCode: false
            });
        };
        this.authDetail = (userId) => {
            let that = this;
            ajax({
                url: 'login.authDetail',
                method: 'get',
                needToken: false,
                urlName: `/${userId}`,
                callback(data) {
                    let mfa = data.mfa || [];
                    if (mfa.length <= 0) {
                        // 没有开启mfa,直接登录
                        that.login();
                    }
                }
            });
        };
        this.authPassword = () => {
            let that = this;
            let values = JSON.parse(JSON.stringify(this.state.formValues));
            ajax({
                url: 'login.authPassword',
                method: 'post',
                needToken: false,
                data: Object.assign(values, { password: sha256(md5(values.password)) }),
                callback(data) {
                    if (data && data.userId) {
                        that.authDetail(data.userId);
                    }
                    else {
                        message.error('邮箱或密码错误');
                    }
                }
            });
        };
        this.login = () => {
            let that = this;
            let values = JSON.parse(JSON.stringify(this.state.formValues));
            let uuid = this.state.uuid;
            ajax({
                url: 'login.login',
                method: 'post',
                needToken: false,
                data: Object.assign(values, { password: sha256(md5(values.password)), code: uuid }),
                callback(data) {
                    if (data) {
                        // success
                        that.props.userStore.changeUserInfo({
                            token: data.accessToken,
                            email: values.email
                        });
                        message.success('登录成功');
                        that.props.history.push('security');
                        // 测试
                        // if (values.email == 'test@163.com') {
                        //     common.setLS("clientId", "CL17");
                        // } else {
                        //     common.setLS("clientId", "CL19");
                        // }
                    }
                }
            });
        };
        this.state = {
            focusEmail: "",
            focusPassword: "",
            showOrHidePwd: true,
            showImageCode: false,
            formValues: null,
            uuid: ''
        };
    }
    render() {
        const showImageCode = this.state.showImageCode;
        const params = {
            showImageCode: this.state.showImageCode,
            onClose: this.onClose,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        // const { getFieldDecorator } = this.props.form;
        const { history } = this.props;
        return (React.createElement(WrapperLoginFormCmp, null,
            React.createElement(Form, { ref: (e) => this.formRef = e, layout: "horizontal", name: "login" },
                React.createElement(Form.Item, { className: "formItem email", name: "email", rules: [{
                            required: true, message: "请输入你的邮箱"
                        }, {
                            validator: this.checkEmail
                        }] },
                    React.createElement("div", { className: "emailBox" },
                        React.createElement("div", { className: "label " + this.state.focusEmail }, "\u90AE\u7BB1"),
                        React.createElement(Input, { onFocus: this.setInputStatus.bind(this, { type: "email", status: true }), onBlur: this.setInputStatus.bind(this, { type: "email", status: false }) }))),
                React.createElement(Form.Item, { className: "formItem pwd", name: "password", rules: [{
                            required: true, message: "请输入你的密码"
                        }] },
                    React.createElement("div", { className: "pwdBox" },
                        React.createElement("div", { className: "label " + this.state.focusPassword }, "\u5BC6\u7801"),
                        React.createElement(Input, { type: this.state.showOrHidePwd ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "password", status: true }), onBlur: this.setInputStatus.bind(this, { type: "password", status: false }) }),
                        React.createElement("div", { onClick: this.showOrHidePwd, className: this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide" }))),
                React.createElement(Button, { className: "confirmBlueBtn", onClick: this.handleSubmit }, "\u767B\u5F55")),
            React.createElement("div", { className: "formBottom" },
                React.createElement("a", { onClick: () => { history.push('/forgotPwd'); } }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),
                React.createElement("span", null,
                    "\u8FD8\u6CA1\u6709\u5E10\u53F7\uFF1F",
                    React.createElement("a", { onClick: () => { history.push('register'); }, className: "regA" }, "\u7ACB\u5373\u6CE8\u518C"))),
            showImageCode ? React.createElement(ImageCode, Object.assign({}, params)) : ''));
    }
};
LoginForm = __decorate([
    inject('userStore'),
    observer
], LoginForm);
export default LoginForm;
// const WrappedLoginForm = Form.create<LoginFormProps>({ name: 'login' })(LoginForm);
// export default LoginForm;
//# sourceMappingURL=loginForm.js.map