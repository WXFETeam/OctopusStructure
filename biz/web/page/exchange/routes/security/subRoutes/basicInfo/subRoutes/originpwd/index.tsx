import * as React from "react";
import { Row, Col, Form, Button, Card, Divider, Menu, Dropdown, Radio, Slider, Input, message } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';

type OriginPwdProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type OriginPwdState = {
    display: any;
    showOrHidePwd: boolean
}

@inject('userStore')
@observer
export default class OriginPwd extends React.Component<OriginPwdProps, OriginPwdState> {
    constructor(props: OriginPwdProps) {
        super(props);
        this.state = {
            display: 'down',
            showOrHidePwd: true
        }
    }

    showOrHidePwd = () => {
        this.setState({
            showOrHidePwd: !this.state.showOrHidePwd
        });
    }

    onFinish = values => {
        let that = this;

        let params = {
            email: values.email ? values.email:"",
            password: values.password ? values.password:""
        }

        ajax({
            url: 'security.authPassword',
            data: params,
            isFullData: true,
            callback(json) {
                if(json.errNo == "0"){
                    // message.error(json.errMsg)
                    that.props.history.push('/security/basicInfo/newpwd')
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
                            <Col className="title">原邮箱密码验证</Col>
                        </Row>
                        <Row>
                            <Col className="wrapper">
                                <Row>
                                    <Form className="form" onFinish={this.onFinish}>
                                        <Form.Item style={{marginTop:"60px"}} name="email">
                                            <Input placeholder="原邮箱" />
                                        </Form.Item>
                                        <Form.Item style={{marginTop:"60px"}} name="password">
                                            <div>
                                                <Input type={this.state.showOrHidePwd ? "password" : "text"} className="password" placeholder='密码' />
                                                <div onClick={this.showOrHidePwd} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                                            </div>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button className="next-btn" type="primary" htmlType="submit">下一步</Button>
                                        </Form.Item>
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