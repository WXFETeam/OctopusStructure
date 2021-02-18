var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row } from 'antd';
import { WrapperLoginCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
// import WrappedLoginForm from './loginForm';
import LoginForm from './loginForm';
let Login = class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { history } = this.props;
        return (React.createElement(WrapperLoginCmp, null,
            React.createElement(Row, { justify: "center", style: { height: '100%', paddingTop: 96 } },
                React.createElement("div", { className: "loginFrame" },
                    React.createElement("div", { className: "title" }, "\u767B\u5F55"),
                    React.createElement(LoginForm, { history: history })))));
    }
};
Login = __decorate([
    inject('userStore'),
    observer
], Login);
export default Login;
//# sourceMappingURL=index.js.map