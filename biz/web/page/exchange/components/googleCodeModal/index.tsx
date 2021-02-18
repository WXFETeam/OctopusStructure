import * as React from "react";
import { Row, Col, InputNumber, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const gaIcon = require("@webExchangeImgs/security/gaIcon.png");


type GAModalProps = { 
    userStore?: any,
    _close:Function
}

type GAModalState = {
    gaCode: string,
}

@inject('userStore')
@observer
class GAModal extends React.Component<GAModalProps, GAModalState> {
    constructor(props: GAModalProps) {
        super(props);
        this.state={
            gaCode: ''
        }
    }

    _onClose=()=>{
        this.props._close && this.props._close();
    }

    submitGA = () => {
        console.log('ga');
        this.props._close && this.props._close();
    }

    onChange = () => {
        console.log('change')
    }
    changeCode=(e:any)=>{
        let code = e.target.value;
        this.setState({
            gaCode:code
        })
        if(code&&code.length==6){
            this._onClose()
        }
        console.log(this.state.gaCode,"gaCode")
    }
    render() {
        let code:string="";
        code=this.state.gaCode
        return (
            <Modal
                className='delAddrModal'
                visible
                maskClosable
                onCancel={this._onClose}
                footer={false}
                closable={false}
                width={518}
            >
                <WrapperModalCmp>
                    <div className="gaInfo">
                        <img className="gaIcon" src={gaIcon} />
                        <span className="gaInfoText">请输入谷歌验证App中的6位数验证码</span>
                    </div>
                    <Row className="inputBox">
                        <input className="input-number" maxLength={6} value={code} onChange={this.changeCode.bind(this)} />
                        <Col className={status || code.length > 0 ? "firstCol hasInput" : "firstCol"}>{code.length > 0 ? code.substr(0, 1) : ''}</Col>
                        <Col className={code.length > 1 ? "hasInput" : ""}>{code.length > 1 ? code.substr(1, 1) : ''}</Col>
                        <Col className={code.length > 2 ? "hasInput" : ""}>{code.length > 2 ? code.substr(2, 1) : ''}</Col>
                        <Col className={code.length > 3 ? "hasInput" : ""}>{code.length > 3 ? code.substr(3, 1) : ''}</Col>
                        <Col className={code.length > 4 ? "hasInput" : ""}>{code.length > 4 ? code.substr(4, 1) : ''}</Col>
                        <Col className={code.length > 5 ? "hasInput" : ""}>{code.length > 5 ? code.substr(5, 1) : ''}</Col>
                    </Row>
                    <div className="loseGA">
                        丢失谷歌验证？
                    </div>
                </WrapperModalCmp>
            </Modal>
        )
    }
}

export default GAModal;