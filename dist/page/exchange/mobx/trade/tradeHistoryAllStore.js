var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class TradeHistoryAllStore {
    constructor() {
        this.oriTradeHistoryAll = [];
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get tradeHistoryAllListMap() {
        return dataMapping.trade.tradeHistoryListMap(this.oriTradeHistoryAll);
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get tradeHistoryAllTableMap() {
        return dataMapping.trade.tradeHistoryTableMap(this.oriTradeHistoryAll);
    }
    //更新已成交订单数据（服务器原始数据）
    updateTradeHistoryAllList(tradeHistoryAllData) {
        if (Object.prototype.toString.call(tradeHistoryAllData) == "[object Array]") {
            this.oriTradeHistoryAll = tradeHistoryAllData;
            //数组表示快照
        }
        else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriTradeHistoryAll.map((item) => {
                if (item.tradeId == tradeHistoryAllData.tradeId) {
                    Object.assign(item, tradeHistoryAllData);
                    combineTarget = true;
                }
            });
            if (!combineTarget) {
                this.oriTradeHistoryAll.unshift(tradeHistoryAllData);
            }
        }
    }
}
__decorate([
    observable
], TradeHistoryAllStore.prototype, "oriTradeHistoryAll", void 0);
__decorate([
    computed
], TradeHistoryAllStore.prototype, "tradeHistoryAllListMap", null);
__decorate([
    computed
], TradeHistoryAllStore.prototype, "tradeHistoryAllTableMap", null);
__decorate([
    action
], TradeHistoryAllStore.prototype, "updateTradeHistoryAllList", null);
export default TradeHistoryAllStore;
//# sourceMappingURL=tradeHistoryAllStore.js.map