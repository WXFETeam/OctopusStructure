import * as React from 'react';
import { observable, action, computed } from 'mobx';

class OrderBookStore {
    @observable oriOrderBookSell: Array<Object>; //未成交卖单
    @observable oriOrderBookBuy: Array<Object>; //未成交买单
    @observable curDecimals: Number; //decimals位数

    constructor() {
        this.oriOrderBookSell = [];
        this.oriOrderBookBuy = [];
        this.curDecimals = 5;
    }

    //服务器未成交卖单数据map成页面渲染数据
    @computed get orderBookSellMap(): Array<Object> {
        return dataMapping.trade.orderBookSellListMap(this.oriOrderBookSell, this.curDecimals);
    }

    //服务器未成交买单数据map成页面渲染数据
    @computed get orderBookBuyMap(): Array<Object> {
        return dataMapping.trade.orderBookBuyListMap(this.oriOrderBookBuy, this.curDecimals);
    }

    //更新未成交卖单数据（服务器原始数据）
    @action updateOrderBookSellList(sellList) {
        this.oriOrderBookSell = sellList;
    }

    //更新未成交买单数据（服务器原始数据）
    @action updateOrderBookBuyList(buyList) {
        this.oriOrderBookBuy = buyList;
    }

    @action changeDecimals(num) {
        this.curDecimals = num;
    }
}

export default OrderBookStore;
