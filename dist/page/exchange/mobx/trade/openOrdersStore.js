var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class OpenOrdersStore {
    constructor() {
        this.oriOpenOrders = [];
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get openOrdersTableMap() {
        return dataMapping.trade.openOrdersTableMap(this.oriOpenOrders);
    }
    //更新已成交订单数据（服务器原始数据）
    updateOpenOrdersList(openOrdersData) {
        if (Object.prototype.toString.call(openOrdersData) == "[object Array]") {
            this.oriOpenOrders = openOrdersData;
            //数组表示快照
        }
        else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriOpenOrders.map((item) => {
                if (item.orderId == openOrdersData.orderId) {
                    Object.assign(item, openOrdersData);
                    combineTarget = true;
                }
            });
            if (!combineTarget) {
                this.oriOpenOrders.unshift(openOrdersData);
            }
        }
    }
}
__decorate([
    observable
], OpenOrdersStore.prototype, "oriOpenOrders", void 0);
__decorate([
    computed
], OpenOrdersStore.prototype, "openOrdersTableMap", null);
__decorate([
    action
], OpenOrdersStore.prototype, "updateOpenOrdersList", null);
export default OpenOrdersStore;
//# sourceMappingURL=openOrdersStore.js.map