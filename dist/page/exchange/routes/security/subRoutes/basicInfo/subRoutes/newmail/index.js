var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const originmail = require("@webExchangeImgs/mail/originmail.png");
let NewMail = class NewMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'down'
        };
    }
    sendAgain() {
        let that = this;
        ajax({
            url: 'security.sendUpdateEmail',
            data: {
                email: '1964418121@qq.com'
            },
            callback(json) {
                console.log(json.errNo);
                if (json.errNo == "0") {
                    that.props.history.push('/security/basicInfo/finish');
                }
            }
        });
    }
    render() {
        const { history } = this.props;
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { className: "wrapper" },
                    React.createElement(Row, { style: { paddingTop: "60px" }, justify: "center" },
                        React.createElement("img", { className: "origin-mail", src: originmail, alt: "" })),
                    React.createElement(Row, { style: { paddingTop: "30px" }, justify: "center" },
                        React.createElement(Col, { className: "title" }, "\u65B0\u90AE\u7BB1\u9A8C\u8BC1")),
                    React.createElement(Row, { style: { padding: "32px 40px 0" }, justify: "center" },
                        React.createElement(Col, null, "\u6211\u4EEC\u5DF2\u5411\u5982\u4E0B\u90AE\u7BB1\u53D1\u9001\u4E86\u4E00\u5C01\u90AE\u4EF6***@***.com\uFF0C\u8BF7\u6309\u7167\u90AE\u4EF6\u5185\u5BB9\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002")),
                    React.createElement(Row, { className: "confirm-btn", style: { padding: "20px 0 30px" }, justify: "center" },
                        React.createElement(Button, { type: "link" }, "\u53BB\u90AE\u7BB1\u786E\u8BA4>>")),
                    React.createElement(Row, { style: { paddingTop: "30px" }, justify: "center", align: "middle" },
                        React.createElement("span", null, "\u672A\u6536\u5230\u90AE\u4EF6\uFF1F"),
                        React.createElement(Button, { type: "link", onClick: this.sendAgain.bind(this) }, "\u91CD\u65B0\u53D1\u9001"))))));
    }
};
NewMail = __decorate([
    inject('userStore'),
    observer
], NewMail);
export default NewMail;
//# sourceMappingURL=index.js.map