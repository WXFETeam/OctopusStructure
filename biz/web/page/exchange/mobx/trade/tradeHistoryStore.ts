import * as React from 'react';
import { observable, action, computed } from 'mobx';

class TradeHistoryStore {
    @observable oriTradeHistory: Array<Object>; //已成交订单

    constructor() {
        this.oriTradeHistory = [];
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get tradeHistoryListMap(): Array<Object> {
        return dataMapping.trade.tradeHistoryListMap(this.oriTradeHistory);
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get tradeHistoryTableMap(): Array<Object> {
        return dataMapping.trade.tradeHistoryTableMap(this.oriTradeHistory);
    }

    //更新已成交订单数据（服务器原始数据）
    @action updateTradeHistoryList(tradeHistoryData) {
        if(Object.prototype.toString.call(tradeHistoryData) == "[object Array]") {
            this.oriTradeHistory = tradeHistoryData;
            //数组表示快照
        } else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriTradeHistory.map((item: any) => {
                if(item.tradeId == tradeHistoryData.tradeId) {
                    Object.assign(item, tradeHistoryData);
                    combineTarget = true;
                }
            });
            if(!combineTarget) {
                this.oriTradeHistory.unshift(tradeHistoryData);
            }
        }
    }
}

export default TradeHistoryStore;
