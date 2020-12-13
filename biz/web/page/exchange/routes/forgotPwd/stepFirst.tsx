import * as React from "react";
import { Row, Input, Button, Form, message } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrappedForgotPwdStepFirstCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

// interface StepFirstProps extends FormComponentProps {
//     userStore?: any
//     changeStep: any
// }
type StepFirstProps = {
    userStore?: any
    changeStep: any
}
type StepFirstState = {
    focusEmail: string
}
@inject('userStore')
@observer
export default class StepFirst extends React.Component<StepFirstProps, StepFirstState> {
    constructor(props: StepFirstProps) {
        super(props);
        this.state = {
            focusEmail: ""
        }
    }

    formRef = null;

    setInputStatus = (status) => {
        // const { form } = this.props;
        let result;
        if (status) {
            result = "up";
        } else {
            if (this.formRef.getFieldValue("email")) {
                result = "up";
            } else {
                result = ""
            }
        }
        //@ts-ignore
        this.setState({ focusEmail: result })
    }

    checkEmail = (rule, value, callback) => {
        let reg = /^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/;
        if (value && !reg.test(value)) {
            callback("请输入正确的邮箱格式！");
        } else {
            callback();
        }
    }
    
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

    handleSubmit = () => {
        const { userStore, changeStep } = this.props;
        this.formRef.validateFields().then((values) => {
            let that = this;
            ajax({
                url: 'forgotPwd.sendEmail',
                method: 'post',
                data: values,
                callback(data) {
                    if(data.errNo == 0){
                        userStore.changeUserInfo({email: that.formRef.getFieldValue("email")});
                        changeStep(2);
                    } else {
                        message.error('发送邮件失败，请稍候重试')
                    }
                }
            })
        })
    }

    render() {
        return (
            <WrappedForgotPwdStepFirstCmp>
                <div className="title">重置登录密码</div>
                <Form ref={(e) => this.formRef = e} className="stepFirstForm" name="stepFirst">
                    <Form.Item 
                        className="formItem email"
                        name="email"
                        rules={[{
                            required: true, message: "请输入你的邮箱"
                        }, {
                            validator: this.checkEmail
                        }]}
                    >
                        <div className="emailBox">
                            <div className={"label " + this.state.focusEmail}>邮箱</div>
                            <Input onFocus={this.setInputStatus.bind(this, true)} onBlur={this.setInputStatus.bind(this, false)} />
                        </div>
                    </Form.Item>
                    <Button className="submitBtn confirmBlueBtn" type="primary" onClick={this.handleSubmit}>提交</Button>
                </Form>
            </WrappedForgotPwdStepFirstCmp>
        )
    }
}

// const WrappedStepFirst= Form.create<StepFirstProps>({ name: 'stepFirst' })(StepFirst);
// export default WrappedStepFirst;