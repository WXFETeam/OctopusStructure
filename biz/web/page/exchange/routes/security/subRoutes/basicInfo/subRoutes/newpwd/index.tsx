import * as React from "react";
import { Row, Col, Form, Button, Card, Divider, Menu, Dropdown, Radio, Slider, Input, message } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const originmail = require("@webExchangeImgs/mail/originmail.png");

type NewPwdProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type NewPwdState = {
    display: any;
    showOrHidePwd: boolean;
    showOrHidePwdConf: boolean;
}

@inject('userStore')
@observer
export default class NewPwd extends React.Component<NewPwdProps, NewPwdState> {
    constructor(props: NewPwdProps) {
        super(props);
        this.state = {
            display: 'down',
            showOrHidePwd: true,
            showOrHidePwdConf: true
        }
    }

    clickArrow(tag) {
        this.setState({
            display: tag,
        });
    }

    showOrHidePwd = () => {
        this.setState({
            showOrHidePwd: !this.state.showOrHidePwd,
        });
    }
    showOrHidePwdConf = () => {
        this.setState({
            showOrHidePwdConf: !this.state.showOrHidePwdConf,
        });
    }

    onFinish = values => {
        let that = this;

        let params = {
            email: values.email ? values.email:"",
            password: values.password ? values.password:""
        }

        ajax({
            url: 'security.updateEmail',
            data: params,
            isFullData: true,
            callback(json) {
                if(json.errNo == "0"){
                    message.error('success')
                    that.props.history.push('/security/basicInfo/verify')
                }else{
                    message.error(json.errMsg)
                }
            }
        })
    }

    render() {
        const { history } = this.props;

        return (
            <WrapperIndexCmp>
                <Row justify="center">
                    <Col>
                        <Row style={{paddingBottom:"48px"}} justify="center">
                            <Col className="title">更换邮箱</Col>
                        </Row>
                        <Row>
                            <Col className="wrapper">
                                <Row>
                                    <Form className="form" onFinish={this.onFinish}>
                                        <Form.Item style={{marginTop:"60px"}} name="email">
                                            <Input placeholder="新邮箱" />
                                        </Form.Item>
                                        <Form.Item style={{marginTop:"60px"}} name="emailConfirm">
                                            <Input placeholder="确认新邮箱" />
                                        </Form.Item>
                                        <Form.Item style={{marginTop:"60px"}} name="password">
                                            <div>
                                                <Input type={this.state.showOrHidePwd ? "password" : "text"} className="password" placeholder='新密码' />
                                                <div onClick={this.showOrHidePwd} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                                            </div>
                                        </Form.Item>
                                        <Form.Item style={{marginTop:"60px"}} name="passwordConfirm">
                                            <div>
                                                <Input type={this.state.showOrHidePwdConf ? "password" : "text"} className="password" placeholder='确认新密码' />
                                                <div onClick={this.showOrHidePwdConf} className={this.state.showOrHidePwdConf ? "pwdStatus show" : "pwdStatus hide"}></div>
                                            </div>
                                        </Form.Item>
                                        <Button className="next-btn" type="primary" htmlType="submit">下一步</Button>
                                    </Form>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </WrapperIndexCmp>
        )
    }
}