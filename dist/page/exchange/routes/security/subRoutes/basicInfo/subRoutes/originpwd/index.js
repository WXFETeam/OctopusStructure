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
let OriginPwd = class OriginPwd extends React.Component {
    constructor(props) {
        super(props);
        this.showOrHidePwd = () => {
            this.setState({
                showOrHidePwd: !this.state.showOrHidePwd
            });
        };
        this.onFinish = values => {
            let that = this;
            let params = {
                email: values.email ? values.email : "",
                password: values.password ? values.password : ""
            };
            ajax({
                url: 'security.authPassword',
                data: params,
                isFullData: true,
                callback(json) {
                    if (json.errNo == "0") {
                        // message.error(json.errMsg)
                        that.props.history.push('/security/basicInfo/newpwd');
                    }
                    else {
                        message.error(json.errMsg);
                    }
                }
            });
        };
        this.state = {
            display: 'down',
            showOrHidePwd: true
        };
    }
    render() {
        const { history } = this.props;
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, null,
                    React.createElement(Row, { style: { paddingBottom: "48px" }, justify: "center" },
                        React.createElement(Col, { className: "title" }, "\u539F\u90AE\u7BB1\u5BC6\u7801\u9A8C\u8BC1")),
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "wrapper" },
                            React.createElement(Row, null,
                                React.createElement(Form, { className: "form", onFinish: this.onFinish },
                                    React.createElement(Form.Item, { style: { marginTop: "60px" }, name: "email" },
                                        React.createElement(Input, { placeholder: "\u539F\u90AE\u7BB1" })),
                                    React.createElement(Form.Item, { style: { marginTop: "60px" }, name: "password" },
                                        React.createElement("div", null,
                                            React.createElement(Input, { type: this.state.showOrHidePwd ? "password" : "text", className: "password", placeholder: '\u5BC6\u7801' }),
                                            React.createElement("div", { onClick: this.showOrHidePwd, className: this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide" }))),
                                    React.createElement(Form.Item, null,
                                        React.createElement(Button, { className: "next-btn", type: "primary", htmlType: "submit" }, "\u4E0B\u4E00\u6B65"))))))))));
    }
};
OriginPwd = __decorate([
    inject('userStore'),
    observer
], OriginPwd);
export default OriginPwd;
//# sourceMappingURL=index.js.map