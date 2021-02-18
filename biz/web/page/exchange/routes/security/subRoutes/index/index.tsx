import * as React from "react";
import { WrapperContent, Content } from './styled';
import { Row, Col, Button, Switch, List } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");
const googleIcon = require("@webExchangeImgs/userCenter/twofa/google.png");
const warnIcon = require("@webExchangeImgs/userCenter/warn.png");
const check1 = require("@webExchangeImgs/security/check1.png");
const check2 = require("@webExchangeImgs/security/check2.png");
const Item = List.Item;

type Indexprops = {
    history: any
}
type IndexState = {
    email: string,
    identityStatus: any,
    whiteListStatus: boolean,
    securityGrade: number,
    MFA: Array<string>,
    activityList: Array<any>
}
export default class Index extends React.Component<Indexprops, IndexState> {
    constructor(props: any) {
        super(props);
        this.state = {
            MFA: [],
            email: '',
            identityStatus: '2', //1->开启,2->关闭
            whiteListStatus: false,
            securityGrade: 0,
            activityList: []
        }
    }

    componentDidMount() {
        this.queryInfo();
        this.getSecurityGrade();
    }

    queryInfo = () => {
        ajax({
            url: 'security.getAccountInfo',
            data: {},
            handlerErr:true,
            callback: (data) => {
                // let email = data.email && data.email.replace(/^(\w{2})(\w+)@/,`$1****@`);    //4个*号
                // let email = data.email && data.email.replace(/^(\w{2})(\w+)@/, (a, b, c) => { return `${b}${c.replace(/\w/g, '*')}@`; });    //补全*号
                this.setState({
                    MFA: data.isMFA || [],
                    // email,
                    identityStatus: data.identityStatus, //1->开启,2->关闭
                    whiteListStatus: data.whiteStatus,
                    activityList: data.activityList
                })
            }
        })
    }

    getSecurityGrade = () => {
        let securityGrade = 0;
        if (this.state.MFA.length > 0) {
            securityGrade++;
        }
        if (this.state.identityStatus == '1') {
            securityGrade++;
        }
        if (this.state.whiteListStatus) {
            securityGrade++;
        }
        this.setState({ securityGrade });
    }

    handleChange = (type) => {
        switch (type) {
            case 'GA':
                let GAStatus = this.state.MFA.includes('GA');
                if (GAStatus) {
                    this.props.history.push('/security/mfa/gaClose');
                } else {
                    this.props.history.push('/security/mfa/gaBind');
                }
                break;
            case 'phone':
                let smsStatus = this.state.MFA.includes('SMS');
                if (smsStatus) {
                    this.props.history.push('/security/mfa/phoneClose');
                } else {
                    this.props.history.push('/security/mfa/phoneBind');
                }
                break;
            case 'basicInfo':
                this.props.history.push('/security/basicInfo');
                break;
            case 'pwd':
                this.props.history.push('/security/pwdMgt');
                break;
            case 'device':
                this.props.history.push('/security/device');
                break;
            case 'identity':
                this.props.history.push('/security/kyc');
                break;
            case 'whiteList':
                this.props.history.push('/security/whiteList');
                break;
            case 'disableAccount':
                // this.props.history.push('/security');
                break;
            case 'more':
                this.props.history.push('security/accountActivity')

                break;
        }
    }

    handleSwitchChange = (status) => {
        this.setState({
            whiteListStatus: status
        }, () => {
            this.getSecurityGrade();
        });
    }

    render() {
        const data = [
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            }
        ]
        let activityList = this.state.activityList || data;
        return (
            <WrapperContent>
                <div className='content'>
                    <Row className='title'>安全等级</Row>
                    <Row className='grade'>
                        <Col span={3} className={this.state.MFA.length > 0 ? 'item active' : 'item'}>
                            <div className={this.state.securityGrade > 0 ? 'line active' : 'line'}></div>
                            <div className='text'>
                                {this.state.MFA.length ? <img src={check1}/> :<img src={check2}/>}
                                <span onClick={!this.state.MFA.length ? this.handleChange.bind(this, 'GA') : null}>启用2FA</span>
                            </div>
                        </Col>
                        <Col span={3} className={this.state.identityStatus == '1' ? 'item active' : 'item'} style={{ marginLeft: 4 }}>
                            <div className={this.state.securityGrade > 1 ? 'line active' : 'line'}></div>
                            <div className='text'>
                                {this.state.identityStatus == '1' ? <img src={check1}/> :<img src={check2}/>}
                                <span onClick={this.state.identityStatus != '1' ? this.handleChange.bind(this, 'identity') : null}>身份认证</span>
                            </div>
                        </Col>
                        <Col span={3} className={this.state.whiteListStatus ? 'item active' : 'item'} style={{ marginLeft: 4 }}>
                            <div className={this.state.securityGrade > 2 ? 'line active' : 'line'}></div>
                            <div className='text'>
                                {this.state.whiteListStatus ? <img src={check1}/> :<img src={check2}/>}
                                <span onClick={!this.state.whiteListStatus ? this.handleSwitchChange.bind(this, true) : null}>开启提现白名单</span>
                            </div>
                        </Col>
                    </Row>
                    <Content>
                        <Row style={{ marginTop: 60 }}>
                            <Col span={11} style={{ width: 620 }}>
                                <div className='block border'>
                                    <Row style={{ marginTop: 25 }}>
                                        <span className='title' style={{ fontSize: 24 }}>2FA</span>
                                    </Row>
                                    <Row className='twofa' justify="space-between" style={{ borderBottom: '1px #E6E6E6 solid' }}>
                                        <Col span={18}>
                                            <Row>
                                                <Col span={2}>
                                                    <img src={googleIcon} alt="" />
                                                </Col>
                                                <Col span={12} offset={1}>
                                                    <p className='type'>谷歌验证</p>
                                                    <p className='tip'>用于登录、提币、找回密码</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Button className={this.state.MFA.includes('GA') ? 'btn' : 'btn active'} onClick={this.handleChange.bind(this, 'GA')}>
                                                {this.state.MFA.includes('GA') ? '关闭' : '启用'}
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row className='twofa' justify="space-between">
                                        <Col span={18}>
                                            <Row>
                                                <Col span={2}>
                                                    <img src={phoneIcon} alt="" />
                                                </Col>
                                                <Col span={12} offset={1}>
                                                    <p className='type'>手机验证</p>
                                                    <p className='tip'>用于登录、提币、找回密码</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Button className={this.state.MFA.includes('SMS') ? 'btn' : 'btn active'} onClick={this.handleChange.bind(this, 'phone')}>
                                                {this.state.MFA.includes('SMS') ? '关闭' : '启用'}
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={11} style={{ width: 620, marginLeft: 20 }}>
                                <div className='block'>
                                    <Row className='small-block' justify="space-between" style={{ height: 80 }}>
                                        <Col span={10}><span className='title'>身份认证</span></Col>
                                        <Col>
                                            <Button className='btn active' onClick={this.handleChange.bind(this, 'identity')}>{this.state.identityStatus == '1' ? '已认证' : '去认证'}</Button>
                                        </Col>
                                    </Row>
                                    <Row className='small-block' justify="space-between" style={{ height: 160, marginTop: 20, padding: '30px 40px' }}>
                                        <Col span={12}>
                                            <p className='type'>提现白名单</p>
                                            <p className='tip'>开启后仅允许往白名单账户内提现</p>
                                            <p className='ask' style={{ marginTop: 20 }}>
                                                <span style={{ position: 'relative', top: 2 }}>是否开启白名单</span>
                                                <img src={warnIcon} alt="" style={{ marginLeft: 4 }} />
                                                <Switch checkedChildren='ON' unCheckedChildren='OFF' checked={this.state.whiteListStatus} className='switch' onChange={this.handleSwitchChange.bind(this)}></Switch>
                                            </p>
                                        </Col>
                                        <Col>
                                            <Button className='btn active' onClick={this.handleChange.bind(this, 'whiteList')}>管理</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col span={11} style={{ width: 620 }}>
                                <div className='block'>
                                    <div className='small-block' style={{ height: 160 }}>
                                        <Row justify="space-between" style={{ height: 55, borderBottom: '1px #E6E6E6 solid' }}>
                                            <Col span={10}>
                                                <p className='type'>基础资料</p>
                                            </Col>
                                            <Col>
                                                {/* <span className='email'>{this.state.email}</span> */}
                                                <Button className='btn' onClick={this.handleChange.bind(this, 'basicInfo')}>更换</Button>
                                            </Col>
                                        </Row>
                                        <Row justify="space-between" style={{ height: 60, paddingTop: 25 }}>
                                            <Col span={10}>
                                                <p className='type'>密码管理</p>
                                            </Col>
                                            <Col>
                                                <Button className='btn' onClick={this.handleChange.bind(this, 'pwd')}>修改</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Row className='small-block' justify="space-between" style={{ height: 80, marginTop: 20 }}>
                                        <Col span={10}><span className='title'>登录设备管理</span></Col>
                                        <Col>
                                            <Button className='btn' onClick={this.handleChange.bind(this, 'device')}>管理</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={11} style={{ width: 620, marginLeft: 20 }}>
                                <div className='block border'>
                                    <Row justify="space-between" style={{ height: 74, marginTop: 30, borderBottom: '1px #E6E6E6 solid' }}>
                                        <Col span={10}>
                                            <p className='type'>帐户活动</p>
                                            <p className='tip'>帐户异常？<span style={{ color: '#00A0D2', cursor: 'pointer' }} onClick={this.handleChange.bind(this, 'disableAccount')}>禁用账户</span></p>
                                        </Col>
                                        <Col><Button className='btn' onClick={this.handleChange.bind(this, 'more')}>更多</Button></Col>
                                    </Row>
                                    <div className='list'>
                                        {
                                            activityList && activityList.map((item, index) => {
                                                return <Row justify="space-between" className='item' key={index}>
                                                    <Col span={6}>{item.operateTime}</Col>
                                                    <Col span={2} offset={1}>{item.source}</Col>
                                                    <Col span={3} offset={2}>{item.activityName}</Col>
                                                    <Col span={3} offset={2} className={item.operateStatus == 'success' ? '' : 'error'}>{item.operateStatus}</Col>
                                                    <Col span={4}>{item.ipAddress}</Col>
                                                </Row>
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </div>
            </WrapperContent>
        );
    }
}