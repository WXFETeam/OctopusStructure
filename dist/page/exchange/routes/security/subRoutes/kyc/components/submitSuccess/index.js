import * as React from "react";
import { WrapperSubmitSuccessCmp } from './styled';
export default class Aduit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { user, match, history } = this.props;
        const statusList = [
            {
                status: 'done',
                text: '提交成功',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'doing',
                text: '第三方审核中',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'not',
                text: '人工初审',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'not',
                text: '人工复审',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'not',
                text: '审核成功',
                date: '2019/12/30 15:09:24'
            }
        ];
        return (React.createElement(WrapperSubmitSuccessCmp, null,
            React.createElement("div", { className: "auditIcon" }),
            React.createElement("div", { className: "auditTit" }, user === 'institution' ? '企业认证审核中' : '个人认证审核中'),
            React.createElement("div", { className: "auditContent" },
                "\u60A8\u5DF2\u6210\u529F\u7533\u8BF7\u8EAB\u4EFD\u8BA4\u8BC1\u3002",
                React.createElement("br", null),
                "\u6211\u4EEC\u4F1A\u57287-10\u4E2A\u5DE5\u4F5C\u65E5\u4E3A\u60A8\u5B8C\u6210\u5BA1\u6838\uFF0C\u8BF7\u60A8\u8010\u5FC3\u7B49\u5F85\u90AE\u4EF6\u901A\u77E5\u3002"),
            React.createElement("div", { className: "auditStatus" }, statusList.map((item, index) => React.createElement("div", { key: index, className: (statusList.length - 1) != index ? "statusItem notLast " + item.status : "statusItem " + item.status },
                React.createElement("div", { className: "icon " + item.status }),
                React.createElement("div", { className: "text" }, item.text),
                item.status === 'done' ? React.createElement("div", { className: "date" }, item.date) : ''))),
            React.createElement("div", { className: "auditLink" },
                React.createElement("a", { onClick: () => {
                        history.push('/security');
                    } }, "\u524D\u5F80\u8D26\u6237\u4E2D\u5FC3 >>"))));
    }
}
//# sourceMappingURL=index.js.map