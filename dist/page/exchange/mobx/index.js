import commMobx from '@webMobx/index';
import ThemeStore from './themeStore';
import InstrumentStore from './trade/instrumentStore';
import IntervalStore from './trade/intervalStore';
import OrderBookStore from './trade/orderBookStore';
import TradeHistoryAllStore from './trade/tradeHistoryAllStore';
import TradeHistoryStore from './trade/tradeHistoryStore';
import OpenOrdersStore from './trade/openOrdersStore';
import OrderHistoryStore from './trade/orderHistoryStore';
import PortfolioStore from './trade/portfolioStore';
import TimezoneStore from './trade/timezoneStore';
import ServerTimeStore from './serverTimeStore';
import AssetStore from './assets/assetStore';
import RecordStore from './assets/recordStore';
import OrderCurrentStore from './order/orderCurrentStore';
import OrderTradedStore from './order/orderTradedStore';
import OrderHistoricalStore from './order/orderHistoricalStore';
import RecordAPIStore from './API/APIRecordStore';
const themeStore = new ThemeStore();
const instrumentStore = new InstrumentStore();
const intervalStore = new IntervalStore();
const orderBookStore = new OrderBookStore();
const tradeHistoryAllStore = new TradeHistoryAllStore();
const tradeHistoryStore = new TradeHistoryStore();
const openOrdersStore = new OpenOrdersStore();
const orderHistoryStore = new OrderHistoryStore();
const portfolioStore = new PortfolioStore();
const timezoneStore = new TimezoneStore();
const serverTimeStore = new ServerTimeStore();
const assetStore = new AssetStore();
const recordStore = new RecordStore();
const orderCurrentStore = new OrderCurrentStore();
const orderTradedStore = new OrderTradedStore();
const orderHistoricalStore = new OrderHistoricalStore();
const APIRecordStore = new RecordAPIStore();
const stores = Object.assign({
    themeStore,
    instrumentStore,
    intervalStore,
    orderBookStore,
    tradeHistoryAllStore,
    tradeHistoryStore,
    openOrdersStore,
    orderHistoryStore,
    portfolioStore,
    timezoneStore,
    serverTimeStore,
    assetStore,
    recordStore,
    orderCurrentStore,
    orderTradedStore,
    orderHistoricalStore,
    APIRecordStore
}, commMobx);
export { stores as default, themeStore, timezoneStore, instrumentStore, orderBookStore, tradeHistoryAllStore, tradeHistoryStore, openOrdersStore, orderHistoryStore, portfolioStore, intervalStore, serverTimeStore, assetStore, recordStore, orderCurrentStore, orderTradedStore, orderHistoricalStore, APIRecordStore };
//# sourceMappingURL=index.js.map