import * as React from "react";
import { Button, Modal, message } from 'antd';
import { WrapperAgreementCmp, GlobalStyle } from './styled';
export default class Agreement extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancel = () => {
            this.setState({
                visible: false
            });
        };
        this.read = () => {
            let key = this.state.currentUrl;
            if (key == 'reskExplanationUrl') {
                this.setState({
                    visible: false,
                    reskExplanationUrl: '1'
                });
            }
            else if (key == 'applyUrl') {
                this.setState({
                    visible: false,
                    applyUrl: '1'
                });
            }
            else if (key == 'businessUrl') {
                this.setState({
                    visible: false,
                    businessUrl: '1'
                });
            }
        };
        this.confirmAgreememt = (key) => {
            this.setState({
                visible: true,
                currentUrl: key
            });
        };
        this.saveProtocol = () => {
            let that = this;
            let user = this.props.user;
            let url = '';
            let postData = null;
            if (user === 'institution') {
                // 企业认证
                url = 'orgKyc.saveOrgProtocol';
                postData = {
                    userNo: '2',
                    applyName: 'apply',
                    applyUrl: '1',
                    businessName: 'business',
                    businessUrl: '1',
                    reskExplanationName: 'reskExplanation',
                    reskExplanationUrl: '1'
                };
            }
            else {
                // 个人认证
                url = 'personalKyc.savePersonalProtocol';
                postData = {
                    userNo: '2',
                    kycType: '1',
                    applyName: 'apply',
                    applyUrl: '1',
                    businessName: 'business',
                    businessUrl: '1',
                    reskExplanationName: 'reskExplanation',
                    reskExplanationUrl: '1'
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
                        message.success('保存成功');
                    }
                    else {
                        message.success(data.errMsg);
                    }
                }
            });
        };
        this.state = {
            reskExplanationUrl: '0',
            applyUrl: '0',
            businessUrl: '0',
            currentUrl: '',
            visible: false
        };
    }
    componentWillMount() {
        let user = this.props.user;
        let protocol = null;
        if (user == 'institution') {
            // 企业
            protocol = common.getLS('insData').kycInsProtocolResponse;
        }
        else {
            // 个人
            protocol = common.getLS('personalData').kycPersonalProtocolSaveResponse;
        }
        if (protocol) {
            this.setState({
                reskExplanationUrl: protocol.reskExplanationUrl,
                applyUrl: protocol.applyUrl,
                businessUrl: protocol.businessUrl
            });
        }
    }
    render() {
        const agreementList = [
            {
                key: 'reskExplanationUrl',
                name: '数字货币风险解释',
                content: '请认真阅读数字货币风险解释，了解并确认所有投资风险'
            },
            {
                key: 'applyUrl',
                name: '专业投资者申请书',
                content: '请认真阅读专业投资者申请书，了解并确认所有投资风险'
            },
            {
                key: 'businessUrl',
                name: '专业投资者业务条款',
                content: '请认真阅读并确认专业投资者业务条款'
            }
        ];
        const { reskExplanationUrl, applyUrl, businessUrl, visible } = this.state;
        return (React.createElement(WrapperAgreementCmp, null,
            React.createElement(GlobalStyle, null),
            React.createElement(Modal, { visible: visible, title: "Title", onOk: this.handleCancel, footer: null, onCancel: this.handleCancel, className: "agreementModal" },
                React.createElement("div", { className: "modalHeader" },
                    React.createElement("div", { className: "headerTit" }, "\u4E13\u4E1A\u6295\u8D44\u8005\u7533\u8BF7\u4E66"),
                    React.createElement("div", { className: "headerPoint" }, "\u8BF7\u8BA4\u771F\u9605\u8BFB\u4E13\u4E1A\u6295\u8D44\u8005\u7533\u8BF7\u4E66\uFF0C\u4E86\u89E3\u5E76\u786E\u8BA4\u6240\u6709\u6295\u8D44\u98CE\u9669")),
                React.createElement("div", { className: "modalContent" }),
                React.createElement("div", { className: "modalBtn" },
                    React.createElement(Button, { className: "confirmBlueBtn cfmBtn", onClick: this.read }, "\u6211\u5DF2\u9605\u8BFB\u5E76\u77E5\u6653"))),
            React.createElement("div", { className: "routeName" }, "\u7B7E\u7F72\u534F\u8BAE"),
            React.createElement("div", { className: "agreementTit" }, "\u8BF7\u8BA4\u771F\u9605\u8BFB\u5E76\u7B7E\u7F72\u4EE5\u4E0B\u534F\u8BAE"),
            agreementList.map((item, index) => React.createElement("div", { className: item.key + " agreementItem", key: index },
                React.createElement("div", { className: "itemLeft" },
                    React.createElement("div", { className: "name" }, item.name),
                    React.createElement("div", { className: "content" }, item.content)),
                React.createElement("div", { className: "itemRight" }, (item.key == 'reskExplanationUrl' && reskExplanationUrl == '1') ||
                    (item.key == 'applyUrl' && applyUrl == '1') ||
                    (item.key == 'businessUrl' && businessUrl == '1') ?
                    React.createElement("div", { className: "confirmAgreement" },
                        React.createElement("a", { onClick: () => { this.confirmAgreememt(item.key); } }, "\u67E5\u770B\u534F\u8BAE"),
                        React.createElement("span", null, "\u6211\u5DF2\u540C\u610F\u5E76\u786E\u8BA4"),
                        React.createElement("span", { className: "icon" })) : React.createElement(Button, { onClick: () => { this.confirmAgreememt(item.key); } }, "\u67E5\u770B\u5E76\u786E\u8BA4")))),
            React.createElement("div", { className: "agreementBtn" },
                React.createElement(Button, { className: reskExplanationUrl == '1' && applyUrl == '1' && businessUrl == '1' ? "confirmBlueBtn saveBtn" : "saveBtn", onClick: this.saveProtocol }, "\u786E\u8BA4\u7B7E\u7F72\u5E76\u4FDD\u5B58"))));
    }
}
//# sourceMappingURL=index.js.map