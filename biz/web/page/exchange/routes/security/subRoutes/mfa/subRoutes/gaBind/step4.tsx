import * as React from "react";
import { Row, Col, Button, Input, message } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';

type props = {
    userStore? : any,
    langStore? : any,
    // history: any
    returnPage : Function,
    nextStep : Function,
    history?: any
}

type stepState = {
    smsCode: string,
    gaCode: string,
    codeType: string,
    pwd:string,
    showOrHidePwd: boolean
}


@inject('userStore')
@observer
export default class Step4 extends React.Component<props, stepState> {
    constructor(props: any) {
        super(props);
        this.state = {
            smsCode:'',
            gaCode:'',
            pwd:'',
            codeType:'1',//1->sms
            showOrHidePwd: true
        }
    }

    handleSubmit=()=>{
        let { smsCode, gaCode, pwd } = this.state;
        let gaKey = common.getLS('GA').secret;
        ajax({
            url: 'MFA.bindGoogleAuth',
            data: {
                key:gaKey,
                code:gaCode,
                smsCode,
                password:pwd
            },
            isFullData:true,
            callback:(data)=> {
                if(data.errNo == '0'){
                    message.success('已开通谷歌验证');
                    setTimeout(() => {
                        this.props.nextStep(4);
                        common.rmLS('GA');
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

    getInputCodeDom = (type: string) => {
        let code: string = '';
        if (type === 'sms') {
            code = this.state.smsCode;
        } else if (type === 'ga') {
            code = this.state.gaCode;
        }
        return <Row className="inputBox" style={{width:380,margin:'0 auto'}}>
                <input className="input-number" maxLength={6} value={code} onChange={this.changeCode.bind(this, type)} />
                <Col className={status || code.length > 0 ? "firstCol hasInput" : "firstCol"} span={3}>{code.length > 0 ? code.substr(0, 1) : ''}</Col>
                <Col className={code.length > 1 ? "hasInput" : ""} span={3}>{code.length > 1 ? code.substr(1, 1) : ''}</Col>
                <Col className={code.length > 2 ? "hasInput" : ""} span={3}>{code.length > 2 ? code.substr(2, 1) : ''}</Col>
                <Col className={code.length > 3 ? "hasInput" : ""} span={3}>{code.length > 3 ? code.substr(3, 1) : ''}</Col>
                <Col className={code.length > 4 ? "hasInput" : ""} span={3}>{code.length > 4 ? code.substr(4, 1) : ''}</Col>
                <Col className={code.length > 5 ? "hasInput" : ""} span={3}>{code.length > 5 ? code.substr(5, 1) : ''}</Col>
            </Row>
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

    changePwd=(e)=>{
        let value = e.target.value;
        this.setState({
            pwd:value
        })
    }

    render() {
        return (
            <Content>
                <p className='stepTitle'>启用您的Google身份验证器</p>
                <div className='pwdWrapper'>
                    <Input type={this.state.showOrHidePwd ? "password" : "text"} placeholder='登录密码' onChange={this.changePwd.bind(this)}/>
                    <div onClick={this.showOrHidePwd} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                </div>
                {
                    this.state.codeType == '1' && 
                    <div>
                        <div className="smsBox">
                            <p className="smsTip">短信验证码</p>
                            <Button onClick={this.sendSMS}>发送短信</Button>
                        </div>
                        {this.getInputCodeDom('sms')}
                        <div className="forgetPhone">
                            <span>丢失手机?</span>
                        </div>
                    </div>
                }
                <div className="smsBox" style={{marginTop:this.state.codeType == '2' ? 24 : 40}}>
                    <p className="smsTip">谷歌验证码</p>
                </div>
                {this.getInputCodeDom('ga')}
                <div className='btnWrapper'>
                    <Button className="btn" type="primary" onClick={this.handleSubmit}>提交</Button>
                </div>
                <p className='return' onClick={()=>this.props.returnPage(4)}>返回上一步</p>
            </Content>
        )
    }
}