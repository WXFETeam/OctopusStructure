var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { withRouter } from 'react-router-dom';
const authToken = (WrappedComponent) => {
    let CheckAuth = class CheckAuth extends React.Component {
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            const { userStore, history } = this.props;
            if (!userStore.userInfo.token) {
                history.push("/login");
            }
        }
        render() {
            return (React.createElement(WrappedComponent, Object.assign({}, this.props)));
        }
    };
    CheckAuth = __decorate([
        inject("userStore"),
        observer
    ], CheckAuth);
    return withRouter(CheckAuth);
};
export default authToken;
//# sourceMappingURL=authToken.js.map