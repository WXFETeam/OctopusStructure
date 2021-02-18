import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const audit = require("@webExchangeImgs/mail/audit.png");

type AuditProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type AuditState = {
    display: any;
}

@inject('userStore')
@observer
export default class Audit extends React.Component<AuditProps, AuditState> {
    constructor(props: AuditProps) {
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
    render() {
        const { history } = this.props;

        return (
            <WrapperIndexCmp>
                <Row justify="center">
                    <Col className="wrapper">
                        <Row style={{paddingTop:"60px"}} justify="center">
                            <img className="origin-mail" src={audit} alt=""/>
                        </Row>
                        <Row style={{paddingTop:"30px"}} justify="center">
                            <Col className="title">等待审核</Col>
                        </Row>
                        <Row style={{padding:"32px 40px 0"}} justify-content="center">
                            <Col style={{width:"100%"}}>
                                <div style={{textAlign:"center"}}>您已成功申请变更邮箱，</div>
                                <div style={{textAlign:"center"}}>我们会在7-10个工作日为您完成审核，请你耐心等待邮件通知。</div>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"60px"}} justify="center">
                            <Button type="link">前往账户中心>></Button>
                        </Row>
                    </Col>
                </Row>
            </WrapperIndexCmp>
        )
    }
}