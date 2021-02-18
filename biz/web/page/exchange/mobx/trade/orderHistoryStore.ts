import * as React from 'react';
import { observable, action, computed } from 'mobx';

class OrderHistoryStore {
    @observable oriOrderHistory: Array<Object>; //已成交订单

    constructor() {
        this.oriOrderHistory = [];
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get orderHistoryTableMap(): Array<Object> {
        return dataMapping.trade.orderHistoryTableMap(this.oriOrderHistory);
    }

    //更新已成交订单数据（服务器原始数据）
    @action updateOrderHistoryList(orderHistoryData) {
        if(Object.prototype.toString.call(orderHistoryData) == "[object Array]") {
            //数组表示快照
            this.oriOrderHistory = orderHistoryData;
        } else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriOrderHistory.map((item: any) => {
                if(item.orderId == orderHistoryData.orderId) {
                    Object.assign(item, orderHistoryData);
                    combineTarget = true;
                }
            });
            if(!combineTarget) {
                this.oriOrderHistory.unshift(orderHistoryData);
            }
        }
    }
}

export default OrderHistoryStore;
