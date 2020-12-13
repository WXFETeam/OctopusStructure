import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const finish = require("@webExchangeImgs/mail/finish.png");

type FinishProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type FinishState = {
    display: any;
}

@inject('userStore')
@observer
export default class Finish extends React.Component<FinishProps, FinishState> {
    constructor(props: FinishProps) {
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
                            <img className="origin-mail" src={finish} alt=""/>
                        </Row>
                        <Row style={{paddingTop:"30px"}} justify="center">
                            <Col className="title">已更换邮箱</Col>
                        </Row>
                        <Row style={{padding:"32px 40px 0"}} justify="center">
                            <Col>您已成功完成邮箱变更，您可在账户中心进行更多安全操作</Col>
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