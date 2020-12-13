var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { WrappedForgotPwdStepFourthCmp } from './styled';
let StepFourth = class StepFourth extends React.Component {
    constructor(props) {
        super(props);
        this.setInputFocus = () => {
            this.numInput.focus();
            var maxLen = this.state.codeNum.length;
            this.numInput.setSelectionRange(maxLen, maxLen);
        };
        this.changeCode = (e) => {
            e.persist();
            let that = this;
            let codeNum = e.target.value.slice(0, 6);
            this.setState({ codeNum });
            if (codeNum.length == 6) {
                ajax({
                    url: "register.verifyEmailCode",
                    method: "post",
                    data: { code: codeNum },
                    callback(res) {
                        // 错误处理？
                        that.props.history.push('/login');
                    }
                });
            }
        };
        this.state = {
            codeNum: ""
        };
    }
    render() {
        return (React.createElement(WrappedForgotPwdStepFourthCmp, null,
            React.createElement(Row, { className: "title" }, "\u4E8C\u6B21\u9A8C\u8BC1"),
            React.createElement(Row, { className: "content" }, "\u8BF7\u8F93\u5165\u8C37\u6B4C\u9A8C\u8BC1App\u4E2D\u76846\u4F4D\u6570\u9A8C\u8BC1\u7801"),
            React.createElement(Row, { className: "code", justify: "space-between", onClick: this.setInputFocus },
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 0 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(0, 1)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 1 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(1, 2)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 2 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(2, 3)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 3 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(3, 4)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 4 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(4, 5)),
                React.createElement(Col, { span: 3, className: this.state.codeNum.length > 5 ? "inputItem active" : "inputItem" }, this.state.codeNum.slice(5, 6)),
                React.createElement("input", { style: { opacity: 0 }, type: "text", ref: refs => this.numInput = refs, onChange: this.changeCode, value: this.state.codeNum })),
            React.createElement(Row, { justify: "end" },
                React.createElement("a", null, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1?"))));
    }
};
StepFourth = __decorate([
    withRouter
], StepFourth);
export default StepFourth;
//# sourceMappingURL=stepFourth.js.map