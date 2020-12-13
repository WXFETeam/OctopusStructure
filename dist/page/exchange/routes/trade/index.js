var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { WrapperTradeCmp } from './styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'webExchangeGlobalConf';
import { observer, inject } from 'mobx-react/index';
import { mockAllTrade } from '@webExchangeMock/mockWS';
import { subscribeCandleStick, subscribeAllTradeMsg } from 'webExchangeSubscribe';
import Header from './header';
import BuyOrSell from './buyOrSell';
import Chart from './chart';
import Market from './market';
import MyOrder from './myOrder';
import OrderBook from './orderBook';
import TradeHistory from './tradeHistory';
let Trade = class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.getServerTime = () => {
            let that = this;
            ajax({
                url: "trade.syncServerTime",
                callback: (data) => {
                    this.props.serverTimeStore.changeServerTime(parseInt(data.datetime));
                }
            });
        };
    }
    syncServerTime() {
        this.getServerTime();
        //前端计算时间
        setInterval(() => {
            let serverTime = this.props.serverTimeStore.currentServerTime + 1000;
            this.props.serverTimeStore.changeServerTime(serverTime);
        }, 1000);
        //每隔1分钟同步服务器时间
        setInterval(() => {
            this.getServerTime();
        }, 60000);
    }
    changeInterval() {
        subscribeCandleStick();
    }
    componentDidMount() {
        this.syncServerTime();
        webApp.isMock = window.deployConf.mode == "mock" ? true : false;
        if (webApp.isMock) {
            mockAllTrade();
        }
        else {
            subscribeAllTradeMsg();
        }
    }
    render() {
        const { themeStore, history } = this.props;
        const { currentInstrument } = this.props.instrumentStore;
        return (React.createElement(ThemeProvider, { theme: { [constants.name]: themeStore.currentThemeName } },
            React.createElement(WrapperTradeCmp, null,
                React.createElement(GlobalStyle, null),
                React.createElement("div", { className: "tradeTop" },
                    React.createElement(Header, { history: history })),
                React.createElement("div", { className: "mainArea" },
                    React.createElement("div", { className: "mainL" },
                        React.createElement("div", { className: "marketAndChart" },
                            React.createElement("div", { className: "market" },
                                React.createElement(Market, null)),
                            React.createElement("div", { className: "chart", id: "tradingviewOrDepth" },
                                React.createElement(Chart, { changeInterval: this.changeInterval, currentInstrument: currentInstrument }))),
                        React.createElement("div", { className: "myOrder" },
                            React.createElement(MyOrder, null))),
                    React.createElement("div", { className: "mainM" },
                        React.createElement(OrderBook, null)),
                    React.createElement("div", { className: "mainR" },
                        React.createElement("div", { className: "history" },
                            React.createElement(TradeHistory, null)),
                        React.createElement("div", { className: "buyOrSell" },
                            React.createElement(BuyOrSell, null)))))));
    }
};
Trade = __decorate([
    inject('themeStore', 'serverTimeStore', 'instrumentStore'),
    observer
], Trade);
export default Trade;
//# sourceMappingURL=index.js.map