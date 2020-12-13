import * as React from "react";
import { Row, Col, Button, Input, Tabs } from 'antd';
import { WrapperMFACmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import  RemoveModal from '../modal/removeModal';
const { TabPane } = Tabs;

type MFAProps = {
    userStore?: any,
   
}

type MFAState = {
    smsCode: string,
    gaCode: string,
    codeType: string,
    inputGaFocus: boolean,
    inputSMSFocus: boolean,
    removeModal: any
    
}

@inject('userStore')
@observer
export default class Verify extends React.Component<MFAProps, MFAState> {
    constructor(props: MFAProps) {
        super(props);
        this.state = {
            smsCode: '',
            gaCode: '',
            codeType: '4', // '1'->sms,'2'->ga,'3'->both, '4'->sms or ga
            inputGaFocus: false,
            inputSMSFocus: false,
            removeModal: false
        };
    }

    setInputStatus = (type, status) => {
        if (type === 'sms') {
            this.setState({
                inputSMSFocus: status
            });
        } else if (type === 'ga') {
            this.setState({
                inputGaFocus: status
            });
        }
    }

    changeCode = (type: string, e: any) => {
        let code = e.target.value;
        const codeType = this.state.codeType;
        if (type === 'sms') {
            this.setState({
                smsCode: code
            });
            if (code.length === 6) {
                // next
                this.setState({
                    smsCode: ''
                });
            }
        } else if (type === 'ga') {
            this.setState({
                gaCode: code
            });
            if (code.length === 6) {
                // next
                this.setState({
                    gaCode: ''
                });
            }
        }
    }

    getInputCodeDom = (type: string) => {
        let status: boolean = false;
        let code: string = '';
        if (type === 'sms') {
            code = this.state.smsCode;
            status = this.state.inputSMSFocus;
        } else if (type === 'ga') {
            code = this.state.gaCode;
            status = this.state.inputGaFocus;
        }
        return <Row className="inputBox">
            <Input 
                className="input-number" 
                maxLength={6} 
                value={code} 
                onChange={this.changeCode.bind(this, type)} 
                onFocus={this.setInputStatus.bind(this, type, true)} 
                onBlur={this.setInputStatus.bind(this, type, false)} />
            <Col className={status || code.length > 0 ? "firstCol hasInput" : "firstCol"} span={3}>{code.length > 0 ? code.substr(0, 1) : ''}</Col>
            <Col className={code.length > 1 ? "hasInput" : ""} span={3}>{code.length > 1 ? code.substr(1, 1) : ''}</Col>
            <Col className={code.length > 2 ? "hasInput" : ""} span={3}>{code.length > 2 ? code.substr(2, 1) : ''}</Col>
            <Col className={code.length > 3 ? "hasInput" : ""} span={3}>{code.length > 3 ? code.substr(3, 1) : ''}</Col>
            <Col className={code.length > 4 ? "hasInput" : ""} span={3}>{code.length > 4 ? code.substr(4, 1) : ''}</Col>
            <Col className={code.length > 5 ? "hasInput" : ""} span={3}>{code.length > 5 ? code.substr(5, 1) : ''}</Col>
        </Row>
    }

    render() {
        const codeType = this.state.codeType;
        const smsDom = <div>
            <div className="tit smsTit">短信验证</div>
            <div className="sendBox">
                <p className="content">请输入您在手机{common.formatPhone('13612345414')}上收到的六位数验证码</p>
                <Button>发送短信验证码</Button>
            </div>
            {this.getInputCodeDom('sms')}
            <div className="pointBox">
                <span>收不到短信？<a>试试语音验证码</a></span>
                <a className="forgetPhone">丢失手机？</a>
            </div>
        </div>
        const gaDom = <div>
            <div className="tit gaTit">谷歌验证</div>
            <p className="content">请输入谷歌验证App中的6位数验证码</p>
            {this.getInputCodeDom('ga')}
            <div className="pointBox">
                <a className="forgetGa">丢失谷歌验证？</a>
            </div>
        </div>
        return (
            <WrapperMFACmp>
                <Row justify="center" style={{height: '100%', paddingTop: 96}}>
                    <div className="frame">
                        <div className="title">二次验证</div>
                        {codeType === '1' ?
                            <div className="frameItem sms">
                                {smsDom}
                            </div> : ''
                        }
                        {codeType === '2' ? 
                            <div className="frameItem ga">
                                {gaDom}
                            </div> : ''
                        }
                        {codeType === '3' ? 
                            <div className="frameItem both">
                                {smsDom}
                                {gaDom}
                                <Button className="confirmBtn">确认</Button>
                            </div> : ''
                        }
                        {codeType === '4' ? 
                            <div className="frameItem smsOrGa">
                                <Tabs defaultActiveKey="sms">
                                    <TabPane tab="短信验证" key="sms">
                                        {smsDom}
                                    </TabPane>
                                    <TabPane tab="谷歌验证" key="ga">
                                        {gaDom}
                                    </TabPane>
                                </Tabs>
                            </div> : ''
                        }
                    </div>
                </Row>
                {
                    this.state.removeModal == true ? <RemoveModal  _close={() => this.setState({ removeModal: false })} />:""
                }
            
            </WrapperMFACmp>
        )
    }
}