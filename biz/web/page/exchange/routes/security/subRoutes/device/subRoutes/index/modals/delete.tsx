import * as React from "react";
import { Row, Col, Button, message, Modal } from 'antd';
import { ConfirmModalWrapped } from './styled';
type ModalProps = {
    _close: any,
    curDeviceInfo:any
}
type ModalState = {

}

export default class ConfirmModal extends React.Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props);
        this.state = {

        }
    }

    handleOk = () => {
        let id = this.props.curDeviceInfo.id;
        ajax({
            url: 'security.delDevice',
            data:{id},
            callback:(data)=> {
                message.success(`delete!`);
                this.props._close();
            }
        })
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
                <ConfirmModalWrapped>
                    <h3 className='title'>
                        确认将以下设备从可信列表中移除么？
                    </h3>
                    <Row className='info' style={{marginTop:30}}>
                        <span className='des'>设备：</span>
                        <span>{'Chrome V80.0.3987.12'}</span>
                    </Row>
                    <Row className='info'>
                        <span className='des'>IP地址：</span>
                        <span>{'207.148.88.229'}</span>
                    </Row>
                    <Row className='btnWrapper'>
                        <Button className='btn' onClick={this.handleCancel.bind(this)}>取消</Button>
                        <Button className='btn sp' onClick={this.handleOk.bind(this)}>删除</Button>
                    </Row>
                </ConfirmModalWrapped>
            </Modal>
        )
    }
}