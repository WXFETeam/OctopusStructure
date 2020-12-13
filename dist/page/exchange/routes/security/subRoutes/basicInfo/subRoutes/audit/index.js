var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const audit = require("@webExchangeImgs/mail/audit.png");
let Audit = class Audit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'down'
        };
    }
    clickArrow(tag) {
        this.setState({
            display: tag,
        });
    }
    render() {
        const { history } = this.props;
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { className: "wrapper" },
                    React.createElement(Row, { style: { paddingTop: "60px" }, justify: "center" },
                        React.createElement("img", { className: "origin-mail", src: audit, alt: "" })),
                    React.createElement(Row, { style: { paddingTop: "30px" }, justify: "center" },
                        React.createElement(Col, { className: "title" }, "\u7B49\u5F85\u5BA1\u6838")),
                    React.createElement(Row, { style: { padding: "32px 40px 0" }, "justify-content": "center" },
                        React.createElement(Col, { style: { width: "100%" } },
                            React.createElement("div", { style: { textAlign: "center" } }, "\u60A8\u5DF2\u6210\u529F\u7533\u8BF7\u53D8\u66F4\u90AE\u7BB1\uFF0C"),
                            React.createElement("div", { style: { textAlign: "center" } }, "\u6211\u4EEC\u4F1A\u57287-10\u4E2A\u5DE5\u4F5C\u65E5\u4E3A\u60A8\u5B8C\u6210\u5BA1\u6838\uFF0C\u8BF7\u4F60\u8010\u5FC3\u7B49\u5F85\u90AE\u4EF6\u901A\u77E5\u3002"))),
                    React.createElement(Row, { style: { paddingTop: "60px" }, justify: "center" },
                        React.createElement(Button, { type: "link" }, "\u524D\u5F80\u8D26\u6237\u4E2D\u5FC3>>"))))));
    }
};
Audit = __decorate([
    inject('userStore'),
    observer
], Audit);
export default Audit;
//# sourceMappingURL=index.js.map