var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { WrapperIndexCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const reminderIcon = require("@webExchangeImgs/userCenter/kyc/reminderIcon.svg");
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.goKyc = (key) => {
            let { history, match } = this.props;
            if (key === 'personal') {
                // 个人认证
                history.push(`${match.path}individual/riskEvaluation`);
            }
            else {
                // 企业认证
                history.push(`${match.path}institution/riskEvaluation`);
            }
        };
    }
    render() {
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center", className: "title" }, "\u9009\u62E9\u8BA4\u8BC1\u7C7B\u578B"),
            React.createElement(Row, { justify: "center", className: "reminderWrapper" },
                React.createElement(Row, { className: "reminder", align: "middle" },
                    React.createElement("img", { src: reminderIcon, className: "reminderIcon" }),
                    "\u540C\u4E00\u79CD\u5E10\u53F7\u53EA\u5141\u8BB8\u6709\u4E00\u79CD\u8BA4\u8BC1\u72B6\u6001\uFF0C\u5373\u53EA\u80FD\u9009\u62E9\u4E2A\u4EBA\u8BA4\u8BC1\u6216\u4F01\u4E1A\u8BA4\u8BC1\u3002")),
            React.createElement(Row, { justify: "center" },
                React.createElement(Row, { className: "infoWrapper" },
                    React.createElement(Col, { span: 12 },
                        React.createElement(Row, { onClick: () => { this.goKyc('personal'); }, className: "infoBox personal" },
                            React.createElement(Row, { justify: "center", className: "infoImg personalImg" }),
                            React.createElement(Row, { justify: "center", className: "infoTitle" }, "\u4E2A\u4EBA"),
                            React.createElement(Row, { justify: "center", className: "infoContent" }, "\u4E2A\u4EBA\u4FE1\u606F > \u8BC1\u4EF6\u4FE1\u606F > \u8D44\u4EA7\u4FE1\u606F > \u4EBA\u8138\u4FE1\u606F > \u901A\u8FC7\u9A8C\u8BC1 ")),
                        React.createElement(Row, { className: "fileTitle" }, "\u9700\u8981\u6587\u4EF6"),
                        React.createElement(Row, { className: "fileContent" }, "1. \u4E2A\u4EBA\u8EAB\u4EFD\u8BC1\u660E\u6587\u4EF6\uFF08\u8EAB\u4EFD\u8BC1\u6216\u62A4\u7167\uFF09"),
                        React.createElement(Row, { className: "fileContent" }, "2. \u5E38\u4F4F\u5730\u5740\u8BC1\u660E\u6587\u4EF6\uFF08\u8FD1\u4E09\u4E2A\u6708\u7684\u94F6\u884C\u8D26\u5355\u6216\u6C34\u7535\u8D39\u8D26\u5355\uFF09")),
                    React.createElement(Col, { span: 12 },
                        React.createElement(Row, { onClick: () => { this.goKyc('org'); }, className: "infoBox org" },
                            React.createElement(Row, { justify: "center", className: "infoImg" }),
                            React.createElement(Row, { justify: "center", className: "infoTitle" }, "\u4F01\u4E1A"),
                            React.createElement(Row, { justify: "center", className: "infoContent" }, "\u5B9E\u9645\u63A7\u5236\u4EBA\u4FE1\u606F > \u4F01\u4E1A\u4FE1\u606F > \u6587\u4EF6\u4E0A\u4F20 > \u4EBA\u8138\u4FE1\u606F > \u901A\u8FC7\u9A8C\u8BC1 ")),
                        React.createElement(Row, { className: "fileTitle" }, "\u9700\u8981\u6587\u4EF6"),
                        React.createElement(Row, { className: "fileContent" }, "1.\u6CD5\u4EBA\u8EAB\u4EFD\u8BC1\u660E\u6587\u4EF6\uFF08\u8EAB\u4EFD\u8BC1\u6216\u62A4\u7167\uFF09"),
                        React.createElement(Row, { className: "fileContent" }, "2. \u5E38\u4F4F\u5730\u5740\u8BC1\u660E\u6587\u4EF6\uFF08\u8FD1\u4E09\u4E2A\u6708\u7684\u94F6\u884C\u8D26\u5355\u6216\u6C34\u7535\u8D39\u8D26\u5355\uFF09"))))));
    }
};
Index = __decorate([
    inject('userStore'),
    observer
], Index);
export default Index;
//# sourceMappingURL=index.js.map