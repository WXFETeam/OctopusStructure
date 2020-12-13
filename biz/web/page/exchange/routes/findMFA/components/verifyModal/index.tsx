import * as React from "react";
import { Row, Col, Input, Button, Modal } from 'antd';
import { WrapperVerifyCmp } from './styled';
import { observer, inject } from 'mobx-react/index';


type VerifyProps = {
    userStore?: any,
    [props: string]: any
}

type VerifyState = {
    verifyType: string,
    verifyCode: string,
    inputFocus: boolean
}

@inject('userStore')
@observer
class VerifyModal extends React.Component<VerifyProps, VerifyState> {
    constructor(props: VerifyProps) {
        super(props);
        this.state = {
            verifyType: '1', // '1'->sms,'2'->ga,'3'->face
            verifyCode: '',
            inputFocus: false
        };
    }

    _onClose=()=>{
        this.props._close && this.props._close();
    }

    setInputStatus = (status: boolean) => {
        this.setState({
            inputFocus: status
        });
    }

    changeCode = (e: any) => {
        let code = e.target.value;
        this.setState({
            verifyCode: code
        });
    }

    getInputCodeDom = () => {
        let status = this.state.inputFocus;
        let code = this.state.verifyCode;
        return <Row className="inputBox">
            <Input 
                className="input-number" 
                maxLength={6} 
                value={code} 
                onChange={this.changeCode} 
                onFocus={this.setInputStatus.bind(this, true)} 
                onBlur={this.setInputStatus.bind(this, false)} />
            <Col className={status || code.length > 0 ? "firstCol hasInput" : "firstCol"} span={3}>{code.length > 0 ? code.substr(0, 1) : ''}</Col>
            <Col className={code.length > 1 ? "hasInput" : ""} span={3}>{code.length > 1 ? code.substr(1, 1) : ''}</Col>
            <Col className={code.length > 2 ? "hasInput" : ""} span={3}>{code.length > 2 ? code.substr(2, 1) : ''}</Col>
            <Col className={code.length > 3 ? "hasInput" : ""} span={3}>{code.length > 3 ? code.substr(3, 1) : ''}</Col>
            <Col className={code.length > 4 ? "hasInput" : ""} span={3}>{code.length > 4 ? code.substr(4, 1) : ''}</Col>
            <Col className={code.length > 5 ? "hasInput" : ""} span={3}>{code.length > 5 ? code.substr(5, 1) : ''}</Col>
        </Row>
    }

    render() {
        const type = this.state.verifyType;
        return (
            <Modal
                className='verifyModal'
                visible
                centered
                maskClosable
                title={null}
                onCancel={this._onClose}
                footer={null}
            >
                <WrapperVerifyCmp>
                    {type ==='1' ? <div className="frameItem sms">
                        <div className="tit smsTit">短信验证</div>
                        <div className="sendBox">
                            <p className="content">请输入您在手机{common.formatPhone('13612345414')}上收到的六位数验证码</p>
                            <Button>发送短信验证码</Button>
                        </div>
                        {this.getInputCodeDom()}
                        <div className="pointBox">
                            <span>收不到短信？<a>试试语音验证码</a></span>
                            <a className="forgetPhone">丢失手机？</a>
                        </div>
                    </div> : ''}
                    {type ==='2' ? <div className="frameItem ga">
                        <div className="tit">谷歌验证</div>
                        <p className="content">请输入谷歌验证App中的6位数验证码</p>
                        {this.getInputCodeDom()}
                        <div className="pointBox">
                            <a className="forgetGa">丢失谷歌验证？</a>
                        </div>
                    </div> : ''}
                    {type ==='3' ? <div className="frameItem face">
                        <div className="tit">人脸识别</div>
                        <p className="faceP1">请完成人脸认证</p>
                        <p className="faceP2">我们需要您的人脸信息来确保是您本人操作</p>
                        <Button className="confirmBlueBtn">立即验证</Button>
                    </div> : ''}
                </WrapperVerifyCmp>
            </Modal>
        )
    }
}

export default VerifyModal;