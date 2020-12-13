import { instrumentStore, orderBookStore, intervalStore, tradeHistoryAllStore, tradeHistoryStore, openOrdersStore, orderHistoryStore, portfolioStore } from '@webExchangeMobx/index';
const topics = constants.ws.topics;
let beforeCandleStickInfo = null; // 上一个订阅的k线数据
let beforeMarketInfo = null; //上一个订阅的Market
let beforeOrderSell = null; //上一个订阅的orderSell
let beforeOrderBuy = null; //上一个订阅的orderBuy
let beforeTradeHistoryAll = null; //上一个订阅的市场tradeHistory
let beforeTradeHistory = null; //上一个订阅的tradeHistory
let beforeOpenOrders = null; //上一个订阅的openOrders
let beforeOrderHistory = null; //上一个订阅的ordersHistory
let beforePortfolio = null; //上一个订阅的portfolio
const clientId = common.getCookie('clientId') || common.getLS("clientId");
const subscribeCandleStick = () => {
    // 取消上一次的k线订阅
    if (beforeCandleStickInfo)
        webExchangeWS.deleteTopicSubscribe(beforeCandleStickInfo);
    // 订阅新的k线
    let info = {
        topicName: topics.CANDLE_STICK,
        params: {
            symbol: instrumentStore.currentInstrument,
            period: intervalStore.currentInterval
        },
        emitCB: (receiveData, totalReceive) => {
            if (totalReceive && totalReceive.subscribe) {
                // snapshort
                webApp.kDataArray = receiveData;
            }
            else {
                // 实时推送
                if (webApp.kDataArray.length > 0 && receiveData.time <= webApp.kDataArray[webApp.kDataArray.length - 1].time) {
                    webApp.kDataArray[webApp.kDataArray.length - 1] = receiveData;
                }
                else {
                    webApp.kDataArray.push(receiveData);
                }
            }
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeCandleStickInfo = info;
};
//订阅头部行情
const subscribeMarketData = () => {
    // 取消上一次的Market订阅
    if (beforeMarketInfo)
        webExchangeWS.deleteTopicSubscribe(beforeMarketInfo);
    let info = {
        topicName: topics.MARKET_DATA,
        emitCB: (receiveData, totalReceive) => {
            instrumentStore.updateInstrumentsList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeMarketInfo = info;
};
//订阅未成交卖单
const subscribeOrderSell = () => {
    // 取消上一次的orderSell订阅
    if (beforeOrderSell)
        webExchangeWS.deleteTopicSubscribe(beforeOrderSell);
    let info = {
        topicName: topics.S_ORDER_BOOK,
        params: { instrumentId: instrumentStore.currentInstrument },
        emitCB: (receiveData, totalReceive) => {
            orderBookStore.updateOrderBookSellList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeOrderSell = info;
};
//订阅未成交买单
const subscribeOrderBuy = () => {
    // 取消上一次的orderBuy订阅
    if (beforeOrderBuy)
        webExchangeWS.deleteTopicSubscribe(beforeOrderBuy);
    let info = {
        topicName: topics.B_ORDER_BOOK,
        params: { instrumentId: instrumentStore.currentInstrument },
        emitCB: (receiveData, totalReceive) => {
            orderBookStore.updateOrderBookBuyList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeOrderBuy = info;
};
//订阅市场成交订单
const subscribeTradeHistoryAll = () => {
    // 取消上一次的orderBuy订阅
    if (beforeTradeHistoryAll)
        webExchangeWS.deleteTopicSubscribe(beforeTradeHistoryAll);
    let info = {
        topicName: topics.TRADE_RTN_ALL,
        params: { instrumentId: instrumentStore.currentInstrument },
        emitCB: (receiveData, totalReceive) => {
            tradeHistoryAllStore.updateTradeHistoryAllList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeTradeHistoryAll = info;
};
//订阅已成交订单
const subscribeTradeHistory = () => {
    // 取消上一次的tradeHistory订阅
    if (beforeTradeHistory)
        webExchangeWS.deleteTopicSubscribe(beforeTradeHistory);
    let info = {
        topicName: topics.TRADE_RTN,
        params: { clientId: clientId },
        emitCB: (receiveData, totalReceive) => {
            tradeHistoryStore.updateTradeHistoryList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeTradeHistory = info;
};
//订阅Open Orders
const subscribeOpenOrders = () => {
    // 取消上一次的OpenOrder订阅
    if (beforeOpenOrders)
        webExchangeWS.deleteTopicSubscribe(beforeOpenOrders);
    let info = {
        topicName: topics.ORDER_RTN,
        params: { clientId: clientId },
        emitCB: (receiveData, totalReceive) => {
            openOrdersStore.updateOpenOrdersList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeOpenOrders = info;
};
//订阅Order history
const subscribeOrderHistory = () => {
    // 取消上一次的OrderHistory订阅
    if (beforeOrderHistory)
        webExchangeWS.deleteTopicSubscribe(beforeOrderHistory);
    let info = {
        topicName: topics.F_ORDER_RTN,
        params: { clientId: clientId },
        emitCB: (receiveData, totalReceive) => {
            orderHistoryStore.updateOrderHistoryList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforeOrderHistory = info;
};
//订阅Portfolio
const subscribePortfolio = () => {
    // 取消上一次的portfolio订阅
    if (beforePortfolio)
        webExchangeWS.deleteTopicSubscribe(beforePortfolio);
    let info = {
        topicName: topics.PORTFOLIO_RTN,
        params: { clientId: clientId },
        emitCB: (receiveData, totalReceive) => {
            portfolioStore.updatePortfolioList(receiveData);
        }
    };
    webExchangeWS.addTopicSubscribe(info);
    beforePortfolio = info;
};
//初始进入页面后需要订阅的消息
const subscribeAllTradeMsg = () => {
    subscribeMarketData();
    subscribeCandleStick();
    subscribeOrderSell();
    subscribeOrderBuy();
    subscribeTradeHistoryAll();
    subscribeTradeHistory();
    subscribeOpenOrders();
    subscribeOrderHistory();
    subscribePortfolio();
};
//当币对变化时集中操作订阅
const subscribeAsSymbol = () => {
    subscribeCandleStick();
    subscribeOrderSell();
    subscribeOrderBuy();
};
//当时区变化时集中操作订阅
const subscribeAsTimezone = () => {
    subscribeAllTradeMsg();
};
export { subscribeAllTradeMsg, subscribeAsSymbol, subscribeAsTimezone, subscribeCandleStick, subscribeMarketData, subscribeOrderSell, subscribeOrderBuy, subscribeTradeHistoryAll, subscribeTradeHistory, subscribeOpenOrders, subscribeOrderHistory, subscribePortfolio };
//# sourceMappingURL=index.js.map