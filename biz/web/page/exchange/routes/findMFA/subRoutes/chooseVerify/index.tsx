import * as React from "react";
import { Row, Col, Button, Checkbox } from 'antd';
import { WrapperChooseVerifyCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import VerifyModal from '../../components/verifyModal'

type ChooseVerifyProps = {
    userStore?: any
}

type ChooseVerifyState = {

}

@inject('userStore')
@observer
export default class CloseVerify extends React.Component<ChooseVerifyProps, ChooseVerifyState> {
    constructor(props: ChooseVerifyProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <WrapperChooseVerifyCmp>
                <VerifyModal />
                <Row justify="center" style={{height: '100%', paddingTop: 96}}>
                    <div className="frame">
                        <div className="title">选取不可用的二次验证方式</div>
                        <div className="frameItem">
                            <Checkbox.Group>
                                <Row>
                                    <Checkbox value="0">手机号码{common.formatPhone('13612345414')}不可用，申请关闭手机号码</Checkbox>
                                </Row>
                                <Row className="secondR">
                                    <Checkbox value="1">谷歌验证不可用，申请关闭谷歌验证</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            <p className="content">申请将于1个工作日内处理完毕，请保持手机畅通便于客服及时与您联系<br/>关闭验证后可在账户中心-账户安全重新开启</p>
                            <Button className="confirmBlueBtn">关闭二次验证</Button>
                        </div>
                    </div>
                </Row>
            </WrapperChooseVerifyCmp>
        )
    }
}