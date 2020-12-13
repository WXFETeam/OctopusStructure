import {
    instrumentStore,
    orderBookStore,
    tradeHistoryStore,
    tradeHistoryAllStore,
    openOrdersStore,
    orderHistoryStore,
    portfolioStore,
} from '@webExchangeMobx/index';
const intervalTime = 1000;
const mockMarket = () => {
    setInterval(() => {
        ajax({
            url: "ws.market",
            callback(data) {
                instrumentStore.updateInstrumentsList(data);
            }
        })
    }, intervalTime || 1000)
}

const mockOrderBook = () => {
    setInterval(() => {
        ajax({
            url: "ws.orderBookSell",
            callback(data) {
                orderBookStore.updateOrderBookSellList(data);
            }
        });
        ajax({
            url: "ws.orderBookBuy",
            callback(data) {
                orderBookStore.updateOrderBookBuyList(data);
            }
        });
    }, intervalTime || 1000);
}

const mockTradeHistory = () => {
    setInterval(() => {
        ajax({
            url: "ws.tradeHistory",
            callback(data) {
                tradeHistoryStore.updateTradeHistoryList(data);
            }
        });
    }, intervalTime || 1000);
}

const mockTradeHistoryAll = () => {
    setInterval(() => {
        ajax({
            url: "ws.tradeHistory",
            callback(data) {
                tradeHistoryAllStore.updateTradeHistoryAllList(data);
            }
        });
    }, intervalTime || 1000);
}

const mockOpenOrders = () => {
    setInterval(() => {
        ajax({
            url: "ws.openOrders",
            callback(data) {
                openOrdersStore.updateOpenOrdersList(data);
            }
        });
    }, intervalTime || 1000);
}

const mockOrderHistory = () => {
    setInterval(() => {
        ajax({
            url: "ws.orderHistory",
            callback(data) {
                orderHistoryStore.updateOrderHistoryList(data);
            }
        });
    }, intervalTime || 1000);
}

const mockPortfolio = () => {
    setInterval(() => {
        ajax({
            url: "ws.portfolio",
            callback(data) {
                portfolioStore.updatePortfolioList(data);
            }
        });
    }, intervalTime || 1000);
}

const mockTradingView = () => {
    webApp.kDataArray = require("./data/trade/tradingviewData.json")
}

const mockAllTrade = () => {
    mockMarket();
    mockOrderBook();
    mockTradeHistory();
    mockTradeHistoryAll();
    mockOpenOrders();
    mockOrderHistory();
    mockPortfolio();
    mockTradingView();
}

export {
    mockAllTrade,
    mockMarket,
    mockOrderBook,
    mockTradeHistory,
    mockOpenOrders,
    mockOrderHistory,
    mockPortfolio,
    mockTradingView
}