import * as React from "react";
import { Row, Col, InputNumber, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type SetEveryTimeProps = {
    userStore?: any,
    _close: Function
}

type SetEveryTimeState = {

}

@inject('userStore')
@observer
class SetEveryTime extends React.Component<SetEveryTimeProps, SetEveryTimeState> {
    constructor(props: SetEveryTimeProps) {
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
                            <div className="title">确认您的密码时效设置</div>
                            <div className="tips">设置为【每次提现都需要输入密码】？</div>
                        </div>
                        <Row justify="center" className="btn">
                            <Col>
                                <Button onClick={this._onClose}>取消</Button>
                                <Button style={{ marginLeft: 20 }} onClick={this.submit}>确认</Button>
                            </Col>
                        </Row>
                    </WrapperModalCmp>
                </Modal>
            </div>

        )
    }
}

export default SetEveryTime;