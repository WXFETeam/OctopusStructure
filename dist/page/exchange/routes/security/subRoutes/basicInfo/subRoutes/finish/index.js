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
const finish = require("@webExchangeImgs/mail/finish.png");
let Finish = class Finish extends React.Component {
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
                        React.createElement("img", { className: "origin-mail", src: finish, alt: "" })),
                    React.createElement(Row, { style: { paddingTop: "30px" }, justify: "center" },
                        React.createElement(Col, { className: "title" }, "\u5DF2\u66F4\u6362\u90AE\u7BB1")),
                    React.createElement(Row, { style: { padding: "32px 40px 0" }, justify: "center" },
                        React.createElement(Col, null, "\u60A8\u5DF2\u6210\u529F\u5B8C\u6210\u90AE\u7BB1\u53D8\u66F4\uFF0C\u60A8\u53EF\u5728\u8D26\u6237\u4E2D\u5FC3\u8FDB\u884C\u66F4\u591A\u5B89\u5168\u64CD\u4F5C")),
                    React.createElement(Row, { style: { paddingTop: "60px" }, justify: "center" },
                        React.createElement(Button, { type: "link" }, "\u524D\u5F80\u8D26\u6237\u4E2D\u5FC3>>"))))));
    }
};
Finish = __decorate([
    inject('userStore'),
    observer
], Finish);
export default Finish;
//# sourceMappingURL=index.js.map