var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Steps } from 'antd';
import { WrapperGACmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
const { Step } = Steps;
let GABind = class GABind extends React.Component {
    constructor(props) {
        super(props);
        this.changeStepStatus = (index) => {
            let curIndex = this.state.current;
            if (curIndex > index) {
                return 'finish';
            }
            else if (curIndex == index) {
                return 'process';
            }
            else if (curIndex < index) {
                return 'wait';
            }
        };
        this._returnPage = (page) => {
            this.setState({
                current: page - 1
            });
        };
        this._nextStep = (page) => {
            if (page == 4) {
                this.props.history.push('/security');
            }
            else {
                this.setState({
                    current: page + 1
                });
            }
        };
        this.state = {
            current: 1
        };
    }
    render() {
        let Options = {
            returnPage: this._returnPage.bind(this)
            // verificationInfo:this.state.verificationInfo,
            // nextStep:this.handleNext.bind(this),
            // goBack:this.goBack.bind(this),
            // show:() => this.setState({ isShow: true })
        };
        return (React.createElement(WrapperGACmp, null,
            React.createElement(Row, { justify: "center", style: { height: '100%', paddingTop: 100 } },
                React.createElement("div", { className: "title" }, "\u542F\u7528\u8C37\u6B4C\u9A8C\u8BC1"),
                React.createElement("div", { className: 'frame' },
                    React.createElement(Steps, { current: this.state.current },
                        React.createElement(Step, { title: 'STEP1', status: this.changeStepStatus(1) }),
                        React.createElement(Step, { title: 'STEP2', status: this.changeStepStatus(2) }),
                        React.createElement(Step, { title: 'STEP3', status: this.changeStepStatus(3) }),
                        React.createElement(Step, { title: 'STEP4', status: this.changeStepStatus(4) })),
                    this.state.current == 1 ?
                        React.createElement(Step1, { nextStep: this._nextStep }) :
                        this.state.current == 2 ?
                            React.createElement(Step2, { returnPage: this._returnPage, nextStep: this._nextStep }) :
                            this.state.current == 3 ?
                                React.createElement(Step3, { returnPage: this._returnPage, nextStep: this._nextStep }) :
                                this.state.current == 4 ?
                                    React.createElement(Step4, { returnPage: this._returnPage, nextStep: this._nextStep }) : null))));
    }
};
GABind = __decorate([
    renderBreadcrumbs,
    inject('userStore'),
    observer
], GABind);
export default GABind;
//# sourceMappingURL=index.js.map