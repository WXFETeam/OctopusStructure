var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Input, Tabs } from 'antd';
import { WrapperMFACmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import RemoveModal from '../modal/removeModal';
const { TabPane } = Tabs;
let Verify = class Verify extends React.Component {
    constructor(props) {
        super(props);
        this.setInputStatus = (type, status) => {
            if (type === 'sms') {
                this.setState({
                    inputSMSFocus: status
                });
            }
            else if (type === 'ga') {
                this.setState({
                    inputGaFocus: status
                });
            }
        };
        this.changeCode = (type, e) => {
            let code = e.target.value;
            const codeType = this.state.codeType;
            if (type === 'sms') {
                this.setState({
                    smsCode: code
                });
                if (code.length === 6) {
                    // next
                    this.setState({
                        smsCode: ''
                    });
                }
            }
            else if (type === 'ga') {
                this.setState({
                    gaCode: code
                });
                if (code.length === 6) {
                    // next
                    this.setState({
                        gaCode: ''
                    });
                }
            }
        };
        this.getInputCodeDom = (type) => {
            let status = false;
            let code = '';
            if (type === 'sms') {
                code = this.state.smsCode;
                status = this.state.inputSMSFocus;
            }
            else if (type === 'ga') {
                code = this.state.gaCode;
                status = this.state.inputGaFocus;
            }
            return React.createElement(Row, { className: "inputBox" },
                React.createElement(Input, { className: "input-number", maxLength: 6, value: code, onChange: this.changeCode.bind(this, type), onFocus: this.setInputStatus.bind(this, type, true), onBlur: this.setInputStatus.bind(this, type, false) }),
                React.createElement(Col, { className: status || code.length > 0 ? "firstCol hasInput" : "firstCol", span: 3 }, code.length > 0 ? code.substr(0, 1) : ''),
                React.createElement(Col, { className: code.length > 1 ? "hasInput" : "", span: 3 }, code.length > 1 ? code.substr(1, 1) : ''),
                React.createElement(Col, { className: code.length > 2 ? "hasInput" : "", span: 3 }, code.length > 2 ? code.substr(2, 1) : ''),
                React.createElement(Col, { className: code.length > 3 ? "hasInput" : "", span: 3 }, code.length > 3 ? code.substr(3, 1) : ''),
                React.createElement(Col, { className: code.length > 4 ? "hasInput" : "", span: 3 }, code.length > 4 ? code.substr(4, 1) : ''),
                React.createElement(Col, { className: code.length > 5 ? "hasInput" : "", span: 3 }, code.length > 5 ? code.substr(5, 1) : ''));
        };
        this.state = {
            smsCode: '',
            gaCode: '',
            codeType: '4',
            inputGaFocus: false,
            inputSMSFocus: false,
            removeModal: false
        };
    }
    render() {
        const codeType = this.state.codeType;
        const smsDom = React.createElement("div", null,
            React.createElement("div", { className: "tit smsTit" }, "\u77ED\u4FE1\u9A8C\u8BC1"),
            React.createElement("div", { className: "sendBox" },
                React.createElement("p", { className: "content" },
                    "\u8BF7\u8F93\u5165\u60A8\u5728\u624B\u673A",
                    common.formatPhone('13612345414'),
                    "\u4E0A\u6536\u5230\u7684\u516D\u4F4D\u6570\u9A8C\u8BC1\u7801"),
                React.createElement(Button, null, "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801")),
            this.getInputCodeDom('sms'),
            React.createElement("div", { className: "pointBox" },
                React.createElement("span", null,
                    "\u6536\u4E0D\u5230\u77ED\u4FE1\uFF1F",
                    React.createElement("a", null, "\u8BD5\u8BD5\u8BED\u97F3\u9A8C\u8BC1\u7801")),
                React.createElement("a", { className: "forgetPhone" }, "\u4E22\u5931\u624B\u673A\uFF1F")));
        const gaDom = React.createElement("div", null,
            React.createElement("div", { className: "tit gaTit" }, "\u8C37\u6B4C\u9A8C\u8BC1"),
            React.createElement("p", { className: "content" }, "\u8BF7\u8F93\u5165\u8C37\u6B4C\u9A8C\u8BC1App\u4E2D\u76846\u4F4D\u6570\u9A8C\u8BC1\u7801"),
            this.getInputCodeDom('ga'),
            React.createElement("div", { className: "pointBox" },
                React.createElement("a", { className: "forgetGa" }, "\u4E22\u5931\u8C37\u6B4C\u9A8C\u8BC1\uFF1F")));
        return (React.createElement(WrapperMFACmp, null,
            React.createElement(Row, { justify: "center", style: { height: '100%', paddingTop: 96 } },
                React.createElement("div", { className: "frame" },
                    React.createElement("div", { className: "title" }, "\u4E8C\u6B21\u9A8C\u8BC1"),
                    codeType === '1' ?
                        React.createElement("div", { className: "frameItem sms" }, smsDom) : '',
                    codeType === '2' ?
                        React.createElement("div", { className: "frameItem ga" }, gaDom) : '',
                    codeType === '3' ?
                        React.createElement("div", { className: "frameItem both" },
                            smsDom,
                            gaDom,
                            React.createElement(Button, { className: "confirmBtn" }, "\u786E\u8BA4")) : '',
                    codeType === '4' ?
                        React.createElement("div", { className: "frameItem smsOrGa" },
                            React.createElement(Tabs, { defaultActiveKey: "sms" },
                                React.createElement(TabPane, { tab: "\u77ED\u4FE1\u9A8C\u8BC1", key: "sms" }, smsDom),
                                React.createElement(TabPane, { tab: "\u8C37\u6B4C\u9A8C\u8BC1", key: "ga" }, gaDom))) : '')),
            this.state.removeModal == true ? React.createElement(RemoveModal, { _close: () => this.setState({ removeModal: false }) }) : ""));
    }
};
Verify = __decorate([
    inject('userStore'),
    observer
], Verify);
export default Verify;
//# sourceMappingURL=index.js.map