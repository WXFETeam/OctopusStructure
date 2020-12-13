import * as React from 'react';
import { observable, action, computed } from 'mobx';

class OrderTradedStore {
    @observable orderTradedList: any; // 历史成交

    constructor() {
        this.orderTradedList = [];
    }

    //更新历史成交
    @action.bound updateOrderTradedList(data) {
        this.orderTradedList = data;
    }
}

export default OrderTradedStore;
