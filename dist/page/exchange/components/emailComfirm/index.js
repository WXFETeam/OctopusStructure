var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { EmailConfirmCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const originmail = require("@webExchangeImgs/mail/originmail.png");
const hash = [{
        name: "qq.com",
        href: "http://mail.qq.com"
    }, {
        name: "gmail.com",
        href: "http://mail.google.com"
    }, {
        name: "sina.com",
        href: "http://mail.sina.com.cn"
    }, {
        name: "163.com",
        href: "http://mail.163.com"
    }, {
        name: "126.com",
        href: "http://mail.126.com"
    }, {
        name: "sohu.com",
        href: "http://mail.sohu.com/"
    }, {
        name: "tom.com",
        href: "http://mail.tom.com/"
    }, {
        name: "sogou.com",
        href: "http://mail.sogou.com/"
    }, {
        name: "139.com",
        href: "http://mail.10086.cn/"
    }, {
        name: "hotmail.com",
        href: "http://www.hotmail.com"
    }, {
        name: "live.com",
        href: "http://login.live.com/"
    }, {
        name: "live.cn",
        href: "http://login.live.cn/"
    }, {
        name: "live.com.cn",
        href: "http://login.live.com.cn"
    }, {
        name: "189.com",
        href: "http://webmail16.189.cn/webmail/"
    }, {
        name: "yahoo.com.cn",
        href: "http://mail.cn.yahoo.com/"
    }, {
        name: "yahoo.cn",
        href: "http://mail.cn.yahoo.com/"
    }, {
        name: "eyou.com",
        href: "http://www.eyou.com/"
    }, {
        name: "21cn.com",
        href: "http://mail.21cn.com/"
    }, {
        name: "188.com",
        href: "http://www.188.com/"
    }, {
        name: "foxmail.com",
        href: "http://www.foxmail.com"
    }];
let EmailConfirm = class EmailConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.emailLink = (email) => {
            let url = email.split("@")[1];
            hash.map((item, index) => {
                if (item.name == url) {
                    this.setState({
                        mailTo: item.href,
                        showLink: true
                    });
                }
            });
        };
        this.state = {
            mailTo: "",
            showLink: false
        };
    }
    componentWillMount() {
        this.emailLink("wangcuiqing@163.com");
    }
    render() {
        const { mailTo, showLink } = this.state;
        return (React.createElement(EmailConfirmCmp, null,
            React.createElement("section", { className: "emailModal" },
                React.createElement("img", { className: "emailIcon", src: originmail }),
                React.createElement("div", { className: "emailOk" }, "\u90AE\u7BB1\u9A8C\u8BC1"),
                React.createElement("div", { className: "center", style: { fontSize: 14, marginBottom: "20px" } }, "\u6211\u4EEC\u5DF2\u5411\u5982\u4E0B\u90AE\u7BB1\u53D1\u9001\u4E86\u4E00\u5C01\u90AE\u4EF6***@**.com\uFF0C\u8BF7\u6309\u7167\u90AE\u4EF6\u5185\u5BB9\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002"),
                showLink && React.createElement("a", { className: "center", href: mailTo, target: "_blank", style: { fontSize: 14, color: '#00A0D2' } }, "\u53BB\u90AE\u7BB1\u786E\u8BA4 >>"),
                React.createElement("div", { className: "resendEmail" },
                    "\u672A\u6536\u5230\u90AE\u4EF6\uFF1F",
                    React.createElement("a", null, "\u91CD\u65B0\u53D1\u9001")))));
    }
};
EmailConfirm = __decorate([
    inject('userStore'),
    observer
], EmailConfirm);
export default EmailConfirm;
//# sourceMappingURL=index.js.map