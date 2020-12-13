import * as React from "react";
import { Row, Col, Form, Button, Card, Divider, Menu, Dropdown, Radio, Slider, Input } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
import Qrcode from 'qrcode.react';
const originmail = require("@webExchangeImgs/mail/originmail.png");

type FaceVerifyProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type FaceVerifyState = {
    display: any;
    showOrHidePwd: boolean
    qrcode:any
}

@inject('userStore')
@observer
export default class FaceVerify extends React.Component<FaceVerifyProps, FaceVerifyState> {
    constructor(props: FaceVerifyProps) {
        super(props);
        this.state = {
            display: 'down',
            showOrHidePwd: true,
            qrcode:""
        }
    }

    clickArrow(tag) {
        this.setState({
            display: tag,
        });
    }

    showOrHidePwd = () => {
        this.setState({
            showOrHidePwd: !this.state.showOrHidePwd
        });
    }

    render() {
        const { history } = this.props;

        return (
            <WrapperIndexCmp>
                <Row justify="center">
                    <Col>
                        <Row style={{paddingBottom:"48px"}} justify="center">
                            <Col className="title">请完成人脸验证</Col>
                        </Row>
                        <Row>
                            <Col className="wrapper">
                                <Row style={{paddingTop:"60px"}} className="inner-title" justify="center">
                                   请在手机上打开Hashkey APP通过“扫一扫”扫描下方二维码进行人脸信息认证。
                                </Row>
                                <Row style={{paddingTop:"80px"}} justify="center">
                                   <Col>
                                        <Qrcode value={this.state.qrcode} size={124} />
                                   </Col>
                                   <Col style={{marginLeft:"60px"}}>
                                        <Row className="inner-text">没有Hashkey手机客户端？</Row>
                                        <Row style={{paddingTop:"12px"}}><u className="download-btn">下载>></u></Row>
                                        <Row style={{paddingTop:"12px"}} className="inner-text">“扫一扫”位于Hashkey APP中“我的”和“首页”页面中。</Row>
                                        <Row className="inner-text">如果您找不到这个功能，请更新您APP至最新版本。</Row>
                                   </Col>
                                </Row>
                                <Row className="auth-btn" style={{paddingTop:"88px"}} justify="center" align="middle">
                                    无法使用APP？<Button type="link">电脑认证</Button>（APP暂未上线，请使用电脑认证）
                                </Row>
                                <Row className="finish-btn" style={{paddingTop:"40px"}} justify="center">
                                    <Button>我已在手机上完成</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </WrapperIndexCmp>
        )
    }
}