import * as React from 'react';
import { observable, action, computed } from 'mobx';

class OpenOrdersStore {
    @observable oriOpenOrders: Array<Object>; //已成交订单

    constructor() {
        this.oriOpenOrders = [];
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get openOrdersTableMap(): Array<Object> {
        return dataMapping.trade.openOrdersTableMap(this.oriOpenOrders);
    }

    //更新已成交订单数据（服务器原始数据）
    @action updateOpenOrdersList(openOrdersData) {
        if (Object.prototype.toString.call(openOrdersData) == "[object Array]") {
            this.oriOpenOrders = openOrdersData;
            //数组表示快照
        } else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriOpenOrders.map((item: any) => {
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

export default OpenOrdersStore;
