var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Button, Input } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';
import Qrcode from 'qrcode.react';
let Step2 = class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.getGAInfo = () => {
            let that = this;
            ajax({
                url: 'MFA.getGoogleKey',
                method: 'get',
                data: {},
                callback(data) {
                    that.setState({
                        gaInfo: data
                    });
                    common.setLS('GA', data);
                }
            });
        };
        this.handleSubmit = () => {
            this.props.nextStep(2);
        };
        this.state = {
            gaInfo: {
                qrcode: '',
                secret: ''
            }
        };
    }
    componentDidMount() {
        let gaInfo = common.getLS('GA');
        if (gaInfo) {
            this.setState({ gaInfo });
        }
        else {
            this.getGAInfo();
        }
    }
    render() {
        return (React.createElement(Content, null,
            React.createElement("p", { className: 'stepTitle' }, "\u7528\u8C37\u6B4C\u9A8C\u8BC1APP\u626B\u63CF\u4E8C\u7EF4\u7801"),
            React.createElement("div", { className: 'box', style: { width: 320 } },
                React.createElement(Qrcode, { value: this.state.gaInfo && this.state.gaInfo.qrcode, size: 80 }),
                React.createElement("div", { style: { marginLeft: 25 } },
                    React.createElement("p", { style: { fontSize: 12, color: '#76787E' } }, "\u5982\u679C\u60A8\u65E0\u6CD5\u626B\u63CF\u8FD9\u4E2A\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u5728App\u4E2D\u624B\u52A8\u8F93\u5165\u8FD9\u4E32\u5B57\u7B26"),
                    React.createElement(Input, { value: this.state.gaInfo && this.state.gaInfo.secret, className: 'qrCodeInput', disabled: true }))),
            React.createElement("div", { className: 'btnWrapper' },
                React.createElement(Button, { className: "btn", type: "primary", onClick: this.handleSubmit }, "\u4E0B\u4E00\u6B65")),
            React.createElement("p", { className: 'return', onClick: () => this.props.returnPage(2) }, "\u8FD4\u56DE\u4E0A\u4E00\u6B65")));
    }
};
Step2 = __decorate([
    inject('userStore'),
    observer
], Step2);
export default Step2;
//# sourceMappingURL=step2.js.map