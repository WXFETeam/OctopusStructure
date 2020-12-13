import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
import SetEveryTime from '../modal/setEveryTime';
import SetTime from '../modal/setTime';


type IndexProps = {
    userStore?: any,
    history?: any,
}

type IndexState = {
    setEveryTimeModal: any,
    setTimeModal: any
}

@inject('userStore')
@observer
@renderBreadcrumbs
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = { 
            setEveryTimeModal: false,
            setTimeModal: false
        }
    }


    onChange = (e) => {
        if (e.target.value == 1) {
            this.setState({
                setEveryTimeModal: true,
            });
        } else if (e.target.value == 2) {
            this.setState({
                setTimeModal: true,
            });
        }

    }

    render() {
        const { history } = this.props;

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            fontSize: '14px',
            color: 'rgba(50,54,62,1)'
        };
        const marks = {
            0: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>0h</strong>,
            },
            33.33: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>2h</strong>,
            },
            66.66: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>4h</strong>,
            },
            100: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>6h</strong>,
            },
        }
        return (
            <WrapperIndexCmp>
                <Row justify="center">
                    <Col className="title">密码管理</Col>
                </Row>
                <Row justify="center" className="content">
                    <Card style={{ width: 1260 }}>
                        <Row justify="space-between">
                            <Col>
                                <div className="pwTitle">登录密码</div>
                                <div className="pwIntro">资金密码将用于账号登录、账号安全设置验证</div>
                            </Col>
                            <Button onClick={() => {
                                this.props.history.push({
                                    pathname: '/security/pwdMgt/login',
                                })
                            }}>修改</Button>
                        </Row>
                        <Divider />
                        <Row justify="space-between">
                            <Col>
                                <div className="pwTitle">资金密码</div>
                                <div className="pwIntro">资金密码将用于资产转出</div>
                                <div>
                                    <Radio.Group onChange={this.onChange}>
                                        <Radio style={radioStyle} value={1}>
                                            每次交易都需要输入密码
                                          </Radio>
                                        <Radio style={radioStyle} value={2}>
                                            密码校验正确后在2小时内不再验证
                                          </Radio>
                                    </Radio.Group>
                                </div>

                            </Col>
                            <Button onClick={() => {
                                this.props.history.push({
                                    pathname: '/security/pwdMgt/financial',
                                })
                            }}>设置</Button>
                        </Row>
                        <Divider />
                        <Row justify="space-between">
                            <Col>
                                <div className="pwTitle">交易密码</div>
                                <div className="pwIntro">交易密码将用于数字货币交易</div>
                                <div>
                                    <Radio.Group onChange={this.onChange}>
                                        <Radio style={radioStyle} value={1}>
                                            每次交易都需要输入密码
                                          </Radio>
                                        <Radio style={radioStyle} value={2}>
                                            密码校验正确后在2小时内不再验证
                                          </Radio>
                                    </Radio.Group>
                                </div>
                            </Col>
                            <Button onClick={() => {
                                this.props.history.push({
                                    pathname: '/security/pwdMgt/exchange',
                                })
                            }}>设置</Button>
                        </Row>
                        {/* {
                            this.state.display == 'down' ?
                                <div className="setting" onClick={() => { this.clickArrow('up') }}><span>高级设置</span> <span className="downIcon"></span></div> :
                                <div>
                                    <div className="setting" onClick={() => { this.clickArrow('down') }}><span>高级设置</span> <span className="upIcon"></span></div>
                                    <div>
                                        <Radio.Group>
                                            <Radio style={radioStyle} value={1}>
                                                每次交易都需要输入密码
                                          </Radio>
                                            <Radio style={radioStyle} value={2}>
                                                密码校验正确后在2小时内不再验证
                                          </Radio>
                                        </Radio.Group>
                                    </div>
                                    <div>
                                        <Slider marks={marks} defaultValue={66.66} />
                                    </div>
                                </div>
                        } */}

                    </Card>
                </Row>
                {
                    this.state.setEveryTimeModal == true ? <SetEveryTime _close={() => this.setState({ setEveryTimeModal: false })} /> : ""
                }
                {
                    this.state.setTimeModal == true ? <SetTime  _close={() => this.setState({ setTimeModal: false })} /> : ""
                }
            </WrapperIndexCmp>
        );
    }
}