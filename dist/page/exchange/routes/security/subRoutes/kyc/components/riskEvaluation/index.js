import * as React from "react";
import { Row, Button } from 'antd';
import { WrapperRiskCmp } from './styled';
import WrappedStart from './start';
import Result from './result';
export default class Risk extends React.Component {
    constructor(props) {
        super(props);
        this.startEvaluation = (val) => {
            this.setState({
                status: val
            });
        };
        this.restart = () => {
            this.setState({
                status: '0'
            });
        };
        this.state = {
            status: '0'
        };
    }
    render() {
        const status = this.state.status;
        const { user, match, history } = this.props;
        return (React.createElement(WrapperRiskCmp, null,
            status === '0' || status === '1' ?
                React.createElement("div", null,
                    React.createElement(Row, { justify: "center", className: "title" }, "\u98CE\u9669\u8BC4\u6D4B"),
                    React.createElement(Row, { justify: "center", className: "contentWrapper" },
                        "\u6B22\u8FCE\u60A8\u6765\u5230Hashkey Pro\u4EA4\u6613\u6240\uFF0C\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u5728\u8FDB\u884CKYC\u8EAB\u4EFD\u8BA4\u8BC1\u524D\u60A8\u5FC5\u987B\u5B8C\u6210\u98CE\u9669\u8BC4\u6D4B\uFF0C",
                        React.createElement("br", null),
                        "\u8FD9\u53EF\u80FD\u82B1\u8D39\u60A83-5\u5206\u949F\u65F6\u95F4\uFF0C\u6211\u4EEC\u975E\u5E38\u611F\u8C22\u60A8\u7684\u4FE1\u4EFB\u4E0E\u652F\u6301\uFF01"),
                    React.createElement(Row, { justify: "center" }, status === '0' ?
                        React.createElement(Button, { className: "confirmBlueBtn btnWrapper", onClick: () => { this.startEvaluation('1'); } }, "\u5F00\u59CB\u8BC4\u6D4B") :
                        React.createElement(WrappedStart, { user: user, startEvaluation: this.startEvaluation }))) : '',
            status === '2' ? React.createElement(Result, { user: user, match: match, history: history, restart: this.restart }) : ''));
    }
}
//# sourceMappingURL=index.js.map