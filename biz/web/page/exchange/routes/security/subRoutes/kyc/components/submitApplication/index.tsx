import * as React from "react";
import { Row, Col, Button, Checkbox, message } from 'antd';
import { WrapperSubmitApplicationCmp } from './styled';

type SubmitApplicationProps = {
    [props: string]: any,
    user: string,
    history: any,
    match: any
}

type SubmitApplicationState = {
    isCheck: boolean
}

export default class SubmitApplication extends React.Component<SubmitApplicationProps, SubmitApplicationState> {
    constructor(props: SubmitApplicationProps) {
        super(props);
        this.state = {
            isCheck: false
        };
    }

    changeCheck = (e) => {
        this.setState({
            isCheck: e.target.checked
        });
    }

    handleSubmit = () => {
        let that = this;
        let user = this.props.user;
        let url = '';
        let postData = null;
        if (user === 'institution') {
            // 企业认证
            let data = common.getLS('insData');
            url = 'orgKyc.submitKycInsData';
            postData = {
                kycInsControlInfoTotalRequest: data.kycInsControlInfoResponse,
                kycInsFileRequest: data.kycInsFileResponse,
                kycInsFinanceRequest: data.kycInsFinanceResponse,
                kycInsInfoRequest: data.kycInsInfoResponse,
                kycInsProtocolRequest: data.kycInsProtocolResponse,
                kycInsSupplementRequest: data.kycInsSupplementResponse,
                memberList: data.memberList,
            };
        } else {
            // 个人认证
            let data = common.getLS('personalData');
            url = 'personalKyc.personalSubmit';
            postData = {
                kycPersonalFinanceSaveRequest: data.kycPersonalFinanceSaveResponse,
                kycPersonalInfoRequest: Object.assign(data.kycPersonalInfoResponse, data.kycPersonalCertResponse, data.kycPersonalCertInfoResponse),
                kycPersonalProtocolSaveRequest: data.kycPersonalProtocolSaveResponse,
                kycPersonalSupplementSaveRequest: data.kycPersonalSupplementSaveResponse,
                userNo: '2',
            };
        }
        ajax({
            url: url,
            method: 'post',
            needToken: false,
            isFullData: true,
            data: postData,
            callback(data) {
                console.log(data);
                if (data.errNo === '0') {
                    let {history, match} = that.props;
                    history.push(`${match.path.split('identification/submitApplication')[0]}submitSuccess`);
                } else {
                    message.success(data.errMsg);
                }
            }
        })
    }

    render() {
        const isCheck = this.state.isCheck;
        const user = this.props.user;
        const certType = {
            1: '身份证',
            2: '护照'
        };
        let info = {
            name: '-',
            phone: '-',
            email: '-',
            certId: '-',
            companyName: '-',
            registerAddr: '-',
            address: '-'
        };
        if (user === 'institution') {
            // 企业
            if (common.getLS('insData') && common.getLS('insData').kycInsInfoResponse) {
                let insControlInfo = common.getLS('insData').kycInsControlInfoResponse;
                let insInfo = common.getLS('insData').kycInsInfoResponse;
                info = {
                    name: insControlInfo.lastName + insControlInfo.firstName,
                    phone: insControlInfo.phone,
                    email: insControlInfo.email,
                    certId: certType[insControlInfo.certType] + '-' + insControlInfo.certId,
                    companyName: insInfo.fullName,
                    registerAddr: insInfo.registrationAddress,
                    address: insInfo.officeAddress
                };
            }
        } else {
            // 个人
            if (common.getLS('personalData')) {
                let personalInfo = common.getLS('personalData').kycPersonalInfoResponse;
                let personalCert = common.getLS('personalData').kycPersonalCertResponse;
                info = {
                    name: personalInfo.lastName + personalInfo.firstName,
                    phone: personalInfo.phone,
                    email: personalInfo.email || '-',
                    certId: certType[personalCert.certType] + '-' + personalCert.certId,
                    companyName: '-',
                    registerAddr: '-',
                    address: '-'
                };
            }
        }
        const userInfo = [
            {
                name: '姓名',
                value: info.name
            },
            {
                name: '手机号',
                value: info.phone
            },
            {
                name: '邮箱',
                value: info.email
            },
            {
                name: '证件类型及证件号',
                value: info.certId
            }
        ];
        const institutionInfo = [
            {
                name: '企业名称',
                value: info.companyName
            },
            {
                name: '注册地址',
                value: info.registerAddr
            },
            {
                name: '办公地址',
                value: info.address
            }
        ];
        return (
            <WrapperSubmitApplicationCmp>
                <div className="routeName">提交申请</div>
                <div className="submitTit">{user === 'institution' ? '账户实际控制人信息概览' : '申请人信息概览'}</div>
                {userInfo.map((item, index) => 
                    <Row className={`submitItem submitItem${index}`} key={index}>
                        <Col className="itemLeft" span={10}>{item.name}</Col>
                        <Col className="itemRight" span={14}>{item.value}</Col>
                    </Row>
                )}
                {user === 'institution' ? <div className="institutionInfo">
                    <div className="submitTit">企业信息概览</div>
                    {institutionInfo.map((item, index) => 
                        <Row className={`submitItem submitItem${index}`} key={index}>
                            <Col className="itemLeft" span={10}>{item.name}</Col>
                            <Col className="itemRight" span={14}>{item.value}</Col>
                        </Row>
                    )}
                </div> : ''}
                <Checkbox checked={isCheck} onChange={this.changeCheck}>本人声明，本人上传所有资料均真实有效，自愿承担由于违反该声明而造成的一切后果</Checkbox>
                <div className="submitAppBtn">
                    <Button disabled={!isCheck} className={isCheck ? "confirmBlueBtn saveBtn" : "saveBtn"} onClick={this.handleSubmit}>提交申请</Button>
                </div>
            </WrapperSubmitApplicationCmp> 
        )
    }
}