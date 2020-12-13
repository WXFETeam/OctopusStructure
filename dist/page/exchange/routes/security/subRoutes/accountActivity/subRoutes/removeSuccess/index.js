var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperSuccessCmp } from './styled';
const successIcon = require("@webExchangeImgs/security/success.png");
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qrcode: '',
        };
    }
    render() {
        return (React.createElement(WrapperSuccessCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, null,
                    React.createElement("div", { className: "content" },
                        React.createElement(Row, { justify: "center" },
                            React.createElement(Col, null,
                                React.createElement("img", { src: successIcon }))),
                        React.createElement(Row, { className: "title" },
                            React.createElement("p", null, "\u63D0\u4EA4\u6210\u529F")),
                        React.createElement("div", { className: "tips" },
                            React.createElement("div", null, "\u60A8\u7684\u4EBA\u8138\u4FE1\u606F\u8BA4\u8BC1\u6210\u529F\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u7ED3\u679C\u3002"),
                            React.createElement("div", null, "\u6211\u4EEC\u4F1A\u57287-10\u4E2A\u5DE5\u4F5C\u65E5\u5B8C\u6210\u5BA1\u6838\uFF0C\u5BA1\u6838\u7ED3\u679C\u4F1A\u53D1\u9001\u60A8\u7684\u90AE\u7BB1\uFF0C"),
                            React.createElement("div", null, "\u8BF7\u7559\u610F\u60A8\u7684\u90AE\u4EF6\u3002")))))));
    }
};
Index = __decorate([
    inject('userStore'),
    observer
], Index);
export default Index;
//# sourceMappingURL=index.js.map