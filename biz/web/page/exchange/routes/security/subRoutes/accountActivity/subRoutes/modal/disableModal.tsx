import * as React from "react";
import { Row, Col, InputNumber, Button, Modal, message } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type DisableModalProps = {
    userStore?: any,
    _close: Function
}

type DisableModalState = {

}

@inject('userStore')
@observer
class DisableModal extends React.Component<DisableModalProps, DisableModalState> {
    constructor(props: DisableModalProps) {
        super(props);
    }

    formRef = null;

    _onClose = () => {
        this.props._close && this.props._close();
    }

    submitDisable = () => {
        let accountNumberRequest = {
            accountNumber: "0111",
            accountStatus: 0
        }
        ajax({
            url: 'security.disOrUpAccount',
            method: 'post',
            data: accountNumberRequest,
            callback(data) {
                if (data.errNo == 0) {
                    message.success("禁用成功")
                } else {
                    message.error("禁用失败")
                }
            }
        })

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
                            <div className="title">确认要禁用账户么？</div>
                            <div className="tips">禁用后，大概要花七到十天的时间激活您的账户</div>
                        </div>
                        <Row justify="center" className="btn">
                            <Col>
                                <Button onClick={this._onClose}>取消</Button>
                                <Button danger style={{ marginLeft: 20 }} onClick={this.submitDisable}>禁用</Button>
                            </Col>
                        </Row>
                    </WrapperModalCmp>
                </Modal>
            </div>

        )
    }
}

export default DisableModal;