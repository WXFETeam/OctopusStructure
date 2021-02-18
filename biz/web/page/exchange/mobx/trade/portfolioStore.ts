import * as React from 'react';
import { observable, action, computed } from 'mobx';

class PortfolioStore {
    @observable oriPortfolio: Array<Object>; //已成交订单

    constructor() {
        this.oriPortfolio = [];
    }

    //服务器已成交订单数据map成页面列表渲染数据
    @computed get portfolioListMap(): Array<Object> {
        return dataMapping.trade.portfolioListMap(this.oriPortfolio);
    }

    //更新已成交订单数据（服务器原始数据）
    @action updatePortfolioList(portfolioData) {
        if(Object.prototype.toString.call(portfolioData) == "[object Array]") {
            this.oriPortfolio = portfolioData;
            //数组表示快照
        } else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriPortfolio.map((item: any) => {
                if(item.id == portfolioData.id) {
                    Object.assign(item, portfolioData);
                    combineTarget = true;
                }
            });
            if(!combineTarget) {
                this.oriPortfolio.unshift(portfolioData);
            }
        }
    }
}

export default PortfolioStore;
