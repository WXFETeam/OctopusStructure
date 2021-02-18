var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Select } from 'antd';
const { Option } = Select;
import { WrapperHeaderCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const logo = require("@webExchangeImgs/logo.png");
let Register = class Register extends React.Component {
    constructor(props) {
        super(props);
        this.changeLocales = (locale) => {
            this.props.langStore.changeLang(locale);
        };
    }
    render() {
        const { userStore, langStore, history } = this.props;
        const { currentLang } = langStore;
        return (React.createElement(WrapperHeaderCmp, null,
            React.createElement(Row, { justify: "space-between" },
                React.createElement(Col, { span: 10 },
                    React.createElement("img", { src: logo, className: "logo", onClick: () => { console.log("123"); } }),
                    React.createElement("ul", { className: "menuBar" },
                        React.createElement("li", { className: "active", onClick: () => { history.push('trade'); } }, intl.get("layout.header.menuBar.exchange")),
                        React.createElement("li", null, intl.get("layout.header.menuBar.help")))),
                React.createElement(Col, { offset: 8, span: 6 },
                    React.createElement(Select, { className: "localesChange", onChange: this.changeLocales, style: { width: 90 }, value: currentLang },
                        React.createElement(Option, { value: "zh-CN" }, "\u4E2D\u6587"),
                        React.createElement(Option, { value: "en-US" }, "English")),
                    !userStore.userInfo.email ?
                        [
                            React.createElement("a", { key: "reg", className: "regBtn confirmBlueBtn", onClick: () => history.push("/register") }, intl.get("layout.header.btn.register")),
                            React.createElement("div", { key: "login", className: "loginBtn", onClick: () => history.push("/login") }, intl.get("layout.header.btn.login"))
                        ] :
                        [
                            React.createElement("div", { key: "userCenter", className: "avatarIcon", onClick: () => history.push("/userCenter") }),
                            React.createElement("div", { key: "order", className: "loginBtn", onClick: () => history.push("/order") }, "\u8BA2\u5355"),
                            React.createElement("div", { key: "assets", className: "loginBtn", onClick: () => history.push("/assets") }, "\u8D44\u4EA7")
                        ]))));
    }
};
Register = __decorate([
    withRouter,
    inject('userStore', 'langStore'),
    observer
], Register);
export default Register;
//# sourceMappingURL=header.js.map