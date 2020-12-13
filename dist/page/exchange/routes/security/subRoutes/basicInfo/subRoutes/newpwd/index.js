var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Form, Button, Input, message } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const originmail = require("@webExchangeImgs/mail/originmail.png");
let NewPwd = class NewPwd extends React.Component {
    constructor(props) {
        super(props);
        this.showOrHidePwd = () => {
            this.setState({
                showOrHidePwd: !this.state.showOrHidePwd,
            });
        };
        this.showOrHidePwdConf = () => {
            this.setState({
                showOrHidePwdConf: !this.state.showOrHidePwdConf,
            });
        };
        this.onFinish = values => {
            let that = this;
            let params = {
                email: values.email ? values.email : "",
                password: values.password ? values.password : ""
            };
            ajax({
                url: 'security.updateEmail',
                data: params,
                isFullData: true,
                callback(json) {
                    if (json.errNo == "0") {
                        message.error('success');
                        that.props.history.push('/security/basicInfo/verify');
                    }
                    else {
                        message.error(json.errMsg);
                    }
                }
            });
        };
        this.state = {
            display: 'down',
            showOrHidePwd: true,
            showOrHidePwdConf: true
        };
    }
    clickArrow(tag) {
        this.setState({
            display: tag,
        });
    }
    render() {
        const { history } = this.props;
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, null,
                    React.createElement(Row, { style: { paddingBottom: "48px" }, justify: "center" },
                        React.createElement(Col, { className: "title" }, "\u66F4\u6362\u90AE\u7BB1")),
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "wrapper" },
                            React.createElement(Row, null,
                                React.createElement(Form, { className: "form", onFinish: this.onFinish },
                                    React.createElement(Form.Item, { style: { marginTop: "60px" }, name: "email" },
                                        React.createElement(Input, { placeholder: "\u65B0\u90AE\u7BB1" })),
                                    React.createElement(Form.Item, { style: { marginTop: "60px" }, name: "emailConfirm" },
                                        React.createElement(Input, { placeholder: "\u786E\u8BA4\u65B0\u90AE\u7BB1" })),
                                    React.createElement(Form.Item, { style: { marginTop: "60px" }, name: "password" },
                                        React.createElement("div", null,
                                            React.createElement(Input, { type: this.state.showOrHidePwd ? "password" : "text", className: "password", placeholder: '\u65B0\u5BC6\u7801' }),
                                            React.createElement("div", { onClick: this.showOrHidePwd, className: this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide" }))),
                                    React.createElement(Form.Item, { style: { marginTop: "60px" }, name: "passwordConfirm" },
                                        React.createElement("div", null,
                                            React.createElement(Input, { type: this.state.showOrHidePwdConf ? "password" : "text", className: "password", placeholder: '\u786E\u8BA4\u65B0\u5BC6\u7801' }),
                                            React.createElement("div", { onClick: this.showOrHidePwdConf, className: this.state.showOrHidePwdConf ? "pwdStatus show" : "pwdStatus hide" }))),
                                    React.createElement(Button, { className: "next-btn", type: "primary", htmlType: "submit" }, "\u4E0B\u4E00\u6B65")))))))));
    }
};
NewPwd = __decorate([
    inject('userStore'),
    observer
], NewPwd);
export default NewPwd;
//# sourceMappingURL=index.js.map