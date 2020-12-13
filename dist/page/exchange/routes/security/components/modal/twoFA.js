var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperTwoFACmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");
const googleIcon = require("@webExchangeImgs/userCenter/twofa/google.png");
let TwoFA = class TwoFA extends React.Component {
    constructor(props) {
        super(props);
        this._onSubmit = () => {
        };
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.handleClick = (type) => {
            const { history } = this.props;
            if (type == 'GA') {
                history.push('/userCenter/gaBind');
            }
            else if (type == 'phone') {
                history.push('/userCenter/phoneBind');
            }
        };
        this.state = {};
    }
    render() {
        return (React.createElement(Modal, { className: 'twoFAModal', visible: true, centered: true, maskClosable: true, title: React.createElement("p", { className: 'title' }, "\u4E3A\u4E86\u4FDD\u62A4\u60A8\u7684\u8D26\u6237\u5B89\u5168\uFF0C\u8BF7\u5F00\u542F\u4E8C\u6B21\u9A8C\u8BC1"), onCancel: this._onClose, footer: null },
            React.createElement(WrapperTwoFACmp, null,
                React.createElement(Row, { className: 'btnWrapper' },
                    React.createElement(Col, { span: 12, style: { width: 176 }, className: 'btn', onClick: this.handleClick.bind(this, 'GA') },
                        React.createElement("img", { src: googleIcon }),
                        React.createElement(Button, null, "\u8C37\u6B4C\u9A8C\u8BC1")),
                    React.createElement(Col, { span: 12, style: { width: 176, marginLeft: 40 }, className: 'btn', onClick: this.handleClick.bind(this, 'phone') },
                        React.createElement("img", { src: phoneIcon }),
                        React.createElement(Button, null, "\u624B\u673A\u9A8C\u8BC1"))),
                React.createElement("p", { className: 'tip' }, "\u6211\u5DF2\u77E5\u6653\u4E0D\u5F00\u542F\u4E8C\u6B21\u9A8C\u8BC1\u7684\u98CE\u9669"),
                React.createElement("p", { className: 'des', onClick: this._onClose }, "\u6682\u65F6\u4E0D\u5F00\u542F"))));
    }
};
TwoFA = __decorate([
    inject('userStore'),
    observer
], TwoFA);
export default TwoFA;
//# sourceMappingURL=twoFA.js.map