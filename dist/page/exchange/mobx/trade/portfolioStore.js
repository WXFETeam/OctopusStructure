var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class PortfolioStore {
    constructor() {
        this.oriPortfolio = [];
    }
    //服务器已成交订单数据map成页面列表渲染数据
    get portfolioListMap() {
        return dataMapping.trade.portfolioListMap(this.oriPortfolio);
    }
    //更新已成交订单数据（服务器原始数据）
    updatePortfolioList(portfolioData) {
        if (Object.prototype.toString.call(portfolioData) == "[object Array]") {
            this.oriPortfolio = portfolioData;
            //数组表示快照
        }
        else {
            //对象表示增量
            var combineTarget = false; //标识是否有同ID数据需要合并
            this.oriPortfolio.map((item) => {
                if (item.id == portfolioData.id) {
                    Object.assign(item, portfolioData);
                    combineTarget = true;
                }
            });
            if (!combineTarget) {
                this.oriPortfolio.unshift(portfolioData);
            }
        }
    }
}
__decorate([
    observable
], PortfolioStore.prototype, "oriPortfolio", void 0);
__decorate([
    computed
], PortfolioStore.prototype, "portfolioListMap", null);
__decorate([
    action
], PortfolioStore.prototype, "updatePortfolioList", null);
export default PortfolioStore;
//# sourceMappingURL=portfolioStore.js.map