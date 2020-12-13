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
const noteBook = require("@webExchangeImgs/userCenter/twofa/noteBook.png");
let Step3 = class Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = () => {
            this.props.nextStep(3);
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
    }
    render() {
        return (React.createElement(Content, null,
            React.createElement("p", { className: 'stepTitle' }, "\u8BF7\u628A\u5BC6\u94A5\u5199\u5728\u7EB8\u4E0A\u3002\u5F53\u624B\u673A\u4E22\u5931\u65F6\uFF0C\u8FD9\u4E32\u5BC6\u94A5\u80FD\u591F\u5E2E\u52A9\u60A8\u91CD\u7F6E\u8C37\u6B4C\u9A8C\u8BC1"),
            React.createElement("div", { className: 'box', style: { width: 365 } },
                React.createElement("img", { src: noteBook }),
                React.createElement("div", { style: { marginLeft: 25 } },
                    React.createElement("p", { style: { fontSize: 12, color: '#76787E' } }, "\u901A\u5E38\uFF0C\u63D0\u4EA4\u5DE5\u5355\u91CD\u7F6E\u8C37\u6B4C\u9A8C\u8BC1\u81F3\u5C11\u9700\u8981\u82B17\u5929\u65F6\u95F4"),
                    React.createElement(Input, { className: 'qrCodeInput', style: { marginTop: 18, textAlign: 'center' }, disabled: true, value: this.state.gaInfo && this.state.gaInfo.secret }))),
            React.createElement("div", { className: 'btnWrapper' },
                React.createElement(Button, { className: "btn", type: "primary", onClick: this.handleSubmit }, "\u4E0B\u4E00\u6B65")),
            React.createElement("p", { className: 'return', onClick: () => this.props.returnPage(3) }, "\u8FD4\u56DE\u4E0A\u4E00\u6B65")));
    }
};
Step3 = __decorate([
    inject('userStore'),
    observer
], Step3);
export default Step3;
//# sourceMappingURL=step3.js.map