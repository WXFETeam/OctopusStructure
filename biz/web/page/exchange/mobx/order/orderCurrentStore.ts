import * as React from 'react';
import { observable, action, computed } from 'mobx';

class OrderCurrentStore {
    @observable orderCurrentList: any; // 当前委托

    constructor() {
        this.orderCurrentList = [];
    }

    //更新当前委托
    @action.bound updateOrderCurrentList(data) {
        this.orderCurrentList = data;
    }
    // 撤单
    @action.bound cancelOrder(id) {
        console.log(id, 'id')
        let newList = []
        if(id && id !== '') {
            newList = this.orderCurrentList.filter( item => (item.id !== id));
        }
        this.orderCurrentList = newList;
    }
}

export default OrderCurrentStore;
