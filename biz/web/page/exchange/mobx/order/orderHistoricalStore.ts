import * as React from 'react';
import { observable, action, computed } from 'mobx';

class OrderHistoricalStore {
    @observable orderHistoricalList: any; // 历史成交

    constructor() {
        this.orderHistoricalList = [];
    }

    //更新历史成交
    @action.bound updateOrderHistoricalList(data) {
        this.orderHistoricalList = data;
    }
}

export default OrderHistoricalStore;
