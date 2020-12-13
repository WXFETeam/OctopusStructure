import * as React from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, message } from 'antd';
import { WrappedRegisterSecondStepCmd } from './styled';
import { observer, inject } from 'mobx-react/index';

const emailPic = require("@webExchangeImgs/email.png");

type RegisterSecondStepProps = {
    userStore?: any
    history?: any
}

type RegisterSecondStepState = {
    codeNum: string
}

@(withRouter as any)
@inject('userStore')
@observer
export default class RegisterSecondStep extends React.Component<RegisterSecondStepProps, RegisterSecondStepState> {
    numInput: any
    constructor(props: RegisterSecondStepProps) {
        super(props);
        this.state = {
            codeNum: ""
        }
    }

    // componentDidMount() {
    //     this.resendEmail();
    // }

    setInputFocus = () => {
        this.numInput.focus();
        var maxLen = this.state.codeNum.length;
        this.numInput.setSelectionRange(maxLen, maxLen);
    }

    changeCode = (e) => {
        e.persist();
        let that = this;
        let codeNum = e.target.value.slice(0,6);
        this.setState({codeNum});
        if(codeNum.length == 6) {
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
            })
        } 
    }

    resendEmail = () => {
        ajax({
            url: 'register.resendEmailCode',
            method: 'post',
            data: {userId: this.props.userStore.userInfo.userId},
            callback(data) {
                console.log("resend success")
            }
        })
    }

    render() {
        const { userStore } = this.props;
        let mailTo = `mailto:${userStore.userInfo.email}`;
        return (
            <WrappedRegisterSecondStepCmd>
                <img src={emailPic} className="emailPic" />
                <div className="title">邮箱</div>
                <div className="content">我们已向如下邮箱发送了一封邮件******@***.com请输入邮件内的验证码开始使用Hashkey!</div>
                <a className="gotoEmail" href={mailTo}>去邮箱确认 &#187;</a>
                <div className="line"></div>
                <div className="ops">
                    <div className="prompt">验证码</div>
                    <a onClick={this.resendEmail}>重发邮件</a>
                </div>
                <Row className="code" justify="space-between" onClick={this.setInputFocus}>
                <Col span={3} className={this.state.codeNum.length > 0 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(0, 1)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 1 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(1, 2)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 2 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(2, 3)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 3 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(3, 4)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 4 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(4, 5)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 5 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(5, 6)}</Col>
                    <input style={{ opacity: 0 }} type="text" ref={refs => this.numInput = refs} onChange={this.changeCode} value={this.state.codeNum} />
                </Row>
            </WrappedRegisterSecondStepCmd>
        )
    }
}
