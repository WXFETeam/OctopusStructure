import * as React from "react";
import { Row, Button } from 'antd';
import { WrapperResultCmp } from './styled';
export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.goKyc = () => {
            let { history, match } = this.props;
            history.push(`${match.path.split('riskEvaluation')[0]}identification/customerInfo`);
        };
        this.state = {};
    }
    render() {
        const submitPaper = common.getLS('submitPaper');
        let restart = this.props.restart;
        return (React.createElement(WrapperResultCmp, null,
            React.createElement(Row, { justify: "center", className: "title" }, "\u786E\u8BA4\u98CE\u9669\u8BC4\u6D4B\u7ED3\u679C"),
            submitPaper.levelCode != "C1" ?
                React.createElement("div", { className: "result result1" },
                    React.createElement(Row, { justify: "center", className: "contentWrapper" },
                        React.createElement("div", { className: "firstLine" },
                            "\u60A8\u597D\uFF0C\u6839\u636E\u60A8\u7684\u586B\u5199\u5185\u5BB9\uFF0C\u60A8\u76EE\u524D\u7684\u98CE\u9669\u627F\u53D7\u80FD\u529B\u7B49\u7EA7\u4E3A\uFF1A",
                            React.createElement("span", null, submitPaper.riskKind)),
                        "\u4E0D\u6EE1\u8DB3\u8FDB\u884C\u6570\u5B57\u8D27\u5E01\u7B49\u9AD8\u98CE\u9669\u91D1\u878D\u4E1A\u52A1\u7684\u8981\u6C42\uFF1B\u5982\u679C\u60A8\u4ECD\u60F3\u8FDB\u884C\u6570\u5B57\u8D27\u5E01\u6295\u8D44\uFF0C",
                        React.createElement("br", null),
                        "\u8BF7\u524D\u5F80\u6295\u8D44\u8005\u6559\u80B2\u4E2D\u5FC3\u5B66\u4E60\u540E\u91CD\u65B0\u586B\u5199\u95EE\u5377"),
                    React.createElement(Row, { justify: "center" },
                        React.createElement(Button, { className: "centerBtn" }, "\u524D\u5F80\u6295\u8D44\u8005\u6559\u80B2\u4E2D\u5FC3\u5B66\u4E60")),
                    React.createElement(Row, { justify: "center" },
                        React.createElement("a", { onClick: () => { restart(); } }, "\u6211\u5DF2\u5B8C\u6210\u5B66\u4E60\uFF0C\u91CD\u65B0\u586B\u5199\u95EE\u5377"))) : '',
            submitPaper.levelCode == "C1" ?
                React.createElement("div", { className: "result result2" },
                    React.createElement(Row, { justify: "center", className: "contentWrapper" },
                        React.createElement("div", { className: "firstLine" },
                            "\u60A8\u597D\uFF0C\u6839\u636E\u60A8\u7684\u586B\u5199\u5185\u5BB9\uFF0C\u60A8\u76EE\u524D\u7684\u98CE\u9669\u627F\u53D7\u80FD\u529B\u7B49\u7EA7\u4E3A\uFF1A",
                            React.createElement("span", null, submitPaper.riskKind))),
                    React.createElement(Row, { justify: "center" },
                        React.createElement(Button, { className: "confirmBlueBtn confirmBtn", onClick: this.goKyc }, "\u786E\u8BA4\u5E76\u7EE7\u7EED"))) : ''));
    }
}
//# sourceMappingURL=result.js.map