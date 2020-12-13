import * as React from "react";
import { Row, Col } from 'antd';
import { WrappedForgotPwdStepSecondCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const emailPic = require("@webExchangeImgs/email.png");

type StepSecondProps = {
    changeStep: any,
    userStore?: any
}

@inject('userStore')
@observer
export default class StepSecond extends React.Component<StepSecondProps, {}> {
    constructor(props: StepSecondProps) {
        super(props);
    }

    resendEmail = () => {
        ajax({
            url: 'forgotPwd.sendEmail',
            method: 'post',
            data: {email: this.props.userStore.userInfo.email},
            callback(data) {
                console.log("resend success")
            }
        })
    }

    render() {
        const { userStore } = this.props;
        let mailTo = `mailto:${userStore.userInfo.email}`;

        return (
            <WrappedForgotPwdStepSecondCmp>
                <img src={emailPic} className="emailPic" />
                <div className="title">需要邮件确认</div>
                <div className="content">我们已经给你的邮箱发送了一封重置密码的邮件，请按照邮件内容进行下一步操作。</div>
                <a className="gotoEmail" href={mailTo}>去邮箱确认 &#187;</a>
                <div className="line"></div>
                <div className="ops">
                    <span>未收到邮件？</span>
                    <a onClick={this.resendEmail}>重新发送</a>
                </div>
            </WrappedForgotPwdStepSecondCmp>
        )
    }
}

