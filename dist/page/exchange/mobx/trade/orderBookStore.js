var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class OrderBookStore {
    constructor() {
        this.oriOrderBookSell = [];
        this.oriOrderBookBuy = [];
        this.curDecimals = 5;
    }
    //服务器未成交卖单数据map成页面渲染数据
    get orderBookSellMap() {
        return dataMapping.trade.orderBookSellListMap(this.oriOrderBookSell, this.curDecimals);
    }
    //服务器未成交买单数据map成页面渲染数据
    get orderBookBuyMap() {
        return dataMapping.trade.orderBookBuyListMap(this.oriOrderBookBuy, this.curDecimals);
    }
    //更新未成交卖单数据（服务器原始数据）
    updateOrderBookSellList(sellList) {
        this.oriOrderBookSell = sellList;
    }
    //更新未成交买单数据（服务器原始数据）
    updateOrderBookBuyList(buyList) {
        this.oriOrderBookBuy = buyList;
    }
    changeDecimals(num) {
        this.curDecimals = num;
    }
}
__decorate([
    observable
], OrderBookStore.prototype, "oriOrderBookSell", void 0);
__decorate([
    observable
], OrderBookStore.prototype, "oriOrderBookBuy", void 0);
__decorate([
    observable
], OrderBookStore.prototype, "curDecimals", void 0);
__decorate([
    computed
], OrderBookStore.prototype, "orderBookSellMap", null);
__decorate([
    computed
], OrderBookStore.prototype, "orderBookBuyMap", null);
__decorate([
    action
], OrderBookStore.prototype, "updateOrderBookSellList", null);
__decorate([
    action
], OrderBookStore.prototype, "updateOrderBookBuyList", null);
__decorate([
    action
], OrderBookStore.prototype, "changeDecimals", null);
export default OrderBookStore;
//# sourceMappingURL=orderBookStore.js.map