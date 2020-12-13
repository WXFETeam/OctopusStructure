import * as React from "react";
import { Row } from 'antd';
import { WrappedIdentificationCmp } from "./styled";
import IndividualLayout from "./components/individualLayout/index";
export default class Identification extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.onscroll = () => {
            let mainCom = document.getElementById('individualIdentificationBox');
            if (mainCom) {
                let pageYOffset = window.pageYOffset;
                if (pageYOffset >= 390) {
                    mainCom.className = 'ant-row mainBox fix';
                }
                else {
                    mainCom.className = 'ant-row mainBox';
                }
            }
        };
    }
    render() {
        const layoutProps = {
            match: this.props.match,
            history: this.props.history
        };
        return (React.createElement(WrappedIdentificationCmp, null,
            React.createElement(Row, { justify: "center", className: "title" }, "\u4E2A\u4EBA\u8BA4\u8BC1"),
            React.createElement(Row, { id: "individualIdentificationBox", className: "mainBox" },
                React.createElement(IndividualLayout, Object.assign({}, layoutProps)),
                React.createElement("div", { className: "routeBox" }, renderRoutes(this.props.routes, this.props.match.url)))));
    }
}
//# sourceMappingURL=index.js.map