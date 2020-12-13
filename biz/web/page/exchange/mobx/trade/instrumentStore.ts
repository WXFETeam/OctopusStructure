import * as React from 'react';
import { observable, action, computed } from 'mobx';

class InstrumentStore {
    @observable currentInstrument: string;  //当前币种对ETH-BTC
    @observable oriInstrumentsList: Array<Object>; //币种对行情列表
    @observable searchText: String; //币对搜索框内容，切换币对后清空
    @observable favoriteList: Array<any>  //收藏的币对

    constructor() {
        this.currentInstrument = common.getLS('currentInstrument') ? common.getLS('currentInstrument') : "BTC/USDT";
        this.oriInstrumentsList = [];
        this.searchText = "";
        this.favoriteList = common.getLS('favoriteList') ? common.getLS('favoriteList') : []
    }

    //获取基础货币
    @computed get currentBasicCurrency(): string {
        return this.currentInstrument.split("/")[1] || "";
    }

    //获取目标货币
    @computed get currentTargetCurrency(): string {
        return this.currentInstrument.split("/")[0] || "";
    }

    //服务器数据map成页面渲染数据
    @computed get instrumentsListMap(): Array<Object> {
        return dataMapping.trade.instrumentsListMap(this.oriInstrumentsList);
    }

    //当前币对的数据
    @computed get currentInstrumentData(): Object {
        return dataMapping.trade.getCurrentInstrumentData(this.oriInstrumentsList, this.currentInstrument)
    }

    //改变当前币种对
    @action changeInstrument(val: string): void {
        this.currentInstrument = val;
        common.setLS('currentInstrument', val);
    }

    //更新当前币种对列表行情（服务器原始数据）
    @action updateInstrumentsList(instrumentsList) {
        this.oriInstrumentsList = instrumentsList;
    }

    //改变币对搜索框内容
    @action changeSearchText(val) {
        this.searchText = val;
    }

    //改变收藏的币对
    @action changeFavoriteList(instrumentId) {
        let index = this.favoriteList.indexOf(instrumentId);
        if(index > -1) {
            this.favoriteList.splice(index, 1);
        } else {
            this.favoriteList.push(instrumentId);
        }
        common.setLS("favoriteList", this.favoriteList);
    }
}

export default InstrumentStore;
