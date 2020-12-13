import * as React from "react";
import { Row, Col, Button, Divider, Form, Modal } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperSuccessCmp } from './styled';
const successIcon = require("@webExchangeImgs/security/success.png");
import Qrcode from 'qrcode.react';

type IndexProps = {
    userStore?: any
}

type IndexState = {
    qrcode: any,
}

@inject('userStore')
@observer
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            qrcode: '',
        }
    }



    render() {

        return (
            <WrapperSuccessCmp>
                <Row justify="center">
                    <Col>
                        <div className="content">
                            <Row justify="center">
                                <Col><img src={successIcon} /></Col>
                            </Row>
                            <Row className="title"><p>提交成功</p></Row>
                            <div className="tips">
                                <div>您的人脸信息认证成功，请耐心等待结果。</div>
                                <div>我们会在7-10个工作日完成审核，审核结果会发送您的邮箱，</div>
                                <div>请留意您的邮件。</div>
                            </div>
                        </div>

                    </Col>
                </Row>

            </WrapperSuccessCmp>

        )
    }
}