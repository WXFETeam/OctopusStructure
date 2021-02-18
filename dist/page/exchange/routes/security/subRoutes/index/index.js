import * as React from "react";
import { WrapperContent, Content } from './styled';
import { Row, Col, Button, Switch, List } from 'antd';
const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");
const googleIcon = require("@webExchangeImgs/userCenter/twofa/google.png");
const warnIcon = require("@webExchangeImgs/userCenter/warn.png");
const check1 = require("@webExchangeImgs/security/check1.png");
const check2 = require("@webExchangeImgs/security/check2.png");
const Item = List.Item;
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.queryInfo = () => {
            ajax({
                url: 'security.getAccountInfo',
                data: {},
                handlerErr: true,
                callback: (data) => {
                    // let email = data.email && data.email.replace(/^(\w{2})(\w+)@/,`$1****@`);    //4个*号
                    // let email = data.email && data.email.replace(/^(\w{2})(\w+)@/, (a, b, c) => { return `${b}${c.replace(/\w/g, '*')}@`; });    //补全*号
                    this.setState({
                        MFA: data.isMFA || [],
                        // email,
                        identityStatus: data.identityStatus,
                        whiteListStatus: data.whiteStatus,
                        activityList: data.activityList
                    });
                }
            });
        };
        this.getSecurityGrade = () => {
            let securityGrade = 0;
            if (this.state.MFA.length > 0) {
                securityGrade++;
            }
            if (this.state.identityStatus == '1') {
                securityGrade++;
            }
            if (this.state.whiteListStatus) {
                securityGrade++;
            }
            this.setState({ securityGrade });
        };
        this.handleChange = (type) => {
            switch (type) {
                case 'GA':
                    let GAStatus = this.state.MFA.includes('GA');
                    if (GAStatus) {
                        this.props.history.push('/security/mfa/gaClose');
                    }
                    else {
                        this.props.history.push('/security/mfa/gaBind');
                    }
                    break;
                case 'phone':
                    let smsStatus = this.state.MFA.includes('SMS');
                    if (smsStatus) {
                        this.props.history.push('/security/mfa/phoneClose');
                    }
                    else {
                        this.props.history.push('/security/mfa/phoneBind');
                    }
                    break;
                case 'basicInfo':
                    this.props.history.push('/security/basicInfo');
                    break;
                case 'pwd':
                    this.props.history.push('/security/pwdMgt');
                    break;
                case 'device':
                    this.props.history.push('/security/device');
                    break;
                case 'identity':
                    this.props.history.push('/security/kyc');
                    break;
                case 'whiteList':
                    this.props.history.push('/security/whiteList');
                    break;
                case 'disableAccount':
                    // this.props.history.push('/security');
                    break;
                case 'more':
                    this.props.history.push('security/accountActivity');
                    break;
            }
        };
        this.handleSwitchChange = (status) => {
            this.setState({
                whiteListStatus: status
            }, () => {
                this.getSecurityGrade();
            });
        };
        this.state = {
            MFA: [],
            email: '',
            identityStatus: '2',
            whiteListStatus: false,
            securityGrade: 0,
            activityList: []
        };
    }
    componentDidMount() {
        this.queryInfo();
        this.getSecurityGrade();
    }
    render() {
        const data = [
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            },
            {
                operateTime: '2019-12-27 15:29:11',
                source: 'android',
                activityName: '授权新设备',
                operateStatus: '成功',
                ipAddress: '124.156.209.95'
            }
        ];
        let activityList = this.state.activityList || data;
        return (React.createElement(WrapperContent, null,
            React.createElement("div", { className: 'content' },
                React.createElement(Row, { className: 'title' }, "\u5B89\u5168\u7B49\u7EA7"),
                React.createElement(Row, { className: 'grade' },
                    React.createElement(Col, { span: 3, className: this.state.MFA.length > 0 ? 'item active' : 'item' },
                        React.createElement("div", { className: this.state.securityGrade > 0 ? 'line active' : 'line' }),
                        React.createElement("div", { className: 'text' },
                            this.state.MFA.length ? React.createElement("img", { src: check1 }) : React.createElement("img", { src: check2 }),
                            React.createElement("span", { onClick: !this.state.MFA.length ? this.handleChange.bind(this, 'GA') : null }, "\u542F\u75282FA"))),
                    React.createElement(Col, { span: 3, className: this.state.identityStatus == '1' ? 'item active' : 'item', style: { marginLeft: 4 } },
                        React.createElement("div", { className: this.state.securityGrade > 1 ? 'line active' : 'line' }),
                        React.createElement("div", { className: 'text' },
                            this.state.identityStatus == '1' ? React.createElement("img", { src: check1 }) : React.createElement("img", { src: check2 }),
                            React.createElement("span", { onClick: this.state.identityStatus != '1' ? this.handleChange.bind(this, 'identity') : null }, "\u8EAB\u4EFD\u8BA4\u8BC1"))),
                    React.createElement(Col, { span: 3, className: this.state.whiteListStatus ? 'item active' : 'item', style: { marginLeft: 4 } },
                        React.createElement("div", { className: this.state.securityGrade > 2 ? 'line active' : 'line' }),
                        React.createElement("div", { className: 'text' },
                            this.state.whiteListStatus ? React.createElement("img", { src: check1 }) : React.createElement("img", { src: check2 }),
                            React.createElement("span", { onClick: !this.state.whiteListStatus ? this.handleSwitchChange.bind(this, true) : null }, "\u5F00\u542F\u63D0\u73B0\u767D\u540D\u5355")))),
                React.createElement(Content, null,
                    React.createElement(Row, { style: { marginTop: 60 } },
                        React.createElement(Col, { span: 11, style: { width: 620 } },
                            React.createElement("div", { className: 'block border' },
                                React.createElement(Row, { style: { marginTop: 25 } },
                                    React.createElement("span", { className: 'title', style: { fontSize: 24 } }, "2FA")),
                                React.createElement(Row, { className: 'twofa', justify: "space-between", style: { borderBottom: '1px #E6E6E6 solid' } },
                                    React.createElement(Col, { span: 18 },
                                        React.createElement(Row, null,
                                            React.createElement(Col, { span: 2 },
                                                React.createElement("img", { src: googleIcon, alt: "" })),
                                            React.createElement(Col, { span: 12, offset: 1 },
                                                React.createElement("p", { className: 'type' }, "\u8C37\u6B4C\u9A8C\u8BC1"),
                                                React.createElement("p", { className: 'tip' }, "\u7528\u4E8E\u767B\u5F55\u3001\u63D0\u5E01\u3001\u627E\u56DE\u5BC6\u7801")))),
                                    React.createElement(Col, null,
                                        React.createElement(Button, { className: this.state.MFA.includes('GA') ? 'btn' : 'btn active', onClick: this.handleChange.bind(this, 'GA') }, this.state.MFA.includes('GA') ? '关闭' : '启用'))),
                                React.createElement(Row, { className: 'twofa', justify: "space-between" },
                                    React.createElement(Col, { span: 18 },
                                        React.createElement(Row, null,
                                            React.createElement(Col, { span: 2 },
                                                React.createElement("img", { src: phoneIcon, alt: "" })),
                                            React.createElement(Col, { span: 12, offset: 1 },
                                                React.createElement("p", { className: 'type' }, "\u624B\u673A\u9A8C\u8BC1"),
                                                React.createElement("p", { className: 'tip' }, "\u7528\u4E8E\u767B\u5F55\u3001\u63D0\u5E01\u3001\u627E\u56DE\u5BC6\u7801")))),
                                    React.createElement(Col, null,
                                        React.createElement(Button, { className: this.state.MFA.includes('SMS') ? 'btn' : 'btn active', onClick: this.handleChange.bind(this, 'phone') }, this.state.MFA.includes('SMS') ? '关闭' : '启用'))))),
                        React.createElement(Col, { span: 11, style: { width: 620, marginLeft: 20 } },
                            React.createElement("div", { className: 'block' },
                                React.createElement(Row, { className: 'small-block', justify: "space-between", style: { height: 80 } },
                                    React.createElement(Col, { span: 10 },
                                        React.createElement("span", { className: 'title' }, "\u8EAB\u4EFD\u8BA4\u8BC1")),
                                    React.createElement(Col, null,
                                        React.createElement(Button, { className: 'btn active', onClick: this.handleChange.bind(this, 'identity') }, this.state.identityStatus == '1' ? '已认证' : '去认证'))),
                                React.createElement(Row, { className: 'small-block', justify: "space-between", style: { height: 160, marginTop: 20, padding: '30px 40px' } },
                                    React.createElement(Col, { span: 12 },
                                        React.createElement("p", { className: 'type' }, "\u63D0\u73B0\u767D\u540D\u5355"),
                                        React.createElement("p", { className: 'tip' }, "\u5F00\u542F\u540E\u4EC5\u5141\u8BB8\u5F80\u767D\u540D\u5355\u8D26\u6237\u5185\u63D0\u73B0"),
                                        React.createElement("p", { className: 'ask', style: { marginTop: 20 } },
                                            React.createElement("span", { style: { position: 'relative', top: 2 } }, "\u662F\u5426\u5F00\u542F\u767D\u540D\u5355"),
                                            React.createElement("img", { src: warnIcon, alt: "", style: { marginLeft: 4 } }),
                                            React.createElement(Switch, { checkedChildren: 'ON', unCheckedChildren: 'OFF', checked: this.state.whiteListStatus, className: 'switch', onChange: this.handleSwitchChange.bind(this) }))),
                                    React.createElement(Col, null,
                                        React.createElement(Button, { className: 'btn active', onClick: this.handleChange.bind(this, 'whiteList') }, "\u7BA1\u7406")))))),
                    React.createElement(Row, { style: { marginTop: 20 } },
                        React.createElement(Col, { span: 11, style: { width: 620 } },
                            React.createElement("div", { className: 'block' },
                                React.createElement("div", { className: 'small-block', style: { height: 160 } },
                                    React.createElement(Row, { justify: "space-between", style: { height: 55, borderBottom: '1px #E6E6E6 solid' } },
                                        React.createElement(Col, { span: 10 },
                                            React.createElement("p", { className: 'type' }, "\u57FA\u7840\u8D44\u6599")),
                                        React.createElement(Col, null,
                                            React.createElement(Button, { className: 'btn', onClick: this.handleChange.bind(this, 'basicInfo') }, "\u66F4\u6362"))),
                                    React.createElement(Row, { justify: "space-between", style: { height: 60, paddingTop: 25 } },
                                        React.createElement(Col, { span: 10 },
                                            React.createElement("p", { className: 'type' }, "\u5BC6\u7801\u7BA1\u7406")),
                                        React.createElement(Col, null,
                                            React.createElement(Button, { className: 'btn', onClick: this.handleChange.bind(this, 'pwd') }, "\u4FEE\u6539")))),
                                React.createElement(Row, { className: 'small-block', justify: "space-between", style: { height: 80, marginTop: 20 } },
                                    React.createElement(Col, { span: 10 },
                                        React.createElement("span", { className: 'title' }, "\u767B\u5F55\u8BBE\u5907\u7BA1\u7406")),
                                    React.createElement(Col, null,
                                        React.createElement(Button, { className: 'btn', onClick: this.handleChange.bind(this, 'device') }, "\u7BA1\u7406"))))),
                        React.createElement(Col, { span: 11, style: { width: 620, marginLeft: 20 } },
                            React.createElement("div", { className: 'block border' },
                                React.createElement(Row, { justify: "space-between", style: { height: 74, marginTop: 30, borderBottom: '1px #E6E6E6 solid' } },
                                    React.createElement(Col, { span: 10 },
                                        React.createElement("p", { className: 'type' }, "\u5E10\u6237\u6D3B\u52A8"),
                                        React.createElement("p", { className: 'tip' },
                                            "\u5E10\u6237\u5F02\u5E38\uFF1F",
                                            React.createElement("span", { style: { color: '#00A0D2', cursor: 'pointer' }, onClick: this.handleChange.bind(this, 'disableAccount') }, "\u7981\u7528\u8D26\u6237"))),
                                    React.createElement(Col, null,
                                        React.createElement(Button, { className: 'btn', onClick: this.handleChange.bind(this, 'more') }, "\u66F4\u591A"))),
                                React.createElement("div", { className: 'list' }, activityList && activityList.map((item, index) => {
                                    return React.createElement(Row, { justify: "space-between", className: 'item', key: index },
                                        React.createElement(Col, { span: 6 }, item.operateTime),
                                        React.createElement(Col, { span: 2, offset: 1 }, item.source),
                                        React.createElement(Col, { span: 3, offset: 2 }, item.activityName),
                                        React.createElement(Col, { span: 3, offset: 2, className: item.operateStatus == 'success' ? '' : 'error' }, item.operateStatus),
                                        React.createElement(Col, { span: 4 }, item.ipAddress));
                                })))))))));
    }
}
//# sourceMappingURL=index.js.map