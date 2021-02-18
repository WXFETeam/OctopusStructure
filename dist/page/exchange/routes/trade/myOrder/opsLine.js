import * as React from "react";
import { WrapperOpsLineCmp } from './styled';
import { Checkbox } from 'antd';
export default class OpsLine extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAll = () => {
            console.log(this.props.dataSource);
        };
        this.showTypeSelect = (showSelectedType) => {
            this.setState({ showSelectedType });
        };
        this.changeOrderType = orderType => {
            this.setState({ orderType });
            this.props.changeTypes(orderType);
        };
        this.state = {
            orderType: "All",
            showSelectedType: false
        };
    }
    goToMore() {
    }
    render() {
        return (React.createElement(WrapperOpsLineCmp, null,
            React.createElement("div", { className: "opsLine" },
                React.createElement("div", { className: "viewMore", onClick: this.goToMore }, "View More >"),
                this.props.type == "openOrders" ?
                    React.createElement("div", { className: this.state.showSelectedType ? "cancelOps showSelectedType" : "cancelOps" },
                        React.createElement("a", { className: "btn", onClick: this.cancelAll }, "Cancel All"),
                        React.createElement("span", { className: "verticalLine" }, "|"),
                        React.createElement("a", { className: this.state.showSelectedType ? "select show" : "select", onMouseEnter: this.showTypeSelect.bind(this, true), onMouseLeave: this.showTypeSelect.bind(this, false) },
                            this.state.orderType,
                            this.state.showSelectedType ?
                                React.createElement("ul", { className: "typeList" }, ["All", "Limit", "Market"].map(item => React.createElement("li", { key: item, className: item == this.state.orderType ? "active" : "", onClick: this.changeOrderType.bind(this, item) }, item))) : null)) : null,
                React.createElement("div", { className: "hideOther" },
                    React.createElement(Checkbox, { onChange: this.props.changePairs }, "Hide Other Pairs")))));
    }
}
//# sourceMappingURL=opsLine.js.map