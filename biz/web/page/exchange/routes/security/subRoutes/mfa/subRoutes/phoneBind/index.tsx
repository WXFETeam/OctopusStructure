import * as React from "react";
import { Row, Col, Button, Select, Input, message} from 'antd';
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
    phoneNum:string,
    country:string
}

@inject('userStore','langStore')
@observer
@renderBreadcrumbs

export default class PhoneBind extends React.Component<PhoneProps, PhoneState> {
    constructor(props: PhoneProps) {
        super(props);
        this.state = {
            smsCode: '',
            gaCode: '',
            phoneNum:'',
            country:'',
            codeType: '3' // '1'->sms,'2'->ga,'3'->both
        };
    }

    handleSubmit=()=>{
        let { gaCode, smsCode } = this.state;
        ajax({
            url: 'MFA.mfaModify',
            data: {
                gaCode,
                smsCode,
                type:'sms',
                state:1  // 1->开启,2->关闭
            },
            isFullData:true,
            callback:(data)=> {
                if(data.errNo == '0'){
                    message.success('已开启短信验证');
                    setTimeout(() => {
                        this.props.history.push('/security');
                    }, 2000);
                }
            }
        })
    }

    changeCode = (type: string, e: any) => {
        let code = e.target.value;
        const { codeType } = this.state;
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

    changePhone=(e)=>{
        let val = e.target.value;
        let reg = /^[0-9]*$/;
        if(reg.test(val)){
            this.setState({
                phoneNum:val
            })
        }
    }

    sendSMS=()=>{
        let phone = this.state.phoneNum;
        ajax({
            url: 'common.sendSMS',
            data: { phone },
            callback:(data)=> {
                
            }
        })
    }

    render() {
        const codeType = this.state.codeType;
        const residences = require(`@webExchangeLocales/${this.props.langStore.currentLang}/register.ts`).default.areaList;
        return (
            <WrapperPhoneCmp>
                <Row style={{height: '100%', paddingTop: 100}}>
                    <div className="title">手机验证</div>
                    <div className="frame">
                        <div className='phoneWrapper'>
                            <Select className='country' defaultValue='HK' onChange={(e)=>this.setState({country:e})}>
                                {
                                    residences.map(item => {
                                        return <Option key={item.value} value={item.value}>{item.label}</Option>
                                    })
                                }
                            </Select>
                            <Input className='phone' placeholder='手机号码' onChange={this.changePhone.bind(this)} value={this.state.phoneNum}/>
                            <div className='verticalLine'></div>
                        </div>
                        {codeType === '1' ?
                            <div className="content">
                                <div className="sendBox">
                                    <span className="bothSmsTit">短信验证码</span>
                                    <Button>发送短信验证码</Button>
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
                        {codeType === '3'? 
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