import * as React from "react";
import { Row, Col, Button, Select, Input, message} from 'antd';
import { WrapperPhoneCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const { Option } = Select;

type PhoneProps = {
    userStore?: any,
    langStore?: any
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
export default class Verify extends React.Component<PhoneProps, PhoneState> {
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

    changeCode = (type: string, e: any) => {
        let code = e.target.value;
        let that = this;
        const codeType = this.state.codeType;
        if (type === 'sms') {
            this.setState({
                smsCode: code
            });
        } else if (type === 'ga') {
            this.setState({
                gaCode: code
            },()=>{
                if(that.state.gaCode.length==6){
                    that.handleSubmit();
                }
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

    handleSubmit = () => {
        let that = this;

        let params = {
            code: this.state.gaCode ? this.state.gaCode:"",
        }

        ajax({
            url: 'MFA.authGoogleKey',
            data: params,
            isFullData: true,
            callback(json) {
                if(json.errNo == "0"){
                    message.error('success')
                    // that.props.history.push('/security/basicInfo/newmail')
                }else{
                    message.error(json.errMsg)
                }
            }
        })
    }

    render() {
        const codeType = this.state.codeType;
        const residences = require(`@webExchangeLocales/${this.props.langStore.currentLang}/register.ts`).default.areaList;
        return (
            <WrapperPhoneCmp>
                <Row style={{height: '100%', paddingTop: 60}}>
                    <div className="title">二次验证</div>
                    <div className="frame">
                        {codeType === '2' || codeType === '3' ? 
                            <div className="content">
                                <p className="bothGaTit">谷歌验证码</p>
                                {this.getInputCodeDom('ga')}
                                <div className="pointBox">
                                    <a className="forgetGa">丢失谷歌验证？</a>
                                </div>
                                {/* <Button className="confirmBtn">确认</Button> */}
                            </div> : ''
                        }
                    </div>
                </Row>
            </WrapperPhoneCmp>
        )
    }
}