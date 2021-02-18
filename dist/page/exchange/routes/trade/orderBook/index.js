var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperOrderBookCmp } from './styled';
let OrderBook = class OrderBook extends React.Component {
    constructor(props) {
        super(props);
        this.changeDecimals = type => {
            const { orderBookStore } = this.props;
            if (type == "plus" && orderBookStore.curDecimals < 7) {
                orderBookStore.changeDecimals(++orderBookStore.curDecimals);
            }
            else if (type == "minus" && orderBookStore.curDecimals > 4) {
                orderBookStore.changeDecimals(--orderBookStore.curDecimals);
            }
        };
        this.changePanel = curPanel => {
            this.setState({ curPanel });
        };
        this.state = {
            curPanel: "split"
        };
    }
    render() {
        let { orderBookSellMap, orderBookBuyMap, curDecimals } = this.props.orderBookStore;
        let { currentInstrumentData, currentBasicCurrency } = this.props.instrumentStore;
        return (React.createElement(WrapperOrderBookCmp, null,
            React.createElement(Row, { className: "title", justify: "space-between", align: "middle" },
                React.createElement(Col, { span: 10, className: "text" }, "Order Book"),
                React.createElement(Col, { span: 10, className: "switchPanel" }, ["split", "sell", "buy"].map(item => React.createElement("i", { key: item, className: this.state.curPanel == item ? `panelIcon ${item} active` : `panelIcon ${item}`, onClick: this.changePanel.bind(this, item) })))),
            React.createElement(Row, { className: "orderTitle" },
                React.createElement(Col, { span: 8, className: "left" }, "Price(BTC)"),
                React.createElement(Col, { span: 7, offset: 1, className: "right" }, "Amount(ETH)"),
                React.createElement(Col, { span: 8, className: "right" }, "Total(BTC)")),
            React.createElement(Row, { className: "orderBookDetailBox" },
                this.state.curPanel != "buy" ?
                    React.createElement("div", { className: this.state.curPanel == "sell" ? "sellBox full" : "sellBox" }, orderBookSellMap.map(item => React.createElement(Row, { key: Math.random(), className: "eachLine" },
                        React.createElement(Col, { span: 8, className: "left sellText" }, item.full ? item.price :
                            React.createElement("span", null,
                                React.createElement("span", { className: "sellPartText" }, item.curNum),
                                React.createElement("span", null, item.leftNum))),
                        React.createElement(Col, { span: 7, offset: 1, className: "right commText" },
                            React.createElement("span", null, item.amount.toString().match(/\./) ? item.amount : `${item.amount}.`),
                            item.amountZeroNum ? React.createElement("span", { className: "commPartText" }, "".padEnd(item.amountZeroNum, "0")) : null),
                        React.createElement(Col, { span: 8, className: "right commText" },
                            React.createElement("span", null, item.total.toString().match(/\./) ? item.total : `${item.total}.`),
                            item.totalZeroNum ? React.createElement("span", { className: "commPartText" }, "".padEnd(item.totalZeroNum, "0")) : null),
                        React.createElement("div", { className: "lineBG sellBG", style: { width: `${item.percent}%` } })))) : null,
                React.createElement(Row, { className: "middleBox" },
                    React.createElement(Col, { span: 8, className: "left commText" },
                        React.createElement("span", { className: "commPartText" }, currentInstrumentData.lastPrice)),
                    React.createElement(Col, { span: 8, offset: 1, className: "right commText" },
                        currentBasicCurrency,
                        " Spread"),
                    React.createElement(Col, { span: 7, className: "right" },
                        React.createElement("i", { className: "sign sign4" }))),
                this.state.curPanel != "sell" ?
                    React.createElement("div", { className: this.state.curPanel == "buy" ? "buyBox full" : "buyBox" }, orderBookBuyMap.map(item => React.createElement(Row, { key: Math.random(), className: "eachLine" },
                        React.createElement(Col, { span: 8, className: "left buyText" }, item.full ? item.price :
                            React.createElement("span", null,
                                React.createElement("span", { className: "buyPartText" }, item.curNum),
                                React.createElement("span", null, item.leftNum))),
                        React.createElement(Col, { span: 7, offset: 1, className: "right commText" },
                            React.createElement("span", null, item.amount.toString().match(/\./) ? item.amount : `${item.amount}.`),
                            item.amountZeroNum ? React.createElement("span", { className: "commPartText" }, "".padEnd(item.amountZeroNum, "0")) : null),
                        React.createElement(Col, { span: 8, className: "right commText" },
                            React.createElement("span", null, item.total.toString().match(/\./) ? item.total : `${item.total}.`),
                            item.totalZeroNum ? React.createElement("span", { className: "commPartText" }, "".padEnd(item.totalZeroNum, "0")) : null),
                        React.createElement("div", { className: "lineBG buyBG", style: { width: `${item.percent}%` } })))) : null,
                React.createElement(Row, { className: "changeDecimals", justify: "center" },
                    React.createElement(Col, { span: 6, className: "decimalsText" }, "Decimals"),
                    React.createElement(Col, { span: 9 },
                        React.createElement("i", { className: "opsIcon plus", onClick: this.changeDecimals.bind(this, "plus") }, "+"),
                        React.createElement("span", { className: "decimalsNum" }, curDecimals),
                        React.createElement("i", { className: "opsIcon minus", onClick: this.changeDecimals.bind(this, "minus") }, "-"))))));
    }
};
OrderBook = __decorate([
    inject('instrumentStore', 'orderBookStore'),
    observer
], OrderBook);
export default OrderBook;
//# sourceMappingURL=index.js.map