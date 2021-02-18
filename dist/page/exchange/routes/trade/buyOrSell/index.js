var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Tabs, Select } from 'antd';
import { WrapperBuyOrSellCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import Market from './market';
import Limit from './limit';
import Stop from './stop';
const { TabPane } = Tabs;
const { Option } = Select;
let BuyOrSell = class BuyOrSell extends React.Component {
    constructor(props) {
        super(props);
        this.changeTabDetail = (val) => {
            this.setState({
                tabSelectKey: val
            });
        };
        this.state = {
            direction: 0,
            tabKey: 'LIMIT',
            tabSelectKey: 'Stop-limit',
            inputInfo: {}
        };
        this.order = this.order.bind(this);
        this.changeDirection = this.changeDirection.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }
    changeDirection(val) {
        this.setState({
            direction: Number(val)
        });
    }
    changeTab(val) {
        this.setState({
            tabKey: val
        });
    }
    changeInput(val) {
        this.setState({
            inputInfo: val
        });
    }
    order() {
        let { tabKey, tabSelectKey, inputInfo } = this.state;
        if (tabKey == 'MARKET') {
            // market
            if (!inputInfo.amount)
                return;
        }
        else if (tabKey == 'LIMIT') {
            // limit
            if (!inputInfo.amount || !inputInfo.limitPrice)
                return;
        }
        else if (tabKey == 'other') {
            if (tabSelectKey == 'Stop-limit') {
            }
            else if (tabSelectKey == 'Iceberg Order') {
            }
            else if (tabSelectKey == 'Hidden Order') {
            }
        }
        let postData = {
            direction: this.state.direction,
            instrumentId: this.props.instrumentStore.currentInstrument
        };
        ajax({
            url: "trade.order",
            method: 'post',
            data: Object.assign(postData, inputInfo),
            callback: (data) => {
                this.setState({
                    inputInfo: {}
                });
            }
        });
    }
    render() {
        const { direction, tabKey, tabSelectKey, inputInfo } = this.state;
        const { currentBasicCurrency, currentTargetCurrency } = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeInput: this.changeInput
        };
        let renderComponent = type => {
            if (type == 'other')
                type = tabSelectKey;
            switch (type) {
                case "MARKET": return React.createElement(Market, Object.assign({}, params));
                case "LIMIT": return React.createElement(Limit, Object.assign({}, params));
                case "Stop-limit": return React.createElement(Stop, Object.assign({}, params, { keyName: type }));
                case "Iceberg Order": return React.createElement(Stop, Object.assign({}, params, { keyName: type }));
                case "Hidden Order": return React.createElement(Stop, Object.assign({}, params, { keyName: type }));
            }
        };
        return (React.createElement(WrapperBuyOrSellCmp, null,
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "title" }, "Trade"),
                React.createElement("div", { className: "fees" },
                    "Fees",
                    React.createElement("span", { className: "icon" }),
                    React.createElement("div", { className: "detail" },
                        React.createElement("div", { className: "detail-item taker" },
                            React.createElement("div", { className: "item-title" }, "Taker:"),
                            React.createElement("div", { className: "percent" }, "0.10%")),
                        React.createElement("div", { className: "detail-item maker" },
                            React.createElement("div", { className: "item-title" }, "Maker:"),
                            React.createElement("div", { className: "percent" }, "0.10%")),
                        React.createElement("div", { className: "more" },
                            React.createElement("a", null, "View More >"))))),
            React.createElement("div", { className: "content" },
                React.createElement(Row, { className: "direction" },
                    React.createElement(Col, { span: 12 },
                        React.createElement("a", { onClick: () => { this.changeDirection(0); }, className: direction == 0 ? 'buy active' : 'buy' }, "BUY")),
                    React.createElement(Col, { span: 12 },
                        React.createElement("a", { onClick: () => { this.changeDirection(1); }, className: direction == 1 ? 'sell active' : 'sell' }, "SELL"))),
                React.createElement("div", { className: "inputArea" },
                    React.createElement(Tabs, { defaultActiveKey: tabKey, onChange: this.changeTab }, ["LIMIT", "MARKET", "other"].map(item => {
                        return React.createElement(TabPane, { tab: item === "other" ?
                                React.createElement("div", { className: "tabSelect" },
                                    React.createElement("div", { className: "icon" },
                                        React.createElement("div", { className: "tabSelectDetail" },
                                            React.createElement("div", { className: "detailItme" },
                                                React.createElement("div", { className: "detailTit" },
                                                    React.createElement("span", null, "Stop-Limit")),
                                                React.createElement("div", { className: "detailCon" },
                                                    "Place orders at preset commission prices",
                                                    React.createElement("br", null),
                                                    "and quantities when the latest price",
                                                    React.createElement("br", null),
                                                    "reaches the trigger price.")),
                                            React.createElement("div", { className: "detailItme" },
                                                React.createElement("div", { className: "detailTit" },
                                                    React.createElement("span", null, "Iceberg Order")),
                                                React.createElement("div", { className: "detailCon" },
                                                    "Large single orders are hidden, only part of",
                                                    React.createElement("br", null),
                                                    "the orders are visible to the public.")),
                                            React.createElement("div", { className: "detailItme" },
                                                React.createElement("div", { className: "detailTit" },
                                                    React.createElement("span", null, "Hidden Order")),
                                                React.createElement("div", { className: "detailCon" },
                                                    "Orders are completely hidden from the",
                                                    React.createElement("br", null),
                                                    "market.")))),
                                    React.createElement(Select, { dropdownClassName: "tradeTypeSelectDropdown", defaultValue: tabSelectKey, onChange: this.changeTabDetail }, ["Stop-limit", "Iceberg Order", "Hidden Order"].map((item2, index2) => React.createElement(Option, { key: index2, value: item2 }, item2)))) : item, key: item }, renderComponent(item));
                    })),
                    React.createElement("div", { className: "balance" },
                        "0.00000000 ",
                        currentBasicCurrency)),
                direction == 0 ?
                    React.createElement(Button, { onClick: this.order, className: "buyBtn greenGlBtn" },
                        "BUY ",
                        currentTargetCurrency) :
                    React.createElement(Button, { onClick: this.order, className: "sellBtn redGlBtn" },
                        "SELL ",
                        currentTargetCurrency))));
    }
};
BuyOrSell = __decorate([
    inject('instrumentStore'),
    observer
], BuyOrSell);
export default BuyOrSell;
//# sourceMappingURL=index.js.map