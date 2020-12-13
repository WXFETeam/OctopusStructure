import * as React from "react";
import { Input, Button, Form, message } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrappedForgotPwdStepThirdCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { replace, startCase } from 'lodash';

// interface StepThirdProps extends FormComponentProps {
//     changeStep: any
// }

type StepThirdProps = {
    changeStep: any,
    userStore?: any
}

type StepThirdState = {
    focusPassword: string,
    focusConfirmPwd: string,
    showOrHidePwd: boolean,
    showOrHideConfirmPwd: boolean,
    confirmDirty: boolean
}
@inject('userStore')
export default class StepThird extends React.Component<StepThirdProps, StepThirdState> {
    constructor(props: StepThirdProps) {
        super(props);
        this.state = {
            focusPassword: "",
            focusConfirmPwd: "",
            showOrHidePwd: true,
            showOrHideConfirmPwd: true,
            confirmDirty: false
        }
    }

    formRef = null;

    showOrHidePwd = (type) => {
        let key = `showOrHide${type}`;
        //@ts-ignore
        this.setState({
            [key]: !this.state[key]
        });
    }

    checkPwd = (rule, value, callback) => {
        // const form = this.props.form;
        let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,30}$/;
        if(value && this.state.confirmDirty) {
            this.formRef.validateFields(['confirmPwd'], { force: true });
        }
        if (value && !reg.test(value)) {
            callback("至少8个字符，必须包含大小写字母及数字")
        } 
        callback();
    }

    compareToFirstPassword = (rule, value, callback) => {
        // const { form } = this.props;
        if(value && value !== this.formRef.getFieldValue('password')) {
            callback('两次密码输入不一致！')
        } else {
            callback();
        }
    }

    setInputStatus = ({ type, status }, e) => {
        // const { form } = this.props;
        let key = `focus${replace(startCase(type), " ", "")}`;
        let result;
        if (status) {
            result = "up";
        } else {
            if (this.formRef.getFieldValue(type)) {
                result = "up";
            } else {
                result = ""
            }
        }
        if(type == "confirmPwd") {
            const { value } = e.target;
            this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        }

        //@ts-ignore
        this.setState({ [key]: result })
    }

    handleSubmit = (e) => {
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
                    confirmPassWord:sha256(md5(values.password)),
                    newPassWord:sha256(md5(values.password))
                },
                callback(data) {
                    if(data.errNo == 0){
                        changeStep(4);
                    } else {
                        message.error('重置密码失败，请稍候重试')
                    }
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        // const { getFieldDecorator } = this.props.form;

        return (
            <WrappedForgotPwdStepThirdCmp>
                <div className="title">重置密码</div>
                <Form ref={ (e) => this.formRef = e } className="stepThirdtForm">
                    <Form.Item className="formItem" style={{marginBottom: 36}} name="password" rules={[{
                            required: true, message: "请输入你的密码"
                        }, {
                            validator: this.checkPwd
                        }]}>
                        <div className="pwdBox">
                            <div className={"label " + this.state.focusPassword}>新密码</div>
                            <Input type={this.state.showOrHidePwd ? "password" : "text"} onFocus={this.setInputStatus.bind(this, {type: "password", status: true})} onBlur={this.setInputStatus.bind(this, {type: "password", status: false})} />
                            <div onClick={this.showOrHidePwd.bind(this, "Pwd")} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                        </div>
                    </Form.Item>
                    <Form.Item className="formItem" name="confirmPwd" rules={[{
                                required: true, message: "请确认密码"
                            }, {
                                validator: this.compareToFirstPassword
                            }]}>
                        <div className="pwdBox">
                            <div className={"label " + this.state.focusConfirmPwd}>确认新密码</div>
                            <Input type={this.state.showOrHideConfirmPwd ? "password" : "text"} onFocus={this.setInputStatus.bind(this, {type: "confirmPwd", status: true})} onBlur={this.setInputStatus.bind(this, {type: "confirmPwd", status: false})} />
                            <div onClick={this.showOrHidePwd.bind(this, "ConfirmPwd")} className={this.state.showOrHideConfirmPwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                        </div>
                    </Form.Item>
                    <Button className="submitBtn confirmBlueBtn" type="primary" onClick={this.handleSubmit}>确认重置</Button>
                </Form>
            </WrappedForgotPwdStepThirdCmp>
        )
    }
}

// const WrappedStepThird= Form.create<StepThirdProps>({ name: 'stepThird' })(StepThird);
// export default WrappedStepThird;