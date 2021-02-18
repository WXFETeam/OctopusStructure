import * as React from "react";
import { Row, Col, Button, message, Modal, Input } from 'antd';
import { ModifyModalWrapped } from './styled';

type ModalProps = {
    _close: any,
}
type ModalState = {

}

export default class ModifyModal extends React.Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props);
        this.state = {

        }
    }

    handleOk = () => {
        this.props._close();
    }

    handleCancel = () => {
        this.props._close();
    }

    render() {
        return (
            <Modal
                visible
                centered
                maskClosable
                closable={false}
                title={null}
                onCancel={this.handleCancel}
                footer={null}
                width={420}
            >
                <ModifyModalWrapped>
                    <h3 className='title'>
                        修改帐户名
                    </h3>
                    <Row className='info'>
                        <Input type='text' className='input' placeholder='输入新的帐户名'/>
                    </Row>
                    <Row className='btnWrapper'>
                        <Button className='btn' onClick={this.handleCancel.bind(this)}>取消</Button>
                        <Button className='btn sp' onClick={this.handleOk.bind(this)}>确认</Button>
                    </Row>
                </ModifyModalWrapped>
            </Modal>
        )
    }
}