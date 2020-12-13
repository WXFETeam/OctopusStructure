var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input, Button, Form, message } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrappedForgotPwdStepFirstCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let StepFirst = class StepFirst extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.setInputStatus = (status) => {
            // const { form } = this.props;
            let result;
            if (status) {
                result = "up";
            }
            else {
                if (this.formRef.getFieldValue("email")) {
                    result = "up";
                }
                else {
                    result = "";
                }
            }
            //@ts-ignore
            this.setState({ focusEmail: result });
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
        // handleSubmit = (e) => {
        //     e.preventDefault();
        //     const [ form ] = Form.useForm();
        //     const { userStore, changeStep } = this.props;
        //     // const { form, userStore, changeStep } = this.props;
        //     form.validateFields((err, values) => {
        //         if (!err) {
        //             ajax({
        //                 url: 'forgotPwd.sendEmail',
        //                 method: 'post',
        //                 data: values,
        //                 callback(data) {
        //                     userStore.changeUserInfo({email: form.getFieldValue("email")});
        //                     changeStep(2);
        //                 }
        //             })
        //         }
        //     })
        // }
        this.handleSubmit = () => {
            const { userStore, changeStep } = this.props;
            this.formRef.validateFields().then((values) => {
                let that = this;
                ajax({
                    url: 'forgotPwd.sendEmail',
                    method: 'post',
                    data: values,
                    callback(data) {
                        if (data.errNo == 0) {
                            userStore.changeUserInfo({ email: that.formRef.getFieldValue("email") });
                            changeStep(2);
                        }
                        else {
                            message.error('发送邮件失败，请稍候重试');
                        }
                    }
                });
            });
        };
        this.state = {
            focusEmail: ""
        };
    }
    render() {
        return (React.createElement(WrappedForgotPwdStepFirstCmp, null,
            React.createElement("div", { className: "title" }, "\u91CD\u7F6E\u767B\u5F55\u5BC6\u7801"),
            React.createElement(Form, { ref: (e) => this.formRef = e, className: "stepFirstForm", name: "stepFirst" },
                React.createElement(Form.Item, { className: "formItem email", name: "email", rules: [{
                            required: true, message: "请输入你的邮箱"
                        }, {
                            validator: this.checkEmail
                        }] },
                    React.createElement("div", { className: "emailBox" },
                        React.createElement("div", { className: "label " + this.state.focusEmail }, "\u90AE\u7BB1"),
                        React.createElement(Input, { onFocus: this.setInputStatus.bind(this, true), onBlur: this.setInputStatus.bind(this, false) }))),
                React.createElement(Button, { className: "submitBtn confirmBlueBtn", type: "primary", onClick: this.handleSubmit }, "\u63D0\u4EA4"))));
    }
};
StepFirst = __decorate([
    inject('userStore'),
    observer
], StepFirst);
export default StepFirst;
// const WrappedStepFirst= Form.create<StepFirstProps>({ name: 'stepFirst' })(StepFirst);
// export default WrappedStepFirst;
//# sourceMappingURL=stepFirst.js.map