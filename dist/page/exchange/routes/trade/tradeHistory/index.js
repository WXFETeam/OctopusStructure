var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperTradeHistoryCmp } from './styled';
let TradeHistory = class TradeHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { tradeHistoryAllListMap } = this.props.tradeHistoryAllStore;
        return (React.createElement(WrapperTradeHistoryCmp, null,
            React.createElement(Row, { className: "title", justify: "space-between", align: "middle" },
                React.createElement(Col, { span: 10, className: "text" }, "Trade History")),
            React.createElement(Row, { className: "historyTitle" },
                React.createElement(Col, { span: 8, className: "left" }, "Price(BTC)"),
                React.createElement(Col, { span: 7, offset: 1, className: "right" }, "Amount(ETH)"),
                React.createElement(Col, { span: 8, className: "right" }, "Time")),
            React.createElement(Row, { className: "tradeHistoryBox" }, tradeHistoryAllListMap.map(item => React.createElement(Row, { key: item.tradeId, className: "eachLine" },
                React.createElement(Col, { span: 8, className: item.side == "buy" ? "left buyText" : "left sellText" }, item.full ? item.price :
                    React.createElement("span", null,
                        React.createElement("span", { className: item.side == "buy" ? "buyPartText" : "sellPartText" }, item.curNum),
                        React.createElement("span", null, item.leftNum))),
                React.createElement(Col, { span: 7, offset: 1, className: "right commText" },
                    React.createElement("span", null, item.amount.toString().match(/\./) ? item.amount : `${item.amount}.`),
                    item.amountZeroNum ? React.createElement("span", { className: "commPartText" }, "".padEnd(item.amountZeroNum, "0")) : null),
                React.createElement(Col, { span: 8, className: "right commText" }, item.dateTime))))));
    }
};
TradeHistory = __decorate([
    inject('tradeHistoryAllStore'),
    observer
], TradeHistory);
export default TradeHistory;
//# sourceMappingURL=index.js.map