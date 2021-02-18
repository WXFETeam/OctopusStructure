import * as React from "react";
import { Row, Col, Button, Card, Checkbox } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperRemoveCmp } from './styled';
import ConfirmModal from './modal/confirmModal';

type IndexProps = {
    userStore?: any
}

type IndexState = {
    confirmModal: any;
}

@inject('userStore')
@observer
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            confirmModal: false,
        }
    }

    formRef = null;
    handleSubmit = () => {
        this.setState({ confirmModal: true })
      
    }

    render() {
        return (
            <WrapperRemoveCmp>
                <Row justify="center" className="title">
                    <Col>解禁账户</Col>
                </Row>
                <Row justify="center" className="content">
                    <Col>
                        <Card>
                            <Checkbox.Group className="check" style={{width: '100%'}}>
                                <Row className="tipsA">
                                    <Checkbox value="A">解禁帐户后会恢复您的交易和登录。建议您定期更换密码并防止谷歌及手机验证泄露。</Checkbox>
                                </Row>
                                <Row className="tipsB">
                                    <Checkbox value="B">解禁帐户需人工审核，将花费7-10个工作日，完成解禁后48小时内禁止提现。</Checkbox>
                                </Row>
                                <Row  justify="center">
                                    <Col><Button className="confirmBlueBtn" onClick={this.handleSubmit}> 解禁账户</Button></Col>
                                </Row>
                            </Checkbox.Group>
                        </Card>
                    </Col>
                    {
                    this.state.confirmModal == true ? <ConfirmModal  _close={()=>this.setState({confirmModal:false})}/>:""
                }

                </Row>
            </WrapperRemoveCmp>


        )
    }
}