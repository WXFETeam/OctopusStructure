import * as React from "react";
import { Row, Col, InputNumber, Button, Modal, Slider } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperSetTimeModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type SetTimeProps = {
    userStore?: any,
    _close: Function
}

type SetTimeState = {

}

@inject('userStore')
@observer
class SetTime extends React.Component<SetTimeProps, SetTimeState> {
    constructor(props: SetTimeProps) {
        super(props);

    }

    _onClose = () => {
        this.props._close && this.props._close();
    }

    submit = () => {

        this.props._close && this.props._close();
    }



    render() {

        const marks = {
            0: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>0h</strong>,
            },
            33.33: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>2h</strong>,
            },
            66.66: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>4h</strong>,
            },
            100: {
                style: {
                    color: '#00A0D2',
                },
                label: <strong>6h</strong>,
            },
        }
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
                    <WrapperSetTimeModalCmp>
                        <div>
                            <div className="title">确认您的密码时效设置</div>
                            <div className="tips">设置为【每次提现都需要输入密码】？</div>
                        </div>
                        <div>
                            <Slider marks={marks} defaultValue={66.66} />
                        </div>
                        <Row justify="center" className="btn">
                            <Col>
                                <Button onClick={this._onClose}>取消</Button>
                                <Button style={{ marginLeft: 20 }} onClick={this.submit}>确认</Button>
                            </Col>
                        </Row>
                    </WrapperSetTimeModalCmp>
                </Modal>
            </div>

        )
    }
}

export default SetTime;