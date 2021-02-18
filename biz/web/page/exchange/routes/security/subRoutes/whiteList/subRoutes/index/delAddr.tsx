import * as React from "react";
import { Row, Col, Input, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';


type DelAddrProps = {
    userStore?: any,
    _close:Function,
    record: any
}

type DelAddrState = {

}

@inject('userStore')
@observer
class DelAddr extends React.Component<DelAddrProps, DelAddrState> {
    constructor(props: DelAddrProps) {
        super(props);
    }

    _onClose=()=>{
        this.props._close && this.props._close();
    }

    delAddrBtn = () => {
        console.log('del');
        this.props._close && this.props._close();
    }

    render() {
        let coinType = this.props.record && this.props.record.coinType ? this.props.record.coinType : '';
        let addr = this.props.record && this.props.record.addr ? this.props.record.addr : '';
        return (
            <Modal
                className='delAddrModal'
                visible
                maskClosable
                closable={false}
                onCancel={this._onClose}
                width={420}
                footer={false}
                // footer={[
                //     <Button key='cancel' onClick={this._onClose}>取消</Button>,
                //     <Button key='delete' onClick={this.delAddrBtn}>删除</Button>
                // ]}
            >
                <WrapperModalCmp>
                    <p className='delTitle'>确认将以下地址从白名单中移除么？</p>
                    <p className='info'><span className="infoName">币种：</span>{coinType}</p>
                    <p className='info'><span className="infoName">地址：</span>{addr}</p>
                    <div className="modalButtonBox">
                        <Button key='cancel' onClick={this._onClose}>取消</Button>
                        <Button key='delete' onClick={this.delAddrBtn}>删除</Button>
                    </div>
                </WrapperModalCmp>
            </Modal>
        )
    }
}

export default DelAddr;