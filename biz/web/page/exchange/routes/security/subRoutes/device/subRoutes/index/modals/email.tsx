import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider, Modal } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperEmailCmp } from './styled';
const originmail = require("@webExchangeImgs/mail/originmail.png");

type EmailProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
    _close:any
}

type EmailState = {
    display: any;
}

@inject('userStore')
@observer
export default class Email extends React.Component<EmailProps, EmailState> {
    constructor(props: EmailProps) {
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

    handleCancel = () => {
        this.props._close();
    }

    render() {
        const { history } = this.props;

        return (
            <Modal
                visible
                centered
                maskClosable
                closable={false}
                title={null}
                onCancel={this.handleCancel}
                footer={null}
                width={518}
            >
                <WrapperEmailCmp>
                    <Row justify="center">
                        <Col className="wrapper">
                            <Row style={{ paddingTop: 36 }} justify="center">
                                <img className="origin-mail" src={originmail} alt="" />
                            </Row>
                            <Row style={{ paddingTop: "30px" }} justify="center">
                                <Col className="title">需要邮件确认</Col>
                            </Row>
                            <Row style={{ padding: "32px 16px 0", textAlign:'center' }}>
                                <Col>我们监测到您在一台新的设备上登录，为保证账户安全，已向如下邮箱发送了一封邮件***@***.com，请按照邮件内容进行下一步操作。 </Col>
                            </Row>
                            <Row style={{ paddingTop: "15px" }} justify="center">
                                <Button type="link" className='link'>去邮箱确认 >></Button>
                            </Row>
                            <Row style={{ paddingTop: "20px" }} justify="center">

                            </Row>
                            <Row style={{ paddingTop: "20px", borderTop:'1px solid #E6E6E6'}} justify="center" align="middle">
                                <span>未收到邮件？</span>
                                <Button type="link" className='link'>重新发送</Button>
                            </Row>
                        </Col>
                    </Row>
                </WrapperEmailCmp>
            </Modal>
        )
    }
}