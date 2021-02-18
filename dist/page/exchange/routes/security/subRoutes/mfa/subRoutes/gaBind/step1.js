var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Button } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';
const appStore = require("@webExchangeImgs/userCenter/twofa/appStore.png");
const googlePlay = require("@webExchangeImgs/userCenter/twofa/googlePlay.png");
let Step1 = class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = () => {
            this.props.nextStep(1);
        };
        this.state = {};
    }
    render() {
        return (React.createElement(Content, null,
            React.createElement("p", { className: 'stepTitle' }, "\u4E0B\u8F7D\u8C37\u6B4C\u9A8C\u8BC1APP"),
            React.createElement("div", { className: 'box' },
                React.createElement("img", { src: appStore }),
                React.createElement("img", { src: googlePlay })),
            React.createElement("div", { className: 'btnWrapper' },
                React.createElement(Button, { className: "btn", type: "primary", onClick: this.handleSubmit, style: { marginTop: 86 } }, "\u4E0B\u4E00\u6B65"))));
    }
};
Step1 = __decorate([
    inject('userStore'),
    observer
], Step1);
export default Step1;
//# sourceMappingURL=step1.js.map