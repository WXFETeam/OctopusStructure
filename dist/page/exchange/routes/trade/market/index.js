var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Dropdown, } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperMarketCmp } from './styled';
import InstrumentsList from './instrumentsList';
let Market = class Market extends React.Component {
    constructor(props) {
        super(props);
        this.changeInstrumentsDropdown = instrumentsDropdownStatus => {
            this.setState({ instrumentsDropdownStatus });
        };
        this.state = {
            instrumentsDropdownStatus: false //控制币种对切换
        };
    }
    render() {
        const { instrumentStore } = this.props;
        let { currentInstrumentData } = instrumentStore;
        let { lastPrice, lastPriceDollar, chgVol, chgRate, high, low, volume } = currentInstrumentData;
        return (React.createElement(WrapperMarketCmp, null,
            React.createElement(Row, { justify: "center", align: "middle", className: "marketBox" },
                React.createElement(Col, { span: 3 },
                    React.createElement(Dropdown, { overlay: React.createElement(InstrumentsList, null), overlayClassName: "instrumentsDropdown", placement: "bottomLeft", onVisibleChange: this.changeInstrumentsDropdown },
                        React.createElement("div", { className: this.state.instrumentsDropdownStatus ? 'curInstrument up' : 'curInstrument down' }, instrumentStore.currentInstrument))),
                React.createElement(Col, { span: 21 },
                    React.createElement(Row, { justify: "end" },
                        React.createElement(Col, { xxl: 4, xl: 5 },
                            React.createElement("div", { className: "title" }, "Last Price"),
                            React.createElement("div", { className: "content" },
                                React.createElement("span", { className: chgRate > 0 ? "up" : "down" }, lastPrice),
                                "\u00A0\u00A0",
                                React.createElement("span", null,
                                    "$",
                                    lastPriceDollar))),
                        React.createElement(Col, { xxl: 4, xl: document.body.clientWidth > 1439 ? 5 : 6 },
                            React.createElement("div", { className: "title" }, "24h Change"),
                            React.createElement("div", { className: "content" },
                                React.createElement("span", { className: chgRate > 0 ? "up" : "down" }, chgVol),
                                "\u00A0\u00A0",
                                React.createElement("span", { className: chgRate > 0 ? "up" : "down" },
                                    chgRate,
                                    "%"))),
                        document.body.clientWidth > 1439 ?
                            React.createElement(Col, { xxl: 3, xl: 4 },
                                React.createElement("div", { className: "title" }, "24h High"),
                                React.createElement("div", { className: "content" }, high)) : null,
                        document.body.clientWidth > 1439 ?
                            React.createElement(Col, { xxl: 3, xl: 4 },
                                React.createElement("div", { className: "title" }, "24h Low"),
                                React.createElement("div", { className: "content" }, low)) : null,
                        React.createElement(Col, { xxl: 3, xl: document.body.clientWidth > 1439 ? 4 : 5 },
                            React.createElement("div", { className: "title" }, "24 Volume"),
                            React.createElement("div", { className: "content" },
                                volume,
                                "\u00A0",
                                instrumentStore.currentBasicCurrency)))))));
    }
};
Market = __decorate([
    inject('instrumentStore'),
    observer
], Market);
export default Market;
//# sourceMappingURL=index.js.map