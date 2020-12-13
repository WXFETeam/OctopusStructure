import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperIndexCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const reminderIcon = require("@webExchangeImgs/userCenter/kyc/reminderIcon.svg");

type IndexProps = {
    userStore?: any,
    match: any,
    history: any
}

type IndexState = {
}

@inject('userStore')
@observer
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
    }

    goKyc = (key) => {
        let { history, match } = this.props;
        if (key === 'personal') {
            // 个人认证
            history.push(`${match.path}individual/riskEvaluation`);
        } else {
            // 企业认证
            history.push(`${match.path}institution/riskEvaluation`);
        }
    }

    render() {
        return (
            <WrapperIndexCmp>
                <Row justify="center" className="title">选择认证类型</Row>
                <Row justify="center" className="reminderWrapper">
                    <Row className="reminder" align="middle">
                        <img src={reminderIcon} className="reminderIcon"/>同一种帐号只允许有一种认证状态，即只能选择个人认证或企业认证。
                    </Row>
                </Row>
                <Row justify="center">
                    <Row className="infoWrapper">
                        <Col span={12}>
                            <Row onClick={() => {this.goKyc('personal');}} className="infoBox personal">
                                <Row justify="center" className="infoImg personalImg"></Row>
                                <Row justify="center" className="infoTitle">个人</Row>
                                <Row justify="center" className="infoContent">个人信息 > 证件信息 > 资产信息 > 人脸信息 > 通过验证 </Row>
                            </Row>
                            <Row className="fileTitle">需要文件</Row>
                            <Row className="fileContent">1. 个人身份证明文件（身份证或护照）</Row>
                            <Row className="fileContent">2. 常住地址证明文件（近三个月的银行账单或水电费账单）</Row>
                        </Col>
                        <Col span={12}>
                            <Row onClick={() => {this.goKyc('org');}} className="infoBox org">
                                <Row justify="center" className="infoImg"></Row>
                                <Row justify="center" className="infoTitle">企业</Row>
                                <Row justify="center" className="infoContent">实际控制人信息 > 企业信息 > 文件上传 > 人脸信息 > 通过验证 </Row>
                            </Row>
                            <Row className="fileTitle">需要文件</Row>
                            <Row className="fileContent">1.法人身份证明文件（身份证或护照）</Row>
                            <Row className="fileContent">2. 常住地址证明文件（近三个月的银行账单或水电费账单）</Row>
                        </Col>
                    </Row>
                </Row>
            </WrapperIndexCmp> 
        )
    }
}