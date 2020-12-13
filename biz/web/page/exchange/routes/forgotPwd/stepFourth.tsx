import * as React from "react";
import { Row, Col, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { WrappedForgotPwdStepFourthCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type StepFourthState = {
    codeNum: string
}
type StepFourthProps = {
    history?: any
}
@(withRouter as any)
export default class StepFourth extends React.Component<StepFourthProps, StepFourthState> {
    numInput: any
    constructor(props: any) {
        super(props);
        this.state = {
            codeNum: ""
        }
    }

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
                data:{ code: codeNum },
                callback(res) {
                    // 错误处理？
                    that.props.history.push('/login')
                }
            })
        } 
    }

    render() {
        return (
            <WrappedForgotPwdStepFourthCmp>
                <Row className="title">二次验证</Row>
                <Row className="content">请输入谷歌验证App中的6位数验证码</Row>
                <Row className="code" justify="space-between" onClick={this.setInputFocus}>
                    <Col span={3} className={this.state.codeNum.length > 0 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(0, 1)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 1 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(1, 2)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 2 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(2, 3)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 3 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(3, 4)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 4 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(4, 5)}</Col>
                    <Col span={3} className={this.state.codeNum.length > 5 ? "inputItem active" : "inputItem"}>{this.state.codeNum.slice(5, 6)}</Col>
                    <input style={{ opacity: 0 }} type="text" ref={refs => this.numInput = refs} onChange={this.changeCode} value={this.state.codeNum} />
                </Row>
                <Row justify="end">
                    <a>丢失谷歌验证?</a>
                </Row>
            </WrappedForgotPwdStepFourthCmp>
        )
    }
}

