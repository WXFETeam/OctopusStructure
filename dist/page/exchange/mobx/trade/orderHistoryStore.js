var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class OrderHistoryStore {
    constructor() {
        this.oriOrderHistory = [];
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get orderHistoryTableMap() {
        return dataMapping.trade.orderHistoryTableMap(this.oriOrderHistory);
    }
    //更新已成交订单数据（服务器原始数据）
    updateOrderHistoryList(orderHistoryData) {
        if (Object.prototype.toString.call(orderHistoryData) == "[object Array]") {
            //数组表示快照
            this.oriOrderHistory = orderHistoryData;
        }
        else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriOrderHistory.map((item) => {
                if (item.orderId == orderHistoryData.orderId) {
                    Object.assign(item, orderHistoryData);
                    combineTarget = true;
                }
            });
            if (!combineTarget) {
                this.oriOrderHistory.unshift(orderHistoryData);
            }
        }
    }
}
__decorate([
    observable
], OrderHistoryStore.prototype, "oriOrderHistory", void 0);
__decorate([
    computed
], OrderHistoryStore.prototype, "orderHistoryTableMap", null);
__decorate([
    action
], OrderHistoryStore.prototype, "updateOrderHistoryList", null);
export default OrderHistoryStore;
//# sourceMappingURL=orderHistoryStore.js.map