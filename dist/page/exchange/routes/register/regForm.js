var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input, Select, Checkbox, Button, Form } from 'antd';
const { Option } = Select;
import { WrappedRegisterFormCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { startCase, replace } from 'lodash';
import ImageCode from '@webExchangeComponents/imageCode/index';
let RegisterForm = class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.onSuccess = (identityCode) => {
            const { userStore } = this.props;
            let values = this.formRef.getFieldsValue();
            let that = this;
            this.setState((state) => {
                ajax({
                    url: 'register.submitBasic',
                    method: 'post',
                    data: Object.assign(values, {
                        identityCode,
                        password: sha256(md5(values.password))
                    }),
                    callback(data) {
                        userStore.changeUserInfo({
                            email: this.formRef.getFieldValue("email"),
                            userId: data.userId
                        });
                        that.props.nextStep();
                    }
                });
                return { showImageCode: false };
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
        this.checkPwd = (rule, value, callback) => {
            let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,30}$/;
            if (value && !reg.test(value)) {
                callback("至少8个字符，必须包含大小写字母及数字");
            }
            else {
                callback();
            }
        };
        this.handleSubmit = (e) => {
            this.formRef.validateFields()
                .then((values) => {
                this.setState({
                    showImageCode: true
                });
            })
                .catch((err) => {
                console.log(err, 'err');
            });
        };
        this.calcPwdLevel = (val) => {
            let level = 0;
            if (val) {
                if (val.match(/[A-Z]/)) {
                    level++;
                }
                if (val.match(/[a-z]/)) {
                    level++;
                }
                if (val.match(/[0-9]/)) {
                    level++;
                }
                if (val.match(/[#?!@$%^&*\\-_]/)) {
                    level++;
                }
            }
            return level > 2 ? "third" : level > 1 ? "second" : "first";
        };
        this.changeClause = () => {
            const status = this.state.isAgreeClause;
            this.setState({
                isAgreeClause: !status
            });
        };
        this.passwordChange = (e) => {
            const { inputPassword } = this.state;
            this.setState({
                inputPassword: e.target.value
            });
        };
        this.state = {
            focusEmail: "",
            focusPassword: "",
            focusReferralCode: "",
            showOrHidePwd: true,
            showImageCode: false,
            isAgreeClause: false,
            inputPassword: '',
            areaList: []
        };
    }
    componentWillMount() {
        let that = this;
        this.props.userStore.clearUserInfo();
        ajax({
            url: "register.getAreaList",
            callback(data) {
                that.setState({ areaList: data.list });
            }
        });
    }
    render() {
        const params = {
            showImageCode: this.state.showImageCode,
            onClose: this.onClose,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        const { showImageCode, isAgreeClause, inputPassword, areaList } = this.state;
        const history = this.props.history;
        let pwdLevel = this.calcPwdLevel(inputPassword || '');
        return (React.createElement(WrappedRegisterFormCmp, null,
            React.createElement("div", { className: "title" }, "\u6CE8\u518C"),
            React.createElement(Form, { ref: (e) => this.formRef = e, layout: "vertical", initialValues: { residence: '国籍' } },
                React.createElement(Form.Item, { className: "formItem nation", name: "residence", rules: [{
                            required: true, message: "请选择你的国籍"
                        }] },
                    React.createElement(Select, { bordered: false },
                        React.createElement(Option, { value: "" }, "\u56FD\u7C4D"),
                        areaList.map(item => React.createElement(Option, { key: item.value, value: item.value }, item.label)))),
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
                        }, {
                            validator: this.checkPwd,
                        }] },
                    React.createElement("div", { className: "pwdBox" },
                        React.createElement("div", { className: "label " + this.state.focusPassword }, "\u5BC6\u7801"),
                        React.createElement("div", { className: "level " + this.state.focusPassword },
                            React.createElement("i", { className: "one " + pwdLevel }),
                            React.createElement("i", { className: "two " + pwdLevel }),
                            React.createElement("i", { className: "three " + pwdLevel }),
                            React.createElement("span", { className: "text " + pwdLevel }, pwdLevel == "first" ? "弱" : pwdLevel == "third" ? "强" : "中")),
                        React.createElement(Input, { type: this.state.showOrHidePwd ? "password" : "text", onFocus: this.setInputStatus.bind(this, { type: "password", status: true }), onBlur: this.setInputStatus.bind(this, { type: "password", status: false }), onChange: this.passwordChange }),
                        React.createElement("div", { onClick: this.showOrHidePwd, className: this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide" }))),
                React.createElement(Form.Item, { className: "formItem", name: "referralCode" },
                    React.createElement("div", { className: "recommendBox" },
                        React.createElement("div", { className: "label " + this.state.focusReferralCode }, "\u63A8\u8350\u4EBAID"),
                        React.createElement(Input, { onFocus: this.setInputStatus.bind(this, { type: "referralCode", status: true }), onBlur: this.setInputStatus.bind(this, { type: "referralCode", status: false }) }))),
                React.createElement(Form.Item, { className: "formItem policyBox", name: "policy" },
                    React.createElement(Checkbox, { onChange: this.changeClause },
                        "\u6211\uFF08\u786E\u8BA4\u5E74\u9F84\u572818\u5468\u5C81\u4EE5\u4E0A\uFF09/\u6211\u4EEC\uFF08\u786E\u8BA4\u662F\u73B0\u5B58\u5B9E\u4F53\uFF09\u627F\u8BA4\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u6D3B\u52A8\u5B58\u5728\u9AD8\u7684\u98CE\u9669\uFF0C\u5E76\u540C\u610F",
                        React.createElement("a", null, "HashKey Pro\u670D\u52A1\u6761\u6B3E\u3001\u9690\u79C1\u653F\u7B56"),
                        "\u53CA\u6536\u96C6",
                        React.createElement("a", null, "\u4E2A\u4EBA\u8D44\u6599\u58F0\u660E"))),
                React.createElement(Button, { className: !isAgreeClause ? "regBtn" : "regBtn confirmBlueBtn", type: "primary", disabled: !isAgreeClause, onClick: this.handleSubmit }, "\u6CE8\u518C"),
                React.createElement("div", { className: "loginLink" },
                    "\u5DF2\u6709\u5E10\u53F7\uFF1F\u00A0\u00A0",
                    React.createElement("a", { onClick: () => { history.push('login'); } }, "\u7ACB\u5373\u767B\u5F55"))),
            showImageCode ? React.createElement(ImageCode, Object.assign({}, params)) : ''));
    }
};
RegisterForm = __decorate([
    inject('userStore', 'langStore'),
    observer
], RegisterForm);
export default RegisterForm;
// const WrappedRegForm = Form.create<RegisterFormProps>({ name: 'register' })(RegisterForm);
// export default WrappedRegForm;
//# sourceMappingURL=regForm.js.map