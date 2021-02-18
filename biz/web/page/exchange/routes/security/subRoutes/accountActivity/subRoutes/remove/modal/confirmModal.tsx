import * as React from "react";
import { Row, Col, InputNumber, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';



type ConfirmModalProps = {
    userStore?: any,
    _close: Function
}

type ConfirmModalState = {

}

@inject('userStore')
@observer
class ConfirmModal extends React.Component<ConfirmModalProps, ConfirmModalState> {
    constructor(props: ConfirmModalProps) {
        super(props);
    }

    _onClose = () => {
        this.props._close && this.props._close();
    }

    submit = () => {
     
        this.props._close && this.props._close();
    }



    render() {
        return (
            <div>  
                <Modal
                    className='delAddrModal'
                    visible
                    width={420}
                    maskClosable
                    closable={false}
                    onCancel={this._onClose}
                    footer={null}
                >
                    <WrapperModalCmp>
                        <div>
                            <div className="tips">冻结账户2小时之内无法提交解冻申请</div>
                        </div>
                        <Row justify="center" className="btn">
                            <Col>
                              
                                <Button onClick={this.submit}>我知道了</Button>
                            </Col>
                        </Row>
                    </WrapperModalCmp>
                </Modal>
            </div>

        )
    }
}

export default ConfirmModal;