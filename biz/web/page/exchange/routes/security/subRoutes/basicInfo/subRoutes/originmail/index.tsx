import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const originmail = require("@webExchangeImgs/mail/originmail.png");

type OriginMailProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type OriginMailState = {
    display: any;
}

@inject('userStore')
@observer
export default class OriginMail extends React.Component<OriginMailProps, OriginMailState> {
    constructor(props: OriginMailProps) {
        super(props);
        this.state = {
            display: 'down'
        }
    }

    clickArrow(tag) {
        this.setState({
            display: tag,
        });
    }

    sendAgain(){
        let that = this;
        ajax({
            url: 'security.sendUpdateEmail',
            data:{
                email:'1964418121@qq.com'
            },
            callback(json) {
                console.log(json.errNo);
                if(json.errNo == "0"){
                    that.props.history.push('/security/basicInfo/originmail')
                }
            }
        })
    }

    render() {
        const { history } = this.props;

        return (
            <WrapperIndexCmp>
                <Row justify="center">
                    <Col className="wrapper">
                        <Row style={{paddingTop:"60px"}} justify="center">
                            <img className="origin-mail" src={originmail} alt=""/>
                        </Row>
                        <Row style={{paddingTop:"30px"}} justify="center">
                            <Col className="title">原邮箱验证</Col>
                        </Row>
                        <Row style={{padding:"32px 40px 0",textAlign:"center"}} justify="center">
                            <Col>我们已向如下邮箱发送了一封邮件***@***.com，请按照邮件内容进行下一步操作。</Col>
                        </Row>
                        <Row className="confirm-btn" style={{padding:"20px 0 30px"}} justify="center">
                            <Button type="link">去邮箱确认>></Button>
                        </Row>
                        <Row style={{paddingTop:"30px"}} justify="center" align="middle">
                            <span>未收到邮件？</span>
                            <Button type="link" onClick={this.sendAgain.bind(this)}>重新发送</Button>
                        </Row>
                    </Col>
                </Row>
            </WrapperIndexCmp>
        )
    }
}