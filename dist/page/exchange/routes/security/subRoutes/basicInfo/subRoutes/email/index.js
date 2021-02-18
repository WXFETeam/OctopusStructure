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
const lockIcon = require("@webExchangeImgs/mail/lockIcon.png");
const processIcon = require("@webExchangeImgs/mail/processIcon.png");
const arrow = require("@webExchangeImgs/mail/arrow.png");
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'down'
        };
    }
    toNext() {
        let that = this;
        ajax({
            url: 'security.sendUpdateEmail',
            data: {
                email: '1964418121@qq.com'
            },
            isFullData: true,
            callback(json) {
                if (json.errNo == "0") {
                    that.props.history.push('/security/basicInfo/originmail');
                }
            }
        });
    }
    render() {
        const { history } = this.props;
        const steps = [{
                value: '1',
                label: '1.原邮箱验证'
            }, {
                value: '2',
                label: '2.原邮箱密码验证'
            }, {
                value: '3',
                label: '3.填写新邮箱'
            }, {
                value: '4',
                label: '4.新邮箱验证'
            }, , {
                value: '5',
                label: '5.完成'
            }
        ];
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { style: { paddingBottom: "40px" }, justify: "center" },
                React.createElement(Col, { className: "title" }, "\u66F4\u6362\u90AE\u7BB1")),
            React.createElement(Row, { style: { paddingBottom: "20px" }, justify: "center" },
                React.createElement(Col, { className: "title-confirm" }, "\u8BF7\u786E\u8BA4\u60A8\u5728\u8BBF\u95EEhttps://pro.hashkey.com")),
            React.createElement(Row, { style: { paddingBottom: "58px" }, justify: "center" },
                React.createElement(Col, { className: "title-link" },
                    React.createElement(Row, { style: { height: "100%" }, justify: "center", align: "middle" },
                        React.createElement(Col, { style: { fontSize: 0 } },
                            React.createElement("img", { className: "lock-icon", src: lockIcon, alt: "" })),
                        React.createElement(Col, { style: { marginLeft: "8px" } },
                            React.createElement("span", { style: { color: "#5EB44E" } }, "https://"),
                            React.createElement("span", null, "pro.hashkey.com"))))),
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { className: "process" },
                    React.createElement(Row, { style: { marginBottom: "60px" }, className: "process-title", align: "middle" },
                        React.createElement(Col, { style: { fontSize: 0, marginLeft: "24px" } },
                            React.createElement("img", { className: "process-icon", src: processIcon, alt: "" })),
                        React.createElement(Col, { style: { marginLeft: "12px" } }, "1.\u66F4\u6362\u90AE\u7BB1\u9700\u5148\u542F\u7528\u8C37\u6B4C\u6216\u624B\u673A\u9A8C\u8BC1\u3002"),
                        React.createElement(Col, { style: { marginLeft: "36px" } }, "2.\u66F4\u6362\u90AE\u7BB1\u6210\u529F\u540E\uFF0C\u60A8\u7684\u63D0\u73B0\u5C06\u88AB\u7981\u75285\u5929")),
                    React.createElement(Row, { style: { marginBottom: "80px" }, className: "", justify: "center" }, steps.map((item, index) => {
                        if (index == steps.length - 1) {
                            return (React.createElement(Col, { key: index },
                                React.createElement(Row, { style: { marginBottom: "24px" } },
                                    React.createElement("img", { className: "step-img", src: require(`@webExchangeImgs/mail/step${item.value}.png`), alt: "" })),
                                React.createElement(Row, { justify: "center" }, item.label)));
                        }
                        return (React.createElement(Col, null,
                            React.createElement(Row, null,
                                React.createElement(Col, null,
                                    React.createElement(Row, { style: { marginBottom: "24px" } },
                                        React.createElement("img", { className: "step-img", src: require(`@webExchangeImgs/mail/step${item.value}.png`), alt: "" })),
                                    React.createElement(Row, { justify: "center" }, item.label)),
                                React.createElement(Col, null,
                                    React.createElement("img", { className: "arrow-img", src: arrow, alt: "" })))));
                    })),
                    React.createElement(Row, { style: { marginBottom: "40px" }, justify: "center" },
                        React.createElement(Button, { className: "next-btn", type: "primary", onClick: this.toNext.bind(this) }, "\u4E0B\u4E00\u6B65")),
                    React.createElement(Row, { justify: "center" },
                        React.createElement(Button, { className: "forget-btn", type: "link", onClick: () => this.props.history.push('/security/basicInfo/faceverify') }, "\u4E22\u5931\u90AE\u7BB1\uFF1F"))))));
    }
};
Index = __decorate([
    inject('userStore'),
    observer,
    renderBreadcrumbs
], Index);
export default Index;
//# sourceMappingURL=index.js.map