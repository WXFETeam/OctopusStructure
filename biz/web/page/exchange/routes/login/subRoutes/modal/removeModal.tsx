import * as React from "react";
import { Row, Col, InputNumber, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperRemoveModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';



type RemoveModalProps = {
    userStore?: any,
    _close: Function,
   
}

type RemoveModalState = {

}

@inject('userStore')
@observer
class RemoveModal extends React.Component<RemoveModalProps, RemoveModalState> {
    constructor(props: RemoveModalProps) {
        super(props);
    }

    _onClose = () => {
        this.props._close && this.props._close();
    }

    submitRemove = () => {
        // this.props.history.push('/security/accountActivity/remove');
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
                    <WrapperRemoveModalCmp>
                        <div>
                            <div className="tips">您的帐号已被禁用？</div>
                        </div>
                        <Row justify="center" className="btn">
                            <Col>
                                <Button onClick={this._onClose}>取消</Button>
                                <Button  style={{ marginLeft: 20 }} onClick={this.submitRemove}>解禁</Button>
                            </Col>
                        </Row>
                    </WrapperRemoveModalCmp>
                </Modal>
            </div>

        )
    }
}

export default RemoveModal;