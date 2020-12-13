import * as React from "react";
import { Row, Col, Button, Divider, Form, Modal } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperFaceCmp } from './styled';

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
    formRef = null;
    handleSubmit = () => {


    }


    render() {
       
        return (
            <WrapperFaceCmp>
                <Form ref={(e) => this.formRef = e} >
                    <Row justify="center" className="title">
                        <Col>请完成人脸认证</Col>
                    </Row>

                    <Row justify="center" >
                        <Col className="content">
                            <Row className="tips">
                                请在手机上打开Hashkey APP通过“扫一扫”扫描下方二维码进行人脸信息认证。
                            </Row>
                            <Row justify="center">
                                <Col className="content-left"> <Qrcode value={this.state.qrcode} size={124} /></Col>
                                <Col className="content-right">
                                    <div className="tips-right">没有Hashkey手机客户端？</div>
                                    <a href="">下载>></a>
                                    <div className="intro">“扫一扫”位于Hashkey APP中“我的”和“首页”页面中。<br />
                                        如果您找不到这个功能，请更新您APP至最新版本。
                                    </div>
                                </Col>
                            </Row>
                            <Row justify="center" className="unUse">
                                <Col>
                                    <div>无法使用APP？ <a>电脑认证</a>（APP暂未上线， 请使用电脑认证）</div>
                                </Col>
                            </Row>
                            <Row justify="center" className="btn">
                                <Col><Button onClick={this.handleSubmit}>我已在手机上完成</Button></Col>
                            </Row>

                        </Col>
                    </Row>
                </Form>
            </WrapperFaceCmp>

        )
    }
}