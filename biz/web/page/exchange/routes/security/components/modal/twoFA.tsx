import * as React from "react";
import { Row, Col, Input, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperTwoFACmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");
const googleIcon = require("@webExchangeImgs/userCenter/twofa/google.png");


type TwoFAProps = {
    userStore?: any,
    history?:any,
    _close:Function
}

type TwoFAState = {

}

@inject('userStore')
@observer
class TwoFA extends React.Component<TwoFAProps, TwoFAState> {
    constructor(props: TwoFAProps) {
        super(props);
        this.state = {

        }
    }

    _onSubmit=()=>{

    }

    _onClose=()=>{
        this.props._close && this.props._close();
    }

    handleClick=(type:string)=>{
        const { history } = this.props;
        if(type == 'GA'){
            history.push('/userCenter/gaBind');
        }else if(type == 'phone'){
            history.push('/userCenter/phoneBind');
        }
    }

    render() {
        return (
            <Modal
                className='twoFAModal'
                visible
                centered
                maskClosable
                title={<p className='title'>为了保护您的账户安全，请开启二次验证</p>}
                onCancel={this._onClose}
                footer={null}
            >
                <WrapperTwoFACmp>
                    <Row className='btnWrapper'>
                        <Col span={12} style={{width:176}} className='btn' onClick={this.handleClick.bind(this,'GA')}>
                            <img src={googleIcon}/>
                            <Button>谷歌验证</Button>
                        </Col>
                        <Col span={12} style={{width:176,marginLeft:40}} className='btn' onClick={this.handleClick.bind(this,'phone')}>
                            <img src={phoneIcon}/>
                            <Button>手机验证</Button>
                        </Col>
                    </Row>
                    <p className='tip'>我已知晓不开启二次验证的风险</p>
                    <p className='des' onClick={this._onClose}>暂时不开启</p>
                </WrapperTwoFACmp>
            </Modal>
        )
    }
}

export default TwoFA;