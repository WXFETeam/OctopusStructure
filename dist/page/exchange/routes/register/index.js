var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row } from 'antd';
import { WrappedRegisterCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import WrappedRegisterForm from './regForm';
import RegisterSecondStep from './registerSecondStep';
let Register = class Register extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = () => {
            this.setState({ step: 2 });
        };
        this.state = {
            step: 1
        };
    }
    render() {
        const history = this.props.history;
        return (React.createElement(WrappedRegisterCmp, null,
            React.createElement(Row, { justify: "center", align: "middle", style: { height: '100%' } },
                React.createElement("div", { className: "regFrame" }, this.state.step == 1 ?
                    React.createElement(WrappedRegisterForm, { nextStep: this.nextStep, history: history }) :
                    React.createElement(RegisterSecondStep, null)))));
    }
};
Register = __decorate([
    inject('userStore'),
    observer
], Register);
export default Register;
//# sourceMappingURL=index.js.map