import * as React from "react";
import { Row, Col, Button, Divider, Form, Modal } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperDisableCmp } from './styled';
import DisableModal from '../modal/disableModal';
// import RemoveModal from '../modal/removeModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const disableIcon = require("@webExchangeImgs/security/disable.png");

type IndexProps = {
    userStore?: any
}

type IndexState = {
    disableModal: any,
    removeModal: any
}

@inject('userStore')
@observer
@renderBreadcrumbs
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            disableModal: false,
            removeModal: false
        }
    }
    formRef = null;
    handleSubmit = () => {
        this.setState({ disableModal: true })
      
    }

   
    render() {
        const listData = [
            {
                label: "所有交易和登录功能都将禁用。",
                key: 0
            },
            {
                label: "您帐户的所有API密钥都将被删除。",
                key: 1
            },
            {
                label: "删除所有信任设备。",
                key: 2
            },
            {
                label: "所有待处理的提款将被取消。",
                key: 3
            },
            {
                label: "所有的当前委托都将被取消。",
                key: 4
            }
        ]
        return (
            <WrapperDisableCmp>
                <Form ref={(e) => this.formRef = e} >
                    <Row justify="center">
                        <Col>
                            <div className="disableBox">
                                <div className="iconImg">
                                    <div>
                                        <img src={disableIcon} />
                                    </div>
                                </div>
                                <Row justify="center">
                                    <Col className="title">禁用账户</Col>
                                </Row>
                                <Row>
                                    <div className="content">
                                        <div className="title">禁用您的帐户将导致以下情况:</div>
                                        <ul className="message">
                                            {
                                                listData.map(item =>

                                                    <li key={item.key}>{item.label}</li>
                                                )
                                            }

                                        </ul>
                                        <Divider />
                                        <div className="tips">如果您决定重新激活您的帐户，请在禁用两个小时后登录账户进行解禁流程</div>
                                        <Button className="confirmBlueBtn" onClick={this.handleSubmit}>确认</Button>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Form>
                {
                    this.state.disableModal == true ? <DisableModal  _close={()=>this.setState({disableModal:false})}/>:""
                }
              
                 {/* {
                    this.state.removeModal == true ? <RemoveModal  _close={()=>this.setState({removeModal:false})}/>:""
                } */}
                
            </WrapperDisableCmp>
            
        )
    }
}