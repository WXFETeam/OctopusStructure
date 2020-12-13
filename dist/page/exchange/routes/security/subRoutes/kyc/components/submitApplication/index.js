import * as React from "react";
import { Row, Col, Button, Checkbox, message } from 'antd';
import { WrapperSubmitApplicationCmp } from './styled';
export default class SubmitApplication extends React.Component {
    constructor(props) {
        super(props);
        this.changeCheck = (e) => {
            this.setState({
                isCheck: e.target.checked
            });
        };
        this.handleSubmit = () => {
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
            }
            else {
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
                        let { history, match } = that.props;
                        history.push(`${match.path.split('identification/submitApplication')[0]}submitSuccess`);
                    }
                    else {
                        message.success(data.errMsg);
                    }
                }
            });
        };
        this.state = {
            isCheck: false
        };
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
        }
        else {
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
        return (React.createElement(WrapperSubmitApplicationCmp, null,
            React.createElement("div", { className: "routeName" }, "\u63D0\u4EA4\u7533\u8BF7"),
            React.createElement("div", { className: "submitTit" }, user === 'institution' ? '账户实际控制人信息概览' : '申请人信息概览'),
            userInfo.map((item, index) => React.createElement(Row, { className: `submitItem submitItem${index}`, key: index },
                React.createElement(Col, { className: "itemLeft", span: 10 }, item.name),
                React.createElement(Col, { className: "itemRight", span: 14 }, item.value))),
            user === 'institution' ? React.createElement("div", { className: "institutionInfo" },
                React.createElement("div", { className: "submitTit" }, "\u4F01\u4E1A\u4FE1\u606F\u6982\u89C8"),
                institutionInfo.map((item, index) => React.createElement(Row, { className: `submitItem submitItem${index}`, key: index },
                    React.createElement(Col, { className: "itemLeft", span: 10 }, item.name),
                    React.createElement(Col, { className: "itemRight", span: 14 }, item.value)))) : '',
            React.createElement(Checkbox, { checked: isCheck, onChange: this.changeCheck }, "\u672C\u4EBA\u58F0\u660E\uFF0C\u672C\u4EBA\u4E0A\u4F20\u6240\u6709\u8D44\u6599\u5747\u771F\u5B9E\u6709\u6548\uFF0C\u81EA\u613F\u627F\u62C5\u7531\u4E8E\u8FDD\u53CD\u8BE5\u58F0\u660E\u800C\u9020\u6210\u7684\u4E00\u5207\u540E\u679C"),
            React.createElement("div", { className: "submitAppBtn" },
                React.createElement(Button, { disabled: !isCheck, className: isCheck ? "confirmBlueBtn saveBtn" : "saveBtn", onClick: this.handleSubmit }, "\u63D0\u4EA4\u7533\u8BF7"))));
    }
}
//# sourceMappingURL=index.js.map