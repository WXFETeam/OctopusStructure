var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class TradeHistoryStore {
    constructor() {
        this.oriTradeHistory = [];
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get tradeHistoryListMap() {
        return dataMapping.trade.tradeHistoryListMap(this.oriTradeHistory);
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get tradeHistoryTableMap() {
        return dataMapping.trade.tradeHistoryTableMap(this.oriTradeHistory);
    }
    //更新已成交订单数据（服务器原始数据）
    updateTradeHistoryList(tradeHistoryData) {
        if (Object.prototype.toString.call(tradeHistoryData) == "[object Array]") {
            this.oriTradeHistory = tradeHistoryData;
            //数组表示快照
        }
        else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriTradeHistory.map((item) => {
                if (item.tradeId == tradeHistoryData.tradeId) {
                    Object.assign(item, tradeHistoryData);
                    combineTarget = true;
                }
            });
            if (!combineTarget) {
                this.oriTradeHistory.unshift(tradeHistoryData);
            }
        }
    }
}
__decorate([
    observable
], TradeHistoryStore.prototype, "oriTradeHistory", void 0);
__decorate([
    computed
], TradeHistoryStore.prototype, "tradeHistoryListMap", null);
__decorate([
    computed
], TradeHistoryStore.prototype, "tradeHistoryTableMap", null);
__decorate([
    action
], TradeHistoryStore.prototype, "updateTradeHistoryList", null);
export default TradeHistoryStore;
//# sourceMappingURL=tradeHistoryStore.js.map