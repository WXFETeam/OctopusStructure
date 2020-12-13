import * as React from "react";
import { Row, Col, Button, Select, Input, message } from 'antd';
import { WrapperPhoneCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const { Option } = Select;

type PhoneProps = {
    userStore?: any,
    langStore?: any,
    history?:any
}

type PhoneState = {
    smsCode: string,
    gaCode: string,
    codeType: string,
    loginPwd: string,
    country: string,
    showOrHidePwd: boolean
}

@inject('userStore', 'langStore')
@observer
@renderBreadcrumbs

export default class PhoneClose extends React.Component<PhoneProps, PhoneState> {
    constructor(props: PhoneProps) {
        super(props);
        this.state = {
            smsCode: '',
            gaCode: '',
            loginPwd: '',
            country: '',
            codeType: '3', // '1'->sms,'2'->ga,'3'->both
            showOrHidePwd: true
        };
    }

    handleSubmit = () => {
        let { loginPwd, smsCode } = this.state;
        ajax({
            url: 'MFA.mfaModify',
            data: {
                smsCode,
                password: loginPwd,
                type: 'sms',
                state: 2  // 1->开启,2->关闭
            },
            isFullData:true,
            callback:(data)=> {
                if(data.errNo == '0'){
                    message.success('已关闭短信验证');
                    setTimeout(() => {
                        this.props.history.push('/security');
                    }, 2000);
                }
            }
        })
    }

    sendSMS=()=>{
        ajax({
            url: 'common.sendSMS',
            data: { phone:'' },
            callback:(data)=> {
                
            }
        })
    }

    showOrHidePwd = () => {
        this.setState({
            showOrHidePwd: !this.state.showOrHidePwd
        });
    }

    changeCode = (type: string, e: any) => {
        let code = e.target.value;
        const codeType = this.state.codeType;
        if (type === 'sms') {
            this.setState({
                smsCode: code
            });
        } else if (type === 'ga') {
            this.setState({
                gaCode: code
            });
        }
    }

    getInputCodeDom = (type: string) => {
        let code: string = '';
        if (type === 'sms') {
            code = this.state.smsCode;
        } else if (type === 'ga') {
            code = this.state.gaCode;
        }
        return <Row className="inputBox">
            <input className="input-number" maxLength={6} value={code} onChange={this.changeCode.bind(this, type)} />
            <Col className={status || code.length > 0 ? "firstCol hasInput" : "firstCol"}>{code.length > 0 ? code.substr(0, 1) : ''}</Col>
            <Col className={code.length > 1 ? "hasInput" : ""}>{code.length > 1 ? code.substr(1, 1) : ''}</Col>
            <Col className={code.length > 2 ? "hasInput" : ""}>{code.length > 2 ? code.substr(2, 1) : ''}</Col>
            <Col className={code.length > 3 ? "hasInput" : ""}>{code.length > 3 ? code.substr(3, 1) : ''}</Col>
            <Col className={code.length > 4 ? "hasInput" : ""}>{code.length > 4 ? code.substr(4, 1) : ''}</Col>
            <Col className={code.length > 5 ? "hasInput" : ""}>{code.length > 5 ? code.substr(5, 1) : ''}</Col>
        </Row>
    }

    changeLoginPwd = (e) => {
        let val = e.target.value;
        // let reg = /^[0-9]*$/;
        // if (reg.test(val)) {
            this.setState({
                loginPwd: val
            })
        // }
    }

    render() {
        const codeType = this.state.codeType;
        const residences = require(`@webExchangeLocales/${this.props.langStore.currentLang}/register.ts`).default.areaList;
        return (
            <WrapperPhoneCmp>
                <Row justify="center" style={{ height: '100%', paddingTop: 100 }}>
                    <div className="title">关闭手机验证</div>
                    <div className="frame">
                        <div className='phoneWrapper'>
                            <Input type={this.state.showOrHidePwd ? "password" : "text"} className='phone' placeholder='登录密码' onChange={this.changeLoginPwd.bind(this)} value={this.state.loginPwd} />
                            <div onClick={this.showOrHidePwd} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                        </div>
                        {codeType === '1' ?
                            <div className="content">
                                <div className="sendBox">
                                    <span className="bothSmsTit">短信验证码</span>
                                    <Button onClick={this.sendSMS}>发送短信验证码</Button>
                                </div>
                                {this.getInputCodeDom('sms')}
                                <div className="pointBox">
                                    <span>收不到短信？<a>试试语音验证码</a></span>
                                </div>
                            </div>
                            : ''
                        }
                        {codeType === '2' ?
                            <div className="content">
                                <p className="bothGaTit">谷歌验证码</p>
                                {this.getInputCodeDom('ga')}
                                <div className="pointBox">
                                    <a className="forgetGa">丢失谷歌验证？</a>
                                </div>
                            </div> : ''
                        }
                        {codeType === '3' ?
                            <div className="content">
                                <div className="sendBox">
                                    <span className="bothSmsTit">短信验证码</span>
                                    <Button onClick={this.sendSMS}>发送短信验证码</Button>
                                </div>
                                {this.getInputCodeDom('sms')}
                                <div className="pointBox">
                                    <span>收不到短信？<a>试试语音验证码</a></span>
                                </div>
                                <p className="bothGaTit">谷歌验证码</p>
                                {this.getInputCodeDom('ga')}
                                <div className="pointBox">
                                    <a className="forgetGa">丢失谷歌验证？</a>
                                </div>
                            </div> : ''
                        }
                        <Button className="confirmBtn" onClick={this.handleSubmit}>确认</Button>
                    </div>
                </Row>
            </WrapperPhoneCmp>
        )
    }
}