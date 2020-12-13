import * as React from 'react';
import { observable, action, computed } from 'mobx';

class TradeHistoryAllStore {
    @observable oriTradeHistoryAll: Array<Object>; //已成交订单

    constructor() {
        this.oriTradeHistoryAll = [];
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get tradeHistoryAllListMap(): Array<Object> {
        return dataMapping.trade.tradeHistoryListMap(this.oriTradeHistoryAll);
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get tradeHistoryAllTableMap(): Array<Object> {
        return dataMapping.trade.tradeHistoryTableMap(this.oriTradeHistoryAll);
    }

    //更新已成交订单数据（服务器原始数据）
    @action updateTradeHistoryAllList(tradeHistoryAllData) {
        if(Object.prototype.toString.call(tradeHistoryAllData) == "[object Array]") {
            this.oriTradeHistoryAll = tradeHistoryAllData;
            //数组表示快照
        } else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriTradeHistoryAll.map((item: any) => {
                if(item.tradeId == tradeHistoryAllData.tradeId) {
                    Object.assign(item, tradeHistoryAllData);
                    combineTarget = true;
                }
            });
            if(!combineTarget) {
                this.oriTradeHistoryAll.unshift(tradeHistoryAllData);
            }
        }
    }
}

export default TradeHistoryAllStore;
